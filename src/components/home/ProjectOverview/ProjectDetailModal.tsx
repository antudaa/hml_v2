"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import styles from "./ProjectOverview.module.css";
import type { ProjectOverviewItem } from "./types";

type ProjectDetailModalProps = {
  project: ProjectOverviewItem | null;
  onClose: () => void;
};

function ProjectModalImage({
  alt,
  src,
}: {
  alt: string;
  src?: string;
}) {
  const [errored, setErrored] = useState(false);
  const imageSrc = !errored && src ? src : siteConfig.hero.posterImage;

  return (
    <Image
      alt={alt}
      className={styles.modalImage}
      fill
      onError={() => setErrored(true)}
      sizes="(max-width: 64rem) 100vw, 50vw"
      src={imageSrc}
      unoptimized
    />
  );
}

export function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, project]);

  if (!project) return null;

  return (
    <div
      aria-modal="true"
      className={styles.modalBackdrop}
      onClick={onClose}
      role="dialog"
    >
      <div
        className={styles.modalCard}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Close project details"
          className={styles.modalClose}
          onClick={onClose}
          type="button"
        >
          <CloseIcon />
        </button>

        <div className={styles.modalMedia}>
          <ProjectModalImage
            alt={project.name}
            key={project.image ?? String(project.id)}
            src={project.image}
          />
        </div>

        <div className={styles.modalBody}>
          <h2 className={styles.modalTitle}>{project.name}</h2>
          {project.description ? (
            <p className={styles.modalSubtitle}>{project.description}</p>
          ) : null}

          <div className={styles.detailGrid}>
            {project.client ? (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Client</span>
                <span className={styles.detailValue}>{project.client}</span>
              </div>
            ) : null}

            {project.cargo ? (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Cargo</span>
                <span className={styles.detailValue}>{project.cargo}</span>
              </div>
            ) : null}

            {project.pol ? (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>POL</span>
                <span className={styles.detailValue}>{project.pol}</span>
              </div>
            ) : null}

            {project.pod ? (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>POD</span>
                <span className={styles.detailValue}>{project.pod}</span>
              </div>
            ) : null}

            {project.duration ? (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Duration</span>
                <span className={styles.detailValue}>{project.duration}</span>
              </div>
            ) : null}

            {project.vessel ? (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Vessel</span>
                <span className={styles.detailValue}>{project.vessel}</span>
              </div>
            ) : null}

            {project.projectDetails ? (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Project Details</span>
                <span className={styles.detailValue}>
                  {project.projectDetails}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
