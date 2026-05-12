import Image from "next/image";
import { engineeringStandards } from "@/data/engineering";
import styles from "./EngineeringStandards.module.css";

export function EngineeringStandards() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Standards</h1>

        <div className={styles.grid}>
          {engineeringStandards.map((standard) => (
            <div className={styles.item} key={standard.name}>
              <div className={styles.logoWrap}>
                <Image
                  alt={standard.alt}
                  className={styles.logo}
                  height={250}
                  loading="lazy"
                  src={standard.src}
                  width={500}
                />
              </div>
              <p className={styles.label}>{standard.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
