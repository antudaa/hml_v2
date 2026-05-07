import { notFound } from "next/navigation";
import { FleetDetailPage } from "@/components/fleet/FleetDetailPage";
import { FleetData } from "@/data/fleet";

export const dynamicParams = false;

export async function generateStaticParams() {
  return FleetData.map((fleet) => ({ fleetId: fleet.id }));
}

export default async function FleetDetailRoutePage({
  params,
}: {
  params: Promise<{ fleetId: string }>;
}) {
  const { fleetId } = await params;

  const currentIndex = FleetData.findIndex((fleet) => fleet.id === fleetId);

  if (currentIndex === -1) {
    return notFound();
  }

  const fleet = FleetData[currentIndex];
  const prevFleet = FleetData[currentIndex - 1];
  const nextFleet = FleetData[currentIndex + 1];

  return (
    <FleetDetailPage
      fleet={fleet}
      nextFleetId={nextFleet?.id}
      prevFleetId={prevFleet?.id}
    />
  );
}
