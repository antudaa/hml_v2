import Image from "next/image";
import type { EngineeringCapabilityItem } from "@/data/engineering";
import styles from "./EngineeringCard.module.css";

type EngineeringCardProps = EngineeringCapabilityItem & {
  showDetails: boolean;
};

export function EngineeringCard({
  image,
  title,
  subtitle,
  description,
  showDetails,
}: EngineeringCardProps) {
  return (
    <div className={styles.card}>
      <Image
        alt={title}
        className={styles.image}
        fill
        sizes="100vw"
        src={image}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.subtitle}>{subtitle}</p>
        <h3 className={styles.title}>{title}</h3>
        <div
          className={`${styles.details} ${
            showDetails ? styles.detailsVisible : styles.detailsHidden
          }`}
        >
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}
