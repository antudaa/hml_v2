import type { Metadata } from "next";
import { FleetPage } from "@/components/fleet/FleetPage";

export const metadata: Metadata = {
  title: "FLEET - HML",
};

export default function FleetRoutePage() {
  return <FleetPage />;
}
