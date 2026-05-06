import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[120rem] px-4",
        "xs:px-5 sm:px-6 md:px-8 lg:px-10 2xl:px-12 3xl:px-16 qhd:max-w-[132rem] qhd:px-20 display4k:max-w-[160rem] display4k:px-28 display8k:max-w-[192rem] display8k:px-32",
        className,
      )}
      {...props}
    />
  );
}
