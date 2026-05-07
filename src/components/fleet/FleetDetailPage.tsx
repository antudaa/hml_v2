import { Suspense } from "react";
import { DownloadIcon } from "@/components/ui/icons";
import type { FleetItem } from "@/data/fleet";
import { getFleetSpecifications } from "@/data/fleet";
import { FleetAssetImage } from "./FleetAssetImage";
import FleetDetailNavigation from "./FleetDetailNavigation";
import FleetDetailNavigationShell from "./FleetDetailNavigationShell";
import styles from "./FleetDetailPage.module.css";

export function FleetDetailPage({
  fleet,
  nextFleetId,
  prevFleetId,
}: {
  fleet: FleetItem;
  nextFleetId?: string;
  prevFleetId?: string;
}) {
  const specifications = getFleetSpecifications(fleet);

  return (
    <section className={styles.section}>
        <Suspense
          fallback={
            <FleetDetailNavigationShell
              nextFleetId={nextFleetId}
              prevFleetId={prevFleetId}
              returnTo="/fleet"
            />
          }
        >
          <FleetDetailNavigation nextFleetId={nextFleetId} prevFleetId={prevFleetId} />
        </Suspense>

        <div className={styles.topGrid}>
          <aside className={styles.specs}>
            {specifications.map(([label, value], index) => (
              <div key={label}>
                <div className={styles.specRow}>
                  <p className={styles.specLabel}>{label}</p>
                  <span className={styles.specValue}>{value}</span>
                </div>

                {(index + 1) % 2 === 0 && index < specifications.length - 1 ? (
                  <hr className={styles.specDivider} />
                ) : null}
              </div>
            ))}
          </aside>

          <div className={styles.copyBlock}>
            <h1 className={styles.heading}>{fleet.name}</h1>

            {fleet.ga ? (
              <div className={styles.downloadWrap}>
                <a
                  className={styles.downloadButton}
                  download
                  href={fleet.ga}
                  rel="noreferrer"
                  target="_blank"
                >
                  <DownloadIcon className={styles.downloadIcon} />
                  Download GA
                </a>
              </div>
            ) : null}
          </div>
        </div>

        <div className={styles.imageWrap}>
          <FleetAssetImage
            alt={fleet.name}
            className={styles.image}
            fallbackLabel={fleet.name}
            fill={false}
            height={1000}
            priority
            sizes="100vw"
            src={fleet.image}
            width={1800}
          />
        </div>
    </section>
  );
}
