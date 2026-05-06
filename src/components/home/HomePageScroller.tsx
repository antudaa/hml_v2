"use client";

import {
  Children,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
} from "react";
import styles from "./HomePageScroller.module.css";

const WHEEL_THRESHOLD = 24;
const ANIMATION_DURATION_MS = 1050;
const SNAP_MODE = "y proximity";

const EASE_EDGE_PORTION = 0.18;

const easeWithCruise = (progress: number) => {
  if (progress <= 0) return 0;
  if (progress >= 1) return 1;

  const edge = EASE_EDGE_PORTION;

  if (progress < edge) {
    const x = progress / edge;
    return edge * (-Math.pow(x, 3) + 2 * Math.pow(x, 2));
  }

  if (progress > 1 - edge) {
    const x = (1 - progress) / edge;
    return 1 - edge * (-Math.pow(x, 3) + 2 * Math.pow(x, 2));
  }

  return progress;
};

function canNestedElementScroll(
  target: EventTarget | null,
  container: HTMLElement,
  deltaY: number,
) {
  let node = target instanceof HTMLElement ? target : null;

  while (node && node !== container) {
    const style = window.getComputedStyle(node);
    const overflowY = style.overflowY;
    const canScrollY =
      (overflowY === "auto" || overflowY === "scroll") &&
      node.scrollHeight > node.clientHeight + 1;

    if (canScrollY) {
      const canScrollUp = node.scrollTop > 0;
      const canScrollDown =
        node.scrollTop + node.clientHeight < node.scrollHeight - 1;

      if ((deltaY < 0 && canScrollUp) || (deltaY > 0 && canScrollDown)) {
        return true;
      }
    }

    node = node.parentElement;
  }

  return false;
}

type HomePageScrollerProps = {
  children: ReactNode;
};

export function HomePageScroller({ children }: HomePageScrollerProps) {
  const sections = useMemo(() => Children.toArray(children), [children]);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const activeIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || sections.length === 0) return;

    const cancelAnimation = () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      container.style.scrollSnapType = SNAP_MODE;
      isAnimatingRef.current = false;
    };

    const updateActiveIndex = () => {
      const panelHeight = container.clientHeight || 1;
      const closestIndex = Math.round(container.scrollTop / panelHeight);
      activeIndexRef.current = Math.max(
        0,
        Math.min(closestIndex, sections.length - 1),
      );
    };

    const scrollToIndex = (index: number) => {
      const clampedIndex = Math.max(0, Math.min(index, sections.length - 1));
      const startTop = container.scrollTop;
      const targetTop = clampedIndex * container.clientHeight;
      const distance = targetTop - startTop;

      if (Math.abs(distance) < 2) {
        activeIndexRef.current = clampedIndex;
        return;
      }

      activeIndexRef.current = clampedIndex;
      isAnimatingRef.current = true;
      cancelAnimation();
      isAnimatingRef.current = true;
      container.style.scrollSnapType = "none";

      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / ANIMATION_DURATION_MS, 1);
        const easedProgress = easeWithCruise(progress);

        container.scrollTop = startTop + distance * easedProgress;

        if (progress < 1) {
          animationFrameRef.current = window.requestAnimationFrame(tick);
          return;
        }

        container.scrollTop = targetTop;
        container.style.scrollSnapType = SNAP_MODE;
        isAnimatingRef.current = false;
        animationFrameRef.current = null;
        updateActiveIndex();
      };

      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) return;

      const pageScroller = document.scrollingElement;
      const pageScrollTop = pageScroller?.scrollTop ?? 0;

      if (pageScrollTop > 0) {
        event.preventDefault();
        window.scrollBy({ top: event.deltaY, behavior: "auto" });
        return;
      }

      if (canNestedElementScroll(event.target, container, event.deltaY)) {
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = activeIndexRef.current + direction;
      const isPastFirstSection = nextIndex < 0;
      const isPastLastSection = nextIndex >= sections.length;

      if (isPastFirstSection || isPastLastSection) {
        return;
      }

      event.preventDefault();

      if (isAnimatingRef.current) return;

      scrollToIndex(nextIndex);
    };

    const handleScroll = () => {
      updateActiveIndex();
    };

    updateActiveIndex();
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimation();
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className={styles.viewport} ref={containerRef}>
      {sections.map((section, index) => (
        <div
          className={styles.panel}
          key={index}
          ref={(node) => {
            sectionRefs.current[index] = node;
          }}
        >
          {section}
        </div>
      ))}
    </div>
  );
}
