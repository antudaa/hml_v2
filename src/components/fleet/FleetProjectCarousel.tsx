"use client";

import { useEffect, useMemo, useState } from "react";
import type { FleetItem, FleetProjectReference } from "@/data/fleet";
import { HomeProject, type ProjectDetailData } from "@/data/project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardHeader } from "@/components/ui/card";
import { FleetAssetImage } from "./FleetAssetImage";
import FleetProjectDetailModal from "./FleetProjectDetailModal";
import styles from "./FleetProjectCarousel.module.css";

function getFallbackProjectDetails(
  fleet: FleetItem,
  item: FleetProjectReference,
): ProjectDetailData {
  return {
    id: `${fleet.id}-${item.projectName}`,
    name: item.projectName,
    image: item.image || fleet.image,
    description: `${fleet.name} featured project`,
    vessel: fleet.name,
    projectDetails: `This featured project belongs to the ${fleet.name} fleet portfolio. Detailed project-specific metadata for this fleet item has not been added to the shared projects dataset yet.`,
  };
}

export default function FleetProjectCarousel({
  autoPlayDelay = 3750,
  fleet,
}: {
  autoPlayDelay?: number;
  fleet: FleetItem;
}) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDetailData | null>(null);

  const projectsById = useMemo(
    () =>
      new Map<string, ProjectDetailData>(
        HomeProject.map((project) => [String(project.id), project]),
      ),
    [],
  );

  const projects = useMemo(
    () =>
      fleet.fleetProjects.map((item) => ({
        ...item,
        resolvedProject: item.projectId ? projectsById.get(String(item.projectId)) : undefined,
      })),
    [fleet.fleetProjects, projectsById],
  );

  useEffect(() => {
    if (!api) return;
    if (projects.length <= 1) return;

    let timer: number | null = null;

    const stop = () => {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    };

    const start = () => {
      stop();

      if (typeof document !== "undefined" && document.hidden) return;

      timer = window.setInterval(() => {
        api.scrollNext();
      }, Math.max(900, autoPlayDelay));
    };

    const root = api.rootNode();

    const onVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    root?.addEventListener("mouseenter", stop);
    root?.addEventListener("mouseleave", start);
    document.addEventListener("visibilitychange", onVisibilityChange);

    const raf = window.requestAnimationFrame(start);

    return () => {
      stop();
      window.cancelAnimationFrame(raf);
      root?.removeEventListener("mouseenter", stop);
      root?.removeEventListener("mouseleave", start);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [api, autoPlayDelay, projects.length]);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.inner}>
          <Carousel
            key={fleet.id}
            className={styles.carousel}
            opts={{ align: "start", loop: true }}
            setApi={setApi}
          >
            <CarouselContent className={styles.track}>
              {projects.map((item, index) => {
                const resolvedProject =
                  item.resolvedProject || getFallbackProjectDetails(fleet, item);
                const imageSrc =
                  item.image ||
                  (typeof item.resolvedProject?.image === "string"
                    ? item.resolvedProject.image
                    : undefined);

                return (
                  <CarouselItem
                    className={styles.item}
                    key={`${fleet.id}-${item.projectName}-${index}`}
                  >
                    <button
                      aria-label={`Open project details for ${item.projectName}`}
                      className={styles.cardButton}
                      onClick={() => setSelectedProject(resolvedProject)}
                      type="button"
                    >
                      <Card className={styles.card}>
                        <CardHeader className={styles.cardHeader}>
                          <div className={styles.cardMedia}>
                            <FleetAssetImage
                              alt={`${fleet.name} project ${index + 1}`}
                              className={styles.cardImage}
                              fallbackLabel={item.projectName}
                              fallbackSrc={fleet.image}
                              fill
                              priority={index === 0}
                              sizes="100vw"
                              src={imageSrc}
                            />
                            <div className={styles.cardOverlay} />
                          </div>

                          <div className={styles.cardTitleWrap}>
                            <div className={styles.cardTitleBand}>
                              <p className={styles.cardTitle}>
                                {item.projectName}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </button>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <div className={styles.controls}>
              <div className={styles.controlSlot}>
                <CarouselPrevious
                  aria-label="Previous fleet project"
                  className={styles.navButton}
                />
              </div>

              <div className={styles.controlSlot}>
                <CarouselNext
                  aria-label="Next fleet project"
                  className={styles.navButton}
                />
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      <FleetProjectDetailModal
        fallbackImage={fleet.image}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}
