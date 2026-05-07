"use client";

import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/config/site";
import FleetDetailNavigationShell from "./FleetDetailNavigationShell";

function getSafeReturnTo(returnTo?: string | null) {
  if (!returnTo || !returnTo.startsWith("/") || returnTo.startsWith("//")) {
    return "/fleet";
  }

  return returnTo;
}

export default function FleetDetailNavigation({
  nextFleetId,
  prevFleetId,
}: {
  nextFleetId?: string;
  prevFleetId?: string;
}) {
  const searchParams = useSearchParams();
  const returnTo = getSafeReturnTo(searchParams?.get(siteConfig.fleetOverview.returnQueryKey));

  return (
    <FleetDetailNavigationShell
      nextFleetId={nextFleetId}
      prevFleetId={prevFleetId}
      returnTo={returnTo}
    />
  );
}
