"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";
import { HomeProject } from "@/data/project";
import styles from "./ProjectsPage.module.css";

type ProjectWithDerivedFields = (typeof HomeProject)[number] & {
  summary: string;
  year: string;
};

const projects: ProjectWithDerivedFields[] = HomeProject.map((project) => {
  const base =
    project.description?.trim() ||
    project.projectDetails?.split("\n")[0]?.trim() ||
    "";
  const summary =
    base.length > 130 ? `${base.slice(0, 130).trim()}...` : base;
  const yearMatch =
    project.duration?.match(/\b(19\d{2}|20\d{2})\b/) ||
    project.description?.match(/\b(19\d{2}|20\d{2})\b/) ||
    String(project.name).match(/\b(19\d{2}|20\d{2})\b/);
  const year = yearMatch ? yearMatch[1] : "";

  return { ...project, summary, year };
});

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("All");
  const [cargoFilter, setCargoFilter] = useState("All");

  const availableYears = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((project) => {
      if (project.year) set.add(project.year);
    });

    return ["All", ...Array.from(set).sort((a, b) => Number(b) - Number(a))];
  }, []);

  const availableCargo = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((project) => {
      if (project.cargo) set.add(project.cargo);
    });

    return ["All", ...Array.from(set).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesQuery =
        !normalizedQuery ||
        project.name?.toLowerCase().includes(normalizedQuery) ||
        project.description?.toLowerCase().includes(normalizedQuery) ||
        project.client?.toLowerCase().includes(normalizedQuery) ||
        project.cargo?.toLowerCase().includes(normalizedQuery) ||
        project.projectDetails?.toLowerCase().includes(normalizedQuery);
      const matchesYear =
        yearFilter === "All" || project.year === yearFilter;
      const matchesCargo =
        cargoFilter === "All" || project.cargo === cargoFilter;

      return matchesQuery && matchesYear && matchesCargo;
    });
  }, [cargoFilter, query, yearFilter]);

  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <video
          autoPlay
          className={styles.heroVideo}
          loop
          muted
          playsInline
          poster="https://res.cloudinary.com/dl28pqkb2/image/upload/v1768202874/project_background_gzenbk.jpg"
          preload="metadata"
        >
          <source
            src="https://res.cloudinary.com/dl28pqkb2/video/upload/v1768200888/Final_final_final_fw7rve.mp4"
            type="video/webm"
          />
          <source
            src="https://res.cloudinary.com/dl28pqkb2/video/upload/v1768200888/Final_final_final_fw7rve.mp4"
            type="video/mp4"
          />
        </video>

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className={styles.heroPanel}>
            <div className={styles.heroInner}>
              <h1 className={styles.heroHeading}>
                <span className={styles.heroHeadingTop}>OUR</span>
                <span className={styles.heroHeadingBottom}>PROJECTS</span>
              </h1>

              <div className={styles.heroCopy}>
                <p className={styles.heroText}>
                  HML specializes in transporting large-scale, heavy, and
                  high-value cargo for one of the world&apos;s most demanding
                  industries. Our vessels are specially designed to serve
                  projects in industries like shipbuilding, renewable energy,
                  oil and gas, port equipment, heavy machinery, and civil
                  construction. With accuracy, dependability and worldwide
                  reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.listSection}>
        <div className={styles.listInner}>
          <div className={styles.filters}>
            <div className={styles.searchWrap}>
              <label className={styles.filterLabel} htmlFor="project-search">
                Search
              </label>
              <input
                id="project-search"
                className={styles.searchInput}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects"
                type="text"
                value={query}
              />
            </div>

            <div className={styles.selectGroup}>
              <div className={styles.selectWrap}>
                <label className={styles.filterLabel} htmlFor="project-year">
                  Year
                </label>
                <select
                  id="project-year"
                  className={styles.select}
                  onChange={(event) => setYearFilter(event.target.value)}
                  value={yearFilter}
                >
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.selectWrap}>
                <label className={styles.filterLabel} htmlFor="project-cargo">
                  Cargo
                </label>
                <select
                  id="project-cargo"
                  className={`${styles.select} ${styles.cargoSelect}`}
                  onChange={(event) => setCargoFilter(event.target.value)}
                  value={cargoFilter}
                >
                  {availableCargo.map((cargo) => (
                    <option key={cargo} value={cargo}>
                      {cargo}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <article className={styles.card} key={project.id}>
                <div className={styles.cardMedia}>
                  <Image
                    alt={project.name}
                    className={styles.cardImage}
                    fill
                    sizes="(min-width: 64rem) 33vw, (min-width: 40rem) 50vw, 100vw"
                    src={project.image ?? siteConfig.hero.posterImage}
                  />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{project.name}</h3>
                  <p className={styles.cardSummary}>{project.summary}</p>
                  <Link
                    className={styles.cardLink}
                    href={`/projects/${project.id}`}
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
