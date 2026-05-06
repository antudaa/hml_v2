"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";
import type { LatestNewsItem } from "@/data/home/types";
import styles from "./LatestNews.module.css";

const MONTH_ORDER: Record<string, number> = {
  JAN: 1,
  FEB: 2,
  MAR: 3,
  APR: 4,
  MAY: 5,
  JUN: 6,
  JUL: 7,
  AUG: 8,
  SEP: 9,
  OCT: 10,
  NOV: 11,
  DEC: 12,
};

function NewsImage({
  alt,
  src,
}: {
  alt: string;
  src?: string;
}) {
  const [errored, setErrored] = useState(false);
  const imageSrc = !errored && src ? src : "";

  if (!imageSrc || imageSrc === "/placeholder.svg") {
    return <div className={styles.imageFallback}>{alt}</div>;
  }

  return (
    <Image
      alt={alt}
      className={styles.image}
      fill
      onError={() => setErrored(true)}
      sizes="(min-width: 64rem) 220px, (min-width: 40rem) 50vw, 100vw"
      src={imageSrc}
      unoptimized
    />
  );
}

export function LatestNews() {
  const { latestNews } = siteConfig;
  const events = latestNews.items.slice(0, latestNews.pageSize);
  const [view, setView] = useState<"list" | "month">("list");
  const returnTo = `/#${latestNews.sectionId}`;

  const handleNewsClick = () => {
    window.sessionStorage.setItem(
      latestNews.storageKey,
      latestNews.sectionId,
    );
  };

  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => {
      const aMonth = MONTH_ORDER[a.date.month] ?? 0;
      const bMonth = MONTH_ORDER[b.date.month] ?? 0;
      const aDay = Number(a.date.day) || 0;
      const bDay = Number(b.date.day) || 0;
      if (aMonth !== bMonth) return bMonth - aMonth;
      return bDay - aDay;
    });
  }, [events]);

  const groupedByMonth = useMemo(() => {
    return sortedEvents.reduce<Record<string, LatestNewsItem[]>>((acc, event) => {
      const key = event.date.month;
      acc[key] = acc[key] ? [...acc[key], event] : [event];
      return acc;
    }, {});
  }, [sortedEvents]);

  const renderArticle = (event: LatestNewsItem) => {
    const imageSrc = event?.image || event.images?.[0];
    const preview = event.body.replace(/\s+/g, " ").slice(0, 220).trim();

    return (
      <article className={styles.article} key={event.id}>
        <div className={styles.dateBlock}>
          <div className={styles.dateMonth}>{event.date.month}</div>
          <div className={styles.dateDay}>{event.date.day}</div>
        </div>

        <div className={styles.imageFrame}>
          <NewsImage alt={event.title} src={imageSrc} />
        </div>

        <div className={styles.copy}>
          <h3 className={styles.title}>{event.title}</h3>
          {event.subtitle ? <p className={styles.subtitle}>{event.subtitle}</p> : null}
          {preview ? <p className={styles.body}>{preview}...</p> : null}
          <Link
            className={styles.learnMore}
            href={{
              pathname: `/news-events/${event.id}`,
              query: {
                [latestNews.returnQueryKey]: returnTo,
              },
            }}
            onClick={handleNewsClick}
          >
            Learn More
          </Link>
        </div>
      </article>
    );
  };

  return (
    <section className={styles.section} id={latestNews.sectionId}>
      <div className={styles.shell}>
        <div className={styles.header}>
          <h1 className={styles.heading}>LATEST NEWS</h1>

          <div className={styles.viewToggle}>
            <button
              aria-pressed={view === "list"}
              className={`${styles.toggleButton} ${
                view === "list" ? styles.toggleActive : ""
              }`}
              onClick={() => setView("list")}
              type="button"
            >
              <span className={styles.listIcon}>
                <span className={styles.listIconLine} />
                <span className={styles.listIconLine} />
                <span className={styles.listIconLine} />
              </span>
              LIST
            </button>

            <button
              aria-pressed={view === "month"}
              className={`${styles.toggleButton} ${
                view === "month" ? styles.toggleActive : ""
              }`}
              onClick={() => setView("month")}
              type="button"
            >
              <span className={styles.monthIcon}>
                <span className={styles.monthIconCell} />
                <span className={styles.monthIconCell} />
                <span className={styles.monthIconCell} />
                <span className={styles.monthIconCell} />
              </span>
              MONTH
            </button>
          </div>
        </div>

        <div className={styles.board}>
          <div
            className={styles.boardMap}
            style={{
              backgroundImage: `url(${latestNews.backgroundImage})`,
            }}
          />

          <div className={styles.scrollArea}>
            {sortedEvents.length === 0 ? (
              <div className={styles.emptyState}>
                Latest news items are not added yet.
              </div>
            ) : view === "list" ? (
              sortedEvents.map((event) => renderArticle(event))
            ) : (
              Object.entries(groupedByMonth).map(([month, monthEvents]) => (
                <div className={styles.monthGroup} key={month}>
                  <div className={styles.monthHeading}>{month}</div>
                  <div className={styles.monthEntries}>
                    {monthEvents.map((event) => renderArticle(event))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
