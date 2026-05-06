"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import styles from "./OurCargoExpertise.module.css";

export function OurCargoExpertise() {
  const { cargoExpertise } = siteConfig;
  const [hoverIndex, setHoverIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

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
          const isExpanded = expandedIndex === index;

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
                    {isExpanded ? item.viewMore : item.subtitle}
                  </p>

                  <div className={styles.buttonRow}>
                    <Button
                      className={styles.actionButton}
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleExpand(index);
                      }}
                      variant="outline"
                    >
                      {isExpanded ? "Show Less" : "Discover More"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
