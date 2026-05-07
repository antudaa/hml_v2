"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronLeftIcon } from "@/components/ui/icons";
import type { LatestNewsItem } from "@/data/home/types";
import { getNewsEventImage, getNewsEventImages } from "./newsEventsUtils";
import styles from "./NewsEventDetailClient.module.css";

export default function NewsEventDetailClient({
  backHref,
  event,
}: {
  backHref: string;
  event: LatestNewsItem;
}) {
  const galleryImages = useMemo(() => getNewsEventImages(event), [event]);
  const primaryImage = getNewsEventImage(event);
  const [activeImage, setActiveImage] = useState(galleryImages[0] || primaryImage || "");
  const paragraphs = event.body.split("\n\n").filter(Boolean);

  return (
    <article className={styles.article}>
      <div className={styles.topRow}>
        <Link className={styles.backLink} href={backHref}>
          <ChevronLeftIcon className={styles.backIcon} />
          Back
        </Link>
      </div>

      <header className={styles.header}>
        <div className={styles.dateBadge}>
          <span className={styles.dateMonth}>{event.date.month}</span>
          <span className={styles.dateDay}>{event.date.day}</span>
        </div>

        <div className={styles.headingBlock}>
          <h2 className={styles.title}>{event.title}</h2>
          {event.subtitle ? <p className={styles.subtitle}>{event.subtitle}</p> : null}
        </div>
      </header>

      <div className={styles.mediaBlock}>
        <div className={styles.heroMedia}>
          {activeImage ? (
            <Image
              alt={event.title}
              className={styles.heroImage}
              fill
              priority
              sizes="(min-width: 120rem) 84vw, (min-width: 64rem) 90vw, 100vw"
              src={activeImage}
            />
          ) : (
            <div className={styles.mediaFallback}>{event.title}</div>
          )}
        </div>

        {galleryImages.length > 1 ? (
          <div className={styles.thumbnailRow}>
            {galleryImages.map((image, index) => (
              <button
                aria-label={`Show image ${index + 1} for ${event.title}`}
                className={`${styles.thumbnailButton} ${
                  image === activeImage ? styles.thumbnailButtonActive : ""
                }`}
                key={image}
                onClick={() => setActiveImage(image)}
                type="button"
              >
                <span className={styles.thumbnailFrame}>
                  <Image
                    alt={`${event.title} image ${index + 1}`}
                    className={styles.thumbnailImage}
                    fill
                    sizes="8rem"
                    src={image}
                  />
                </span>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className={styles.bodyWrap}>
        {paragraphs.map((paragraph) => (
          <p className={styles.paragraph} key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
