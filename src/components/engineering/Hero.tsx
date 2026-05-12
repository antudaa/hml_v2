"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Hero.module.css";

export function EngineeringHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.mediaWrap}>
        <div
          className={`${styles.imageFade} ${
            isLoaded ? styles.imageLoaded : styles.imageLoading
          }`}
        >
          <Image
            alt="In House Engineering"
            className={styles.image}
            fill
            loading="eager"
            onLoad={() => setIsLoaded(true)}
            priority
            src="https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754549968/EngineeringHeroBackground_wlaays.webp"
          />
        </div>

        {!isLoaded ? (
          <div className={styles.loaderOverlay}>
            <div className={styles.loader} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
