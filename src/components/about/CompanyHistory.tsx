"use client";

import { AnchorIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import styles from "./CompanyHistory.module.css";

type CompanyHistoryItem = {
  year: string;
  events: readonly {
    month: string;
    text: string;
  }[];
};

export function CompanyHistory() {
  const { aboutCompanyHistory } = siteConfig;
  const historyItems = aboutCompanyHistory.items as readonly CompanyHistoryItem[];

  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <h2 className={styles.eyebrow}>{aboutCompanyHistory.eyebrow}</h2>
            <h1 className={styles.title}>{aboutCompanyHistory.title}</h1>
            <p className={styles.description}>{aboutCompanyHistory.description}</p>
          </div>

          <div className={styles.timelineWrap}>
            <ol className={styles.timeline}>
              <span aria-hidden="true" className={styles.timelineLine} />

              {historyItems.length > 0 ? (
                historyItems.map((item) => (
                  <li className={styles.timelineItem} key={item.year}>
                    <span aria-hidden="true" className={styles.marker} />
                    <h3 className={styles.year}>{item.year}</h3>

                    {item.events.map((event) => (
                      <p className={styles.event} key={`${item.year}-${event.month}-${event.text}`}>
                        <span className={styles.month}>{event.month}</span>
                        {event.text}
                      </p>
                    ))}
                  </li>
                ))
              ) : (
                <li className={styles.emptyState}>
                  Company history items are not added yet.
                </li>
              )}

              <li className={styles.anchorRow}>
                <span aria-hidden="true" className={styles.anchor}>
                  <AnchorIcon />
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
