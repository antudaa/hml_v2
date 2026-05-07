"use client";
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { useState } from "react";
import { DownloadIcon, PlayIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import styles from "./MediaHero.module.css";

function getYouTubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : "";
}

const { mediaHero } = siteConfig;

const mediaItems = [
  {
    type: "brochure" as const,
    key: "brochure",
    ...mediaHero.brochure,
  },
  ...mediaHero.videos.map((video) => {
    const id = getYouTubeId(video.url);

    return {
      type: "video" as const,
      key: video.url,
      caption: video.caption,
      id,
      thumbnail: id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "",
    };
  }),
];

export function MediaHero() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <Image
        alt={mediaHero.backgroundAlt}
        className={styles.background}
        fill
        priority
        sizes="100vw"
        src={mediaHero.backgroundImage}
      />

      <div className={styles.overlay} />

      <div className={styles.shell}>
        <div className={styles.headingWrap}>
          <h1 className={styles.heading}>
            {mediaHero.titlePrefix}{" "}
            <span className={styles.headingStrong}>{mediaHero.titleHighlight}</span>
          </h1>
        </div>

        <div className={styles.mediaSection}>
          <div className={styles.mediaGrid}>
            {mediaItems.map((item) => {
              if (item.type === "brochure") {
                return (
                  <article className={styles.item} key={item.key}>
                    <a
                      className={styles.cardLink}
                      download
                      href={item.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <div className={styles.frame}>
                        <Image
                          alt={item.imageAlt}
                          className={styles.coverImage}
                          fill
                          sizes="(min-width: 80rem) 22vw, (min-width: 64rem) 30vw, (min-width: 40rem) 45vw, 100vw"
                          src={item.image}
                        />

                        <div className={styles.cardOverlay}>
                          <span className={styles.downloadBadge}>
                            <DownloadIcon className={styles.badgeIcon} />
                            {item.actionLabel}
                          </span>
                        </div>
                      </div>

                      <p className={styles.caption}>{item.caption}</p>
                    </a>
                  </article>
                );
              }

              const isActive = item.id === activeVideoId;

              return (
                <article className={styles.item} key={item.key}>
                  <button
                    aria-label={`Play ${item.caption}`}
                    className={styles.videoButton}
                    onClick={() => setActiveVideoId(item.id)}
                    type="button"
                  >
                    <div className={`${styles.frame} ${isActive ? styles.frameActive : ""}`}>
                      {isActive ? (
                        <iframe
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className={styles.videoFrame}
                          loading="lazy"
                          src={`https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0`}
                          title={item.caption}
                        />
                      ) : item.thumbnail ? (
                        <>
                          <img
                            alt={item.caption}
                            className={styles.videoThumbnail}
                            loading="lazy"
                            src={item.thumbnail}
                          />

                          <div className={styles.cardOverlay}>
                            <span className={styles.playBadge}>
                              <PlayIcon className={styles.playIcon} />
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className={styles.videoFallback}>Video</div>
                      )}
                    </div>
                  </button>

                  <p className={styles.caption}>{item.caption}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
