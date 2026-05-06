"use client";

import Image from "next/image";
import {
  GoalIcon,
  LightbulbIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import styles from "./MissionVision.module.css";

export function MissionVision() {
  const { aboutMissionVision } = siteConfig;

  return (
    <section className={styles.section}>
      <div className={styles.overlay} />

      <div className={styles.shell}>
        <div className={`${styles.card} ${styles.reveal} ${styles.delayOne}`}>
          <div className={styles.ceoGrid}>
            <div className={styles.portraitWrap}>
              <Image
                alt={aboutMissionVision.ceo.alt}
                className={styles.portrait}
                fill
                priority
                sizes="(min-width: 64rem) 22vw, 50vw"
                src={aboutMissionVision.ceo.image}
              />
            </div>

            <div className={styles.ceoCopy}>
              <p className={styles.eyebrow}>{aboutMissionVision.ceo.eyebrow}</p>
              <h2 className={styles.title}>{aboutMissionVision.ceo.title}</h2>

              <div className={styles.message}>
                {aboutMissionVision.ceo.paragraphs.map((text, index) => (
                  <p className={styles.paragraph} key={`${index}-${text.slice(0, 20)}`}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.duoGrid}>
          <div className={`${styles.infoCard} ${styles.reveal} ${styles.delayTwo}`}>
            <GoalIcon className={styles.iconLarge} />
            <h3 className={styles.infoTitle}>
              {aboutMissionVision.mission.prefix}{" "}
              <span className={styles.accent}>{aboutMissionVision.mission.highlight}</span>
            </h3>
            <div className={styles.divider} />
            <GoalIcon className={styles.iconSmall} />
            <p className={styles.infoBody}>{aboutMissionVision.mission.body}</p>
          </div>

          <div className={`${styles.infoCard} ${styles.reveal} ${styles.delayThree}`}>
            <LightbulbIcon className={styles.iconLarge} />
            <h3 className={styles.infoTitle}>
              {aboutMissionVision.vision.prefix}{" "}
              <span className={styles.accent}>{aboutMissionVision.vision.highlight}</span>
            </h3>
            <div className={styles.divider} />
            <LightbulbIcon className={styles.iconSmall} />
            <p className={styles.infoBody}>{aboutMissionVision.vision.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
