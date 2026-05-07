"use client";

import { useEffect } from "react";
import { CloseIcon } from "@/components/ui/icons";
import type { ProjectDetailData } from "@/data/project";
import FleetProjectDetailView from "./FleetProjectDetailView";
import styles from "./FleetProjectDetailModal.module.css";

export default function FleetProjectDetailModal({
  fallbackImage,
  onClose,
  project,
}: {
  fallbackImage: string;
  onClose: () => void;
  project: ProjectDetailData | null;
}) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, project]);

  if (!project) return null;

  return (
    <div aria-modal="true" className={styles.overlay} role="dialog">
      <button
        aria-label="Close project details"
        className={styles.closeButton}
        onClick={onClose}
        type="button"
      >
        <CloseIcon className={styles.closeIcon} />
      </button>

      <div className={styles.inner}>
        <FleetProjectDetailView fallbackImage={fallbackImage} project={project} />
      </div>
    </div>
  );
}
