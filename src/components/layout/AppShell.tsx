"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function AppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname() ?? "";
  const isProjectDetailPage =
    pathname.startsWith("/projects/") && pathname !== "/projects";

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      {isProjectDetailPage ? null : <Navbar />}
      <main className="flex-1">{children}</main>
      {isProjectDetailPage ? null : <Footer />}
    </div>
  );
}
