"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShipIcon } from "@/components/ui/icons";
import styles from "./FleetOverview.module.css";

export function HomeFleetOverview() {
  const { fleetOverview } = siteConfig;
  const returnTo = `/#${fleetOverview.sectionId}`;

  const handleFleetLinkClick = () => {
    window.sessionStorage.setItem(
      fleetOverview.storageKey,
      fleetOverview.sectionId,
    );
  };

  return (
    <section className={styles.section} id={fleetOverview.sectionId}>
      <div className={styles.inner}>
        <video
          autoPlay
          className={styles.backgroundVideo}
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={fleetOverview.videoWebm} type="video/webm" />
          <source src={fleetOverview.videoMp4} type="video/mp4" />
        </video>

        <div className={styles.overlay} />

        <div className={styles.content}>
          <div className={styles.headingWrap}>
            <h1 className={styles.heading}>
              <span className={styles.headingTop}>{fleetOverview.eyebrow}</span>
              <span className={styles.headingBottom}>{fleetOverview.title}</span>
            </h1>
          </div>

          <div className={styles.fleetWrap}>
            <div className={styles.fleetRow}>
              {fleetOverview.groups.map((fleet, index) => (
                <div className={styles.fleetGroup} key={fleet.title}>
                  <div className={styles.titleRow}>
                    <div className={styles.groupTitle}>{fleet.title}</div>
                  </div>

                  <div className={styles.vesselBand}>
                    {fleet.vessels.map((vessel) => (
                      <div className={styles.vesselList} key={vessel.vecelID}>
                        <Link
                          className={styles.vesselLink}
                          href={{
                            pathname: `/fleet/${vessel.vecelID}`,
                            query: {
                              [fleetOverview.returnQueryKey]: returnTo,
                            },
                          }}
                          onClick={handleFleetLinkClick}
                        >
                          <ShipIcon className={styles.shipIcon} />
                          {vessel.vesselName}
                        </Link>
                      </div>
                    ))}

                    {index < fleetOverview.groups.length - 1 ? (
                      <span aria-hidden="true" className={styles.separator} />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
