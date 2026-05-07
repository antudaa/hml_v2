"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { aboutNavigation, mainNavigation } from "@/config/navigation";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

function navItemClassName(active: boolean) {
  return cn(
    "relative border-b-2 py-1 text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300",
    active
      ? "border-primary text-primary"
      : "border-transparent text-black hover:border-primary hover:text-primary",
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const normalizedPath = (pathname ?? "").replace(/\/$/, "");

  const isHomeActive = normalizedPath === "" || normalizedPath === "/";
  const isAboutActive =
    normalizedPath === "/about" ||
    normalizedPath.startsWith("/media") ||
    normalizedPath.startsWith("/news-events");
  const isFleetActive =
    normalizedPath === "/fleet" || normalizedPath.startsWith("/fleet/");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="relative z-50">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.10)] backdrop-blur-md backdrop-saturate-150">
        <div className="mx-auto max-w-full px-4 md:px-10 lg:px-16">
          <div className="flex min-h-24 items-center justify-between gap-4 2xl:min-h-32">
            <Link
              href="/"
              className="relative z-50 flex items-center py-1 text-foreground"
            >
              <Image
                alt="HML logo"
                className="h-20 w-auto object-contain 2xl:h-28"
                height={280}
                priority
                src="/logo/HML_Logo_Primary.png"
                width={1040}
              />
            </Link>

            <div className="hidden items-center space-x-8 lg:flex">
              <Link href="/" className={navItemClassName(isHomeActive)}>
                HOME
              </Link>

              <div className="group relative">
                <Link href="/about" className={navItemClassName(isAboutActive)}>
                  ABOUT
                </Link>

                <div className="pointer-events-none absolute left-0 top-full mt-2 min-w-45 translate-y-1 rounded-md border border-slate-200 bg-white/95 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-[''] group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  {aboutNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm font-semibold text-[#0e3d61] transition hover:bg-slate-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navItemClassName(
                    item.href === "/fleet" ? isFleetActive : false,
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center lg:hidden">
              <button
                aria-controls="mobile-navigation"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="text-primary"
                onClick={() => setIsOpen((value) => !value)}
                type="button"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "fixed inset-0 z-40 bg-white/20 shadow-lg backdrop-blur-xl transition-all duration-500 ease-in-out lg:hidden",
            isOpen ? "visible opacity-100" : "invisible opacity-0",
          )}
          id="mobile-navigation"
        >
          <button
            aria-label="Close menu"
            className="absolute right-5 top-5 rounded-full border-2 border-primary p-1 text-primary"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <CloseIcon />
          </button>

          <ul className="h-screen bg-white px-6 py-24 text-center text-lg leading-relaxed">
            <li className="mt-4">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <span className={cn(navItemClassName(isHomeActive), "border-0")}>
                  HOME
                </span>
              </Link>
            </li>

            {aboutNavigation.map((item) => (
              <li key={item.href} className="mt-4">
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  <span
                    className={cn(
                      "text-base font-semibold uppercase tracking-[0.08em] transition-colors duration-300",
                      normalizedPath === item.href.replace(/\/$/, "")
                        ? "text-primary"
                        : "text-black hover:text-[#0e3d61]",
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}

            {mainNavigation.map((item) => (
              <li key={item.href} className="mt-4">
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  <span
                    className={cn(
                      "text-base font-semibold uppercase tracking-[0.08em] transition-colors duration-300",
                      item.href === "/fleet" && isFleetActive
                        ? "text-primary"
                        : "text-black hover:text-[#0e3d61]",
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="h-24 2xl:h-32" />
    </header>
  );
}
