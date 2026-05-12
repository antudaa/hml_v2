"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import styles from "./ProjectOverview.module.css";
import type { ProjectOverviewItem } from "./types";

type ProjectWithYear = ProjectOverviewItem & { __year: number | null };

const extractYear = (value: unknown): number | undefined => {
  if (value == null) return undefined;

  const numeric = typeof value === "number" ? value : Number(value);
  if (Number.isFinite(numeric) && numeric >= 1900 && numeric <= 2100) {
    return Math.trunc(numeric);
  }

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.getFullYear();
  }

  if (typeof value === "string") {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) return parsed.getFullYear();

    const match = value.match(/\b(19\d{2}|20\d{2})\b/);
    if (match) return Number(match[1]);
  }

  return undefined;
};

const deriveYear = (project: ProjectOverviewItem): number | undefined => {
  const candidates: Array<unknown> = [
    project.year,
    project.projectYear,
    project.completionYear,
    project.startYear,
    project.endYear,
    project.date,
    project.publishedAt,
    project.createdAt,
    project.updatedAt,
    project.name,
    project.description,
  ];

  for (const candidate of candidates) {
    const year = extractYear(candidate);
    if (year !== undefined) return year;
  }

  return undefined;
};

function ProjectCardImage({
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
      className={styles.cardImage}
      fill
      onError={() => setErrored(true)}
      sizes="(max-width: 48rem) 78vw, (max-width: 64rem) 30vw, 20vw"
      src={imageSrc}
      unoptimized
    />
  );
}

export function HomeProjectOverview() {
  const raw = siteConfig.projectOverview.items;
  const projects = useMemo<ProjectWithYear[]>(
    () =>
      raw.map((project) => {
        const year = deriveYear(project);
        return { ...project, __year: year ?? null };
      }),
    [raw],
  );

  const scrollRef = useRef<HTMLDivElement>(null);
  const didInitialScroll = useRef(false);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const availableYearsAsc = useMemo(() => {
    const years = new Set<number>();
    projects.forEach((project) => {
      if (project.__year != null) years.add(project.__year);
    });
    return Array.from(years).sort((a, b) => a - b);
  }, [projects]);

  const timelineYears = useMemo(
    () => [...availableYearsAsc].sort((a, b) => b - a).map(String),
    [availableYearsAsc],
  );

  const [activeYear, setActiveYear] = useState<number>(
    Number(timelineYears[0] ?? new Date().getFullYear()),
  );

  const yearToFirstIndex = useMemo(() => {
    const map: Record<number, number> = {};
    projects.forEach((project, index) => {
      if (project.__year == null) return;
      if (map[project.__year] === undefined) map[project.__year] = index;
    });
    return map;
  }, [projects]);

  const updateScrollButtons = useCallback(() => {
    const element = scrollRef.current;
    if (!element) return;

    const { scrollLeft, scrollWidth, clientWidth } = element;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);

  const scrollByDir = useCallback(
    (direction: "left" | "right") => {
      const element = scrollRef.current;
      if (!element) return;

      const amount = element.offsetWidth / 1.2;
      element.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
      window.setTimeout(updateScrollButtons, 320);
    },
    [updateScrollButtons],
  );

  const alignCardToStart = useCallback(
    (target: HTMLDivElement) => {
      const container = scrollRef.current;
      if (!container) return;

      const paddingLeft =
        Number.parseFloat(getComputedStyle(container).paddingLeft) || 0;
      const left = Math.max(target.offsetLeft - paddingLeft, 0);
      container.scrollTo({ left, behavior: "smooth" });
      window.setTimeout(updateScrollButtons, 360);
    },
    [updateScrollButtons],
  );

  const findNearestExistingYear = useCallback(
    (clickedYear: number): number | undefined => {
      if (availableYearsAsc.includes(clickedYear)) return clickedYear;

      const earlier = availableYearsAsc.filter((year) => year <= clickedYear);
      if (earlier.length) return earlier[earlier.length - 1];

      return availableYearsAsc[0];
    },
    [availableYearsAsc],
  );

  const scrollToYear = useCallback(
    (yearString: string) => {
      const container = scrollRef.current;
      if (!container) return;

      const clickedYear = Number(yearString);
      if (!Number.isFinite(clickedYear)) return;

      setActiveYear(clickedYear);

      const targetYear = findNearestExistingYear(clickedYear);
      if (targetYear === undefined) return;

      const index = yearToFirstIndex[targetYear];
      let target: HTMLDivElement | null = null;

      if (index !== undefined) {
        target =
          container.querySelectorAll<HTMLDivElement>("[data-year]")[index] ??
          null;
      }

      if (!target) {
        target = container.querySelector(
          `[data-year="${String(targetYear)}"]`,
        ) as HTMLDivElement | null;
      }

      if (!target) return;
      alignCardToStart(target);
    },
    [alignCardToStart, findNearestExistingYear, yearToFirstIndex],
  );

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    element.addEventListener("scroll", updateScrollButtons, { passive: true });
    updateScrollButtons();

    return () => {
      element.removeEventListener("scroll", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  useEffect(() => {
    if (didInitialScroll.current) return;
    didInitialScroll.current = true;
    scrollToYear(String(activeYear));
  }, [activeYear, scrollToYear]);

  return (
    <section
      className={styles.section}
      id={siteConfig.projectOverview.sectionId}
    >
      <div className={styles.header}>
        <h1 className={styles.heading}>
          <span className={styles.headingTop}>
            {siteConfig.projectOverview.eyebrow}
          </span>
          <span className={styles.headingBottom}>
            {siteConfig.projectOverview.title}
          </span>
        </h1>

        <div className={styles.timelineOuter}>
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {timelineYears.map((year) => {
              const isActive = activeYear === Number(year);

              return (
                <div className={styles.timelineItem} key={year}>
                  <button
                    aria-label={`Jump to projects from ${year}`}
                    className={`${styles.yearButton} ${
                      isActive ? styles.yearActive : styles.yearInactive
                    }`}
                    onClick={() => scrollToYear(year)}
                    title={`Jump to ${year}`}
                    type="button"
                  >
                    {year}
                  </button>

                  <div className={styles.dotWrap}>
                    <button
                      aria-label={`Jump to projects from ${year}`}
                      className={`${styles.dotButton} ${
                        isActive ? styles.dotActive : styles.dotInactive
                      }`}
                      onClick={() => scrollToYear(year)}
                      type="button"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {canScrollLeft ? (
        <button
          className={`${styles.navButton} ${styles.navLeft}`}
          onClick={() => scrollByDir("left")}
          type="button"
        >
          <ChevronLeftIcon className="text-[#094d82]" />
        </button>
      ) : null}

      {canScrollRight ? (
        <button
          className={`${styles.navButton} ${styles.navRight}`}
          onClick={() => scrollByDir("right")}
          type="button"
        >
          <ChevronRightIcon className="text-[#094d82]" />
        </button>
      ) : null}

      <div className={styles.carousel} ref={scrollRef}>
        {projects.map((project) => (
          <div
            className={styles.cardWrap}
            data-year={project.__year != null ? String(project.__year) : ""}
            key={project.id}
          >
            <Link
              aria-label={`Open project page for ${project.name}`}
              className={styles.cardButton}
              href={`/projects/${project.id}`}
            >
              <div className={styles.cardMedia}>
                <ProjectCardImage
                  alt={project.name}
                  key={project.image ?? String(project.id)}
                  src={project.image}
                />
              </div>

              <p className={styles.cardCopy}>
                <span className={styles.cardName}>{project.name}:</span>{" "}
                <span className={styles.cardDescription}>
                  {project.description}
                </span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
