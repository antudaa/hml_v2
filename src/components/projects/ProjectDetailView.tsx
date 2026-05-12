import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { CloseIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import styles from "./ProjectDetailView.module.css";

export type ProjectDetailData = {
  id: string | number;
  name: string;
  image: string | StaticImageData;
  description?: string;
  client?: string;
  cargo?: string;
  pol?: string;
  pod?: string;
  duration?: string;
  vessel?: string;
  projectDetails?: string;
};

export default function ProjectDetailView({
  project,
}: {
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
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <Image
          alt=""
          aria-hidden="true"
          className={styles.heroImage}
          fill
          priority
          sizes="100vw"
          src={project.image ?? siteConfig.hero.posterImage}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroCloseWrap}>
          <Link
            aria-label="Close project details"
            className={styles.heroCloseButton}
            href="/projects"
          >
            <CloseIcon />
          </Link>
        </div>

        <div className={styles.heroTitleWrap}>
          <h1 className={styles.heroTitle}>{project.name}</h1>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div className={styles.storyIntro}>
            <p className={styles.storyName}>{project.name}</p>
            {project.description ? (
              <p className={styles.storyDescription}>{project.description}</p>
            ) : null}
          </div>

          <div className={styles.storyHeadingRow}>
            <h2 className={styles.storyHeading}>Project Story:</h2>
          </div>

          <div className={styles.storyLayout}>
            <p className={styles.storyBody}>{project.projectDetails}</p>

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
    </main>
  );
}
