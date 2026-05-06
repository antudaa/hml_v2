import Image from "next/image";
import { siteConfig } from "@/config/site";
import styles from "./HeroHome.module.css";

export function HomeHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroInner}>
        <video
          autoPlay
          className={styles.backgroundVideo}
          loop
          muted
          playsInline
          poster={siteConfig.hero.posterImage}
          preload="metadata"
        >
          <source src={siteConfig.hero.videoWebm} type="video/webm" />
          <source src={siteConfig.hero.videoMp4} type="video/mp4" />
        </video>

        <div className={styles.overlay} />

        <div className={styles.contentWrap}>
          <h1 className={styles.heroReveal}>
            <div className={styles.headingInner}>
              <span className={`${styles.kicker} ${styles.kickerShadow}`}>
                {siteConfig.hero.eyebrow}
              </span>

              <span className={`${styles.title} ${styles.titleShadow}`}>
                <span className={styles.titleText}>
                  <span className={styles.firstLetter}>H</span>EAVY{" "}
                  <span className={styles.firstLetter}>M</span>ARINE{" "}
                  <span className={styles.firstLetter}>L</span>OGISTICS
                </span>
              </span>
            </div>
          </h1>
        </div>

        <div className={styles.statsRow}>
          {siteConfig.hero.stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.statIconWrap}>
                <Image
                  alt={stat.label}
                  className={styles.statIcon}
                  fill
                  sizes="2rem"
                  src={stat.icon}
                />
              </div>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
