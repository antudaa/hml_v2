"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import styles from "./OurCargoExpertise.module.css";

function truncateForMobile(text: string, maxChars: number) {
  if (text.length <= maxChars) return text;
  return `${text.slice(0, maxChars).trimEnd()}...`;
}

export function OurCargoExpertise() {
  const { cargoExpertise } = siteConfig;
  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <section className={styles.section} id={cargoExpertise.sectionId}>
      <div className={styles.sideRail}>
        <div className={styles.sideLabel}>{cargoExpertise.sideLabel}</div>
      </div>

      <div className={styles.panels}>
        <div className={styles.mobileHeader}>
          <div className={styles.mobileHeaderText}>
            {cargoExpertise.sideLabel}
          </div>
        </div>

        {cargoExpertise.items.map((item, index) => {
          const isHovered = hoverIndex === index;

          return (
            <div
              key={item.id}
              className={`${styles.panel} ${
                isHovered ? styles.panelActive : styles.panelInactive
              }`}
              onClick={() => setHoverIndex(index)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(0)}
            >
              <Image
                alt={item.title}
                className={styles.panelImage}
                fill
                loading="lazy"
                sizes="(max-width: 64rem) 100vw, 25vw"
                src={item.image}
                unoptimized
              />

              <div className={styles.overlay}>
                <h2
                  className={`${styles.title} ${
                    isHovered ? "" : styles.titleCollapsed
                  }`}
                >
                  {item.title}
                </h2>

                <div
                  className={`${styles.content} ${
                    isHovered ? styles.contentVisible : ""
                  }`}
                >
                  <p className={styles.description}>
                    <span className={styles.mobileDescription}>
                      {truncateForMobile(item.subtitle, 400)}
                    </span>
                    <span className={styles.desktopDescription}>
                      {item.subtitle}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
