"use client";

import Image from "next/image";
import { useState } from "react";

export function FleetAssetImage({
  alt,
  className,
  fallbackLabel,
  fallbackSrc,
  fill,
  priority,
  sizes,
  src,
  width,
  height,
}: {
  alt: string;
  className?: string;
  fallbackLabel?: string;
  fallbackSrc?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  src?: string;
  width?: number;
  height?: number;
}) {
  const [errored, setErrored] = useState(false);
  const imageSrc = !errored ? src || fallbackSrc || "" : fallbackSrc || "";

  if (!imageSrc) {
    return (
      <div className={className}>
        {fallbackLabel || alt}
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      fill={fill}
      height={height}
      onError={() => setErrored(true)}
      priority={priority}
      sizes={sizes}
      src={imageSrc}
      unoptimized
      width={width}
    />
  );
}
