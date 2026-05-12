"use client";

import { useState } from "react";
import { engineeringCapabilityData } from "@/data/engineering";
import { EngineeringCard } from "./EngineeringCard";
import styles from "./EngineeringWorkGallary.module.css";

export function EngineeringWorkGallary() {
  const [hoveredTop, setHoveredTop] = useState<number | null>(null);
  const [hoveredBottom, setHoveredBottom] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.spacer} />

      <div className={styles.topRow}>
        {engineeringCapabilityData.slice(0, 2).map((item, index) => {
          const isHovered = hoveredTop === index;
          const showDetails =
            hoveredTop === null ? index === 0 : hoveredTop === index;

          return (
            <div
              className={`${styles.panel} ${
                hoveredTop === null
                  ? index === 0
                    ? styles.panelTopExpanded
                    : styles.panelEqual
                  : isHovered
                    ? styles.panelTopExpanded
                    : styles.panelEqual
              }`}
              key={item.title}
              onMouseEnter={() => setHoveredTop(index)}
              onMouseLeave={() => setHoveredTop(null)}
            >
              <EngineeringCard {...item} showDetails={showDetails} />
            </div>
          );
        })}
      </div>

      <div className={styles.bottomRow}>
        {engineeringCapabilityData.slice(2, 5).map((item, index) => {
          const isHovered = hoveredBottom === index;
          const showDetails =
            hoveredBottom === null ? false : hoveredBottom === index;

          return (
            <div
              className={`${styles.panel} ${
                hoveredBottom === null
                  ? styles.panelEqual
                  : isHovered
                    ? styles.panelBottomExpanded
                    : styles.panelBottomCollapsed
              }`}
              key={item.title}
              onMouseEnter={() => setHoveredBottom(index)}
              onMouseLeave={() => setHoveredBottom(null)}
            >
              <EngineeringCard {...item} showDetails={showDetails} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
