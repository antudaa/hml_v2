import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import styles from "./FleetDetailNavigationShell.module.css";

export default function FleetDetailNavigationShell({
  nextFleetId,
  prevFleetId,
  returnTo,
}: {
  nextFleetId?: string;
  prevFleetId?: string;
  returnTo: string;
}) {
  return (
    <>
      <Link
        aria-label="Close fleet details"
        className={styles.closeButton}
        href={returnTo}
        title="Close"
      >
        <CloseIcon className={styles.closeIcon} />
      </Link>

      <div className={styles.navRow}>
        {prevFleetId ? (
          <Link
            className={styles.arrowLink}
            href={{
              pathname: `/fleet/${prevFleetId}`,
              query: {
                [siteConfig.fleetOverview.returnQueryKey]: returnTo,
              },
            }}
          >
            <ChevronLeftIcon className={`${styles.wave} ${styles.arrowStrong}`} />
            <ChevronLeftIcon className={`${styles.wave} ${styles.arrowMid}`} />
            <ChevronLeftIcon className={`${styles.wave} ${styles.arrowLight}`} />
          </Link>
        ) : (
          <div />
        )}

        {nextFleetId ? (
          <Link
            className={styles.arrowLink}
            href={{
              pathname: `/fleet/${nextFleetId}`,
              query: {
                [siteConfig.fleetOverview.returnQueryKey]: returnTo,
              },
            }}
          >
            <ChevronRightIcon className={`${styles.wave} ${styles.arrowLight}`} />
            <ChevronRightIcon className={`${styles.wave} ${styles.arrowMid}`} />
            <ChevronRightIcon className={`${styles.wave} ${styles.arrowStrong}`} />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </>
  );
}
