"use client";

import styles from "./FleetProjectDetailView.module.css";
import { FleetAssetImage } from "./FleetAssetImage";
import type { ProjectDetailData } from "@/data/project";

export default function FleetProjectDetailView({
  fallbackImage,
  project,
}: {
  fallbackImage: string;
  project: ProjectDetailData;
}) {
  const metaItems = [
    { label: "Client", value: project.client },
    { label: "Cargo", value: project.cargo },
    { label: "POL", value: project.pol },
    { label: "POD", value: project.pod },
    { label: "Duration", value: project.duration },
    { label: "Vessel", value: project.vessel },
  ].filter((item) => item.value);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <FleetAssetImage
          alt={project.name}
          className={styles.heroImage}
          fallbackLabel={project.name}
          fallbackSrc={fallbackImage}
          fill
          priority
          sizes="100vw"
          src={typeof project.image === "string" ? project.image : undefined}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{project.name}</h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.contentShell}>
          <div className={styles.headerBlock}>
            <p className={styles.eyebrow}>{project.name}</p>
            {project.description ? (
              <p className={styles.description}>{project.description}</p>
            ) : null}
          </div>

          <h2 className={styles.storyHeading}>Project Story</h2>

          <div className={styles.contentGrid}>
            <p className={styles.story}>
              {project.projectDetails || "Detailed project information has not been added yet."}
            </p>

            <div className={styles.metaList}>
              {metaItems.map((item) => (
                <div className={styles.metaItem} key={item.label}>
                  <span className={styles.metaLabel}>{item.label}:</span>
                  <span className={styles.metaValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
