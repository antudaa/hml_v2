"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import styles from "./AboutHero.module.css";

export function AboutHero() {
  const { aboutHero } = siteConfig;

  return (
    <section className={styles.section}>
      <Image
        alt="Ocean and mountains landscape with ship"
        className={styles.background}
        fill
        priority
        sizes="100vw"
        src={aboutHero.backgroundImage}
      />

      <div className={styles.contentWrap}>
        <div className={styles.panel}>
          <h1 className={styles.heading}>{aboutHero.title}</h1>

          <div className={styles.copy}>
            {aboutHero.paragraphs.map((text) => (
              <p className={styles.paragraph} key={text}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
