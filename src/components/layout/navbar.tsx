"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNavigation } from "@/config/navigation";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import styles from "./Navbar.module.css";

const mobileNavigation = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "MEDIA", href: "/media" },
  { label: "NEWS & EVENTS", href: "/news-events" },
  ...mainNavigation,
] as const;

function navItemClassName(active: boolean) {
  return cn(
    "relative border-b-2 py-1 text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300",
    active
      ? "border-primary text-primary"
      : "border-transparent text-black hover:border-primary hover:text-primary",
  );
}

function mobileItemIsActive(
  href: string,
  states: {
    isHomeActive: boolean;
    isAboutPageActive: boolean;
    isMediaActive: boolean;
    isNewsEventsActive: boolean;
    isFleetActive: boolean;
    isProjectsActive: boolean;
    isEngineeringActive: boolean;
    isContactActive: boolean;
  },
) {
  switch (href) {
    case "/":
      return states.isHomeActive;
    case "/about":
      return states.isAboutPageActive;
    case "/media":
      return states.isMediaActive;
    case "/news-events":
      return states.isNewsEventsActive;
    case "/fleet":
      return states.isFleetActive;
    case "/projects":
      return states.isProjectsActive;
    case "/engineering":
      return states.isEngineeringActive;
    case "/contact":
      return states.isContactActive;
    default:
      return false;
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const normalizedPath = (pathname ?? "").replace(/\/$/, "");

  const isHomeActive = normalizedPath === "" || normalizedPath === "/";
  const isAboutPageActive = normalizedPath === "/about";
  const isAboutActive =
    isAboutPageActive ||
    normalizedPath.startsWith("/media") ||
    normalizedPath.startsWith("/news-events");
  const isMediaActive = normalizedPath === "/media";
  const isNewsEventsActive =
    normalizedPath === "/news-events" || normalizedPath.startsWith("/news-events/");
  const isFleetActive =
    normalizedPath === "/fleet" || normalizedPath.startsWith("/fleet/");
  const isProjectsActive =
    normalizedPath === "/projects" || normalizedPath.startsWith("/projects/");
  const isEngineeringActive =
    normalizedPath === "/engineering" ||
    normalizedPath.startsWith("/engineering/");
  const isContactActive = normalizedPath === "/contact";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navGlow} />
        <div className={styles.navLine} />

        <div className={styles.container}>
          <div className={styles.bar}>
            <Link
              href="/"
              className={styles.logoLink}
            >
              <Image
                alt="HML logo"
                className="h-12 w-auto object-contain 2xl:h-20"
                height={280}
                priority
                src="/logo/HML_Logo_Primary.png"
                width={1040}
              />
            </Link>

            <div className={styles.desktopNav}>
              <Link href="/" className={navItemClassName(isHomeActive)}>
                HOME
              </Link>

              <Link href="/about" className={navItemClassName(isAboutActive)}>
                ABOUT
              </Link>

              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navItemClassName(
                    item.href === "/fleet"
                      ? isFleetActive
                      : item.href === "/projects"
                        ? isProjectsActive
                        : item.href === "/engineering"
                          ? isEngineeringActive
                          : item.href === "/contact"
                            ? isContactActive
                        : false,
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className={styles.mobileToggleWrap}>
              <button
                aria-controls="mobile-navigation"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className={styles.mobileButton}
                onClick={() => setIsOpen((value) => !value)}
                type="button"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          styles.menuOverlay,
          isOpen && styles.menuOverlayOpen,
          "lg:hidden",
        )}
        id="mobile-navigation"
      >
        <button
          aria-label="Close menu"
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          type="button"
        >
          <CloseIcon />
        </button>

        <ul className={styles.mobileList}>
          {mobileNavigation.map((item) => (
            <li key={item.href} className={styles.mobileItem}>
              <Link href={item.href} onClick={() => setIsOpen(false)}>
                <span
                  className={cn(
                    styles.mobileLink,
                    mobileItemIsActive(item.href, {
                      isHomeActive,
                      isAboutPageActive,
                      isMediaActive,
                      isNewsEventsActive,
                      isFleetActive,
                      isProjectsActive,
                      isEngineeringActive,
                      isContactActive,
                    }) &&
                      styles.mobileLinkActive,
                  )}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.spacer} />
    </header>
  );
}
