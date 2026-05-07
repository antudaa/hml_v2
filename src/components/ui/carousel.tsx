"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export type CarouselApi = {
  canScrollNext: () => boolean;
  canScrollPrev: () => boolean;
  rootNode: () => HTMLDivElement | null;
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number) => void;
  selectedIndex: () => number;
};

type CarouselOptions = {
  align?: "center" | "end" | "start";
  loop?: boolean;
};

type CarouselProps = {
  opts?: CarouselOptions;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = CarouselProps & {
  canScrollNext: boolean;
  canScrollPrev: boolean;
  carouselRef: (node: HTMLDivElement | null) => void;
  scrollNext: () => void;
  scrollPrev: () => void;
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function assignRef<T>(ref: React.Ref<T> | undefined, value: T) {
  if (!ref) return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }

  ref.current = value;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(function Carousel(
  {
    children,
    className,
    opts,
    orientation = "horizontal",
    setApi,
    ...props
  },
  ref,
) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [itemCount, setItemCount] = React.useState(0);

  const getItems = React.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return [] as HTMLDivElement[];

    return Array.from(
      viewport.querySelectorAll<HTMLDivElement>("[data-carousel-item='true']"),
    );
  }, []);

  const updateSelectedIndex = React.useCallback(() => {
    const viewport = viewportRef.current;
    const items = getItems();

    setItemCount(items.length);

    if (!viewport || items.length === 0) {
      setSelectedIndex(0);
      return;
    }

    const currentOffset =
      orientation === "horizontal" ? viewport.scrollLeft : viewport.scrollTop;

    let nextIndex = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    items.forEach((item, index) => {
      const itemOffset =
        orientation === "horizontal" ? item.offsetLeft : item.offsetTop;
      const distance = Math.abs(itemOffset - currentOffset);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        nextIndex = index;
      }
    });

    setSelectedIndex(nextIndex);
  }, [getItems, orientation]);

  const scrollTo = React.useCallback(
    (index: number) => {
      const viewport = viewportRef.current;
      const items = getItems();
      if (!viewport || items.length === 0) return;

      let nextIndex = index;

      if (opts?.loop) {
        nextIndex = ((index % items.length) + items.length) % items.length;
      } else {
        nextIndex = Math.max(0, Math.min(index, items.length - 1));
      }

      const target = items[nextIndex];

      viewport.scrollTo({
        behavior: "smooth",
        left: orientation === "horizontal" ? target.offsetLeft : 0,
        top: orientation === "vertical" ? target.offsetTop : 0,
      });

      setSelectedIndex(nextIndex);
    },
    [getItems, opts?.loop, orientation],
  );

  const scrollPrev = React.useCallback(() => {
    scrollTo(selectedIndex - 1);
  }, [scrollTo, selectedIndex]);

  const scrollNext = React.useCallback(() => {
    scrollTo(selectedIndex + 1);
  }, [scrollTo, selectedIndex]);

  const canScrollPrev = opts?.loop ? itemCount > 1 : selectedIndex > 0;
  const canScrollNext = opts?.loop ? itemCount > 1 : selectedIndex < itemCount - 1;

  React.useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    updateSelectedIndex();

    const onScroll = () => updateSelectedIndex();
    viewport.addEventListener("scroll", onScroll, { passive: true });

    const resizeObserver = new ResizeObserver(() => updateSelectedIndex());
    resizeObserver.observe(viewport);
    getItems().forEach((item) => resizeObserver.observe(item));

    return () => {
      viewport.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
    };
  }, [children, getItems, updateSelectedIndex]);

  React.useEffect(() => {
    const raf = window.requestAnimationFrame(() => updateSelectedIndex());
    return () => window.cancelAnimationFrame(raf);
  }, [children, updateSelectedIndex]);

  React.useEffect(() => {
    if (!setApi) return;

    setApi({
      canScrollNext: () => canScrollNext,
      canScrollPrev: () => canScrollPrev,
      rootNode: () => rootRef.current,
      scrollNext,
      scrollPrev,
      scrollTo,
      selectedIndex: () => selectedIndex,
    });
  }, [canScrollNext, canScrollPrev, scrollNext, scrollPrev, scrollTo, selectedIndex, setApi]);

  const setRootNode = React.useCallback(
    (node: HTMLDivElement | null) => {
      rootRef.current = node;
      assignRef(ref, node);
    },
    [ref],
  );

  const setViewportNode = React.useCallback((node: HTMLDivElement | null) => {
    viewportRef.current = node;
  }, []);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (orientation === "horizontal") {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        scrollNext();
      }
    },
    [orientation, scrollNext, scrollPrev],
  );

  return (
    <CarouselContext.Provider
      value={{
        canScrollNext,
        canScrollPrev,
        carouselRef: setViewportNode,
        opts,
        orientation,
        scrollNext,
        scrollPrev,
      }}
    >
      <div
        {...props}
        ref={setRootNode}
        aria-roledescription="carousel"
        className={cn("relative", className)}
        onKeyDownCapture={handleKeyDown}
        role="region"
        tabIndex={props.tabIndex ?? 0}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function CarouselContent({ children, className, ...props }, ref) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className={cn(
        orientation === "horizontal"
          ? "overflow-x-auto overflow-y-hidden touch-pan-y"
          : "overflow-y-auto overflow-x-hidden touch-pan-x",
      )}
      style={{
        overscrollBehaviorX: "contain",
        overscrollBehaviorY: "auto",
        scrollbarWidth: "none",
        scrollSnapType: orientation === "horizontal" ? "x mandatory" : "y mandatory",
      }}
    >
      <div
        {...props}
        ref={ref}
        className={cn("flex h-full", orientation === "vertical" && "flex-col", className)}
      >
        {children}
      </div>
    </div>
  );
});

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function CarouselItem({ className, ...props }, ref) {
  return (
    <div
      {...props}
      ref={ref}
      aria-roledescription="slide"
      className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
      data-carousel-item="true"
      role="group"
      style={{ scrollSnapAlign: "start", ...(props.style ?? {}) }}
    />
  );
});

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function CarouselPrevious({ className, ...props }, ref) {
  const { canScrollPrev, scrollPrev } = useCarousel();

  return (
    <button
      {...props}
      ref={ref}
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full p-0",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      type="button"
    >
      <ChevronLeftIcon className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </button>
  );
});

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function CarouselNext({ className, ...props }, ref) {
  const { canScrollNext, scrollNext } = useCarousel();

  return (
    <button
      {...props}
      ref={ref}
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full p-0",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      type="button"
    >
      <ChevronRightIcon className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </button>
  );
});

export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious };
