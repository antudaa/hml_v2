"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { DownloadIcon } from "@/components/ui/icons";
import {
  FleetData,
  fleetDescriptionParagraphs,
  getFleetSpecifications,
  visibleFleetTabs,
} from "@/data/fleet";
import FleetProjectCarousel from "./FleetProjectCarousel";
import { FleetAssetImage } from "./FleetAssetImage";
import styles from "./FleetPage.module.css";

function FleetDescription({ className }: { className?: string }) {
  return (
    <div className={`${styles.description} ${className ?? ""}`}>
      {fleetDescriptionParagraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export function FleetPage() {
  const [activeTab, setActiveTab] = useState<(typeof visibleFleetTabs)[number]["value"]>("megacaravan");
  const contentRef = useRef<HTMLDivElement>(null);

  const activeFleet = useMemo(
    () => FleetData.find((fleet) => fleet.id === activeTab) ?? FleetData[0],
    [activeTab],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 48 * 16) return;
    if (!contentRef.current) return;

    contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeTab]);

  const specifications = getFleetSpecifications(activeFleet);

  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.headerBlock}>
            <div className={styles.headingWrap}>
              <h1 className={styles.heading}>FLEET INFORMATION</h1>

              <div className={styles.tabs} role="tablist" aria-label="Fleet tabs">
                {visibleFleetTabs.map((fleet) => (
                  <button
                    aria-selected={activeTab === fleet.value}
                    className={`${styles.tabButton} ${
                      activeTab === fleet.value ? styles.tabButtonActive : ""
                    }`}
                    key={fleet.value}
                    onClick={() => setActiveTab(fleet.value)}
                    role="tab"
                    type="button"
                  >
                    <span className={styles.tabLabel}>{fleet.label}</span>
                    <span className={styles.tabWeight}>{fleet.weight}</span>
                  </button>
                ))}
              </div>
            </div>

            <FleetDescription className={styles.mobileDescription} />
          </div>

          <div className={styles.scrollTarget} ref={contentRef} />

          <div className={styles.panel}>
            <div className={styles.topGrid}>
              <div className={styles.leftColumn}>
                <div className={styles.titleRow}>
                  <h2 className={styles.vesselName}>{activeFleet.name}</h2>

                  {activeFleet.ga ? (
                    <a
                      className={styles.downloadButton}
                      download
                      href={activeFleet.ga}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <DownloadIcon className={styles.downloadIcon} />
                      Download GA
                    </a>
                  ) : null}
                </div>

                <aside className={styles.specs}>
                  {specifications.map(([label, value], index) => (
                    <div key={label}>
                      <div className={styles.specRow}>
                        <p className={styles.specLabel}>{label}</p>
                        <span className={styles.specValue}>{value}</span>
                      </div>
                      {(index + 1) % 2 === 0 && index < specifications.length - 1 ? (
                        <hr className={styles.specDivider} />
                      ) : null}
                    </div>
                  ))}
                </aside>
              </div>

              <FleetDescription className={styles.desktopDescription} />
            </div>

            <div className={styles.heroImageWrap}>
              <FleetAssetImage
                alt={activeFleet.name}
                className={styles.heroImage}
                fallbackLabel={activeFleet.name}
                fill={false}
                height={1000}
                priority
                sizes="100vw"
                src={activeFleet.image}
                width={1800}
              />
            </div>
          </div>

          <FleetProjectCarousel fleet={activeFleet} />
        </div>
      </section>
    </main>
  );
}
