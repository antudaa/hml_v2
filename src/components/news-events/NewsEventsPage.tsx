"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";
import type { LatestNewsItem } from "@/data/home/types";
import {
  getNewsEventImage,
  groupNewsEventsByMonth,
  sortNewsEvents,
} from "./newsEventsUtils";
import styles from "./NewsEventsPage.module.css";

type ViewMode = "list" | "month";

function NewsCard({
  event,
  returnTo,
}: {
  event: LatestNewsItem;
  returnTo: string;
}) {
  const imageSrc = getNewsEventImage(event);

  return (
    <Link
      className={styles.card}
      href={{
        pathname: `/news-events/${event.id}`,
        query: {
          [siteConfig.latestNews.returnQueryKey]: returnTo,
        },
      }}
    >
      <div className={styles.cardMedia}>
        {imageSrc ? (
          <Image
            alt={event.title}
            className={styles.cardImage}
            fill
            sizes="(min-width: 80rem) 23vw, (min-width: 40rem) 47vw, 100vw"
            src={imageSrc}
          />
        ) : (
          <div className={styles.cardFallback}>{event.title}</div>
        )}

        <div className={styles.dateBadge}>
          <span className={styles.dateMonth}>{event.date.month}</span>
          <span className={styles.dateDay}>{event.date.day}</span>
        </div>
      </div>

      <h2 className={styles.cardTitle}>{event.title}</h2>
      {event.subtitle ? <p className={styles.cardSubtitle}>{event.subtitle}</p> : null}
      <span className={styles.learnMore}>Learn More</span>
    </Link>
  );
}

export function NewsEventsPage() {
  const { latestNews } = siteConfig;
  const events = latestNews.items.slice(0, latestNews.pageSize);
  const [view, setView] = useState<ViewMode>("list");
  const returnTo = "/news-events";

  const sortedEvents = useMemo(() => sortNewsEvents(events), [events]);
  const groupedByMonth = useMemo(() => groupNewsEventsByMonth(sortedEvents), [sortedEvents]);

  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.header}>
          <h1 className={styles.heading}>LATEST NEWS</h1>

          <div className={styles.viewToggle}>
            <button
              aria-pressed={view === "list"}
              className={`${styles.toggleButton} ${
                view === "list" ? styles.toggleButtonActive : ""
              }`}
              onClick={() => setView("list")}
              type="button"
            >
              <span className={styles.listIcon}>
                <span className={styles.listLine} />
                <span className={styles.listLine} />
                <span className={styles.listLine} />
              </span>
              LIST
            </button>

            <button
              aria-pressed={view === "month"}
              className={`${styles.toggleButton} ${
                view === "month" ? styles.toggleButtonActive : ""
              }`}
              onClick={() => setView("month")}
              type="button"
            >
              <span className={styles.monthIcon}>
                <span className={styles.monthCell} />
                <span className={styles.monthCell} />
                <span className={styles.monthCell} />
                <span className={styles.monthCell} />
              </span>
              MONTH
            </button>
          </div>
        </div>

        <div className={styles.board}>
          <div
            className={styles.mapBackdrop}
            style={{ backgroundImage: `url(${latestNews.backgroundImage})` }}
          />
          <div className={styles.boardRail} />
          <div className={styles.boardRailThumb} />

          <div className={styles.boardInner}>
            {sortedEvents.length === 0 ? (
              <div className={styles.emptyState}>Latest news items are not added yet.</div>
            ) : view === "list" ? (
              <div className={styles.cardsGrid}>
                {sortedEvents.map((event) => (
                  <NewsCard event={event} key={event.id} returnTo={returnTo} />
                ))}
              </div>
            ) : (
              <div className={styles.monthGroups}>
                {Object.entries(groupedByMonth).map(([month, monthEvents]) => (
                  <section className={styles.monthGroup} key={month}>
                    <h2 className={styles.monthHeading}>{month}</h2>
                    <div className={styles.cardsGrid}>
                      {monthEvents.map((event) => (
                        <NewsCard event={event} key={event.id} returnTo={returnTo} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
