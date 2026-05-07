import { siteConfig } from "@/config/site";

export type FleetProjectReference = {
  projectName: string;
  projectId?: string;
  image?: string;
};

export type FleetItem = {
  id: string;
  name: string;
  weight: string;
  image: string;
  loa: string;
  breadth: string;
  freedeck: string;
  depth: string;
  draft: string;
  deadweight: string;
  speed: string;
  propulsion: string;
  ballastcapacity: string;
  ga?: string;
  description: string;
  fleetProjects: readonly FleetProjectReference[];
};

export const fleetDescriptionParagraphs =
  siteConfig.fleet.descriptionParagraphs satisfies readonly string[];

export const visibleFleetTabs =
  siteConfig.fleet.visibleTabs satisfies readonly {
    value: string;
    label: string;
    weight: string;
  }[];

export const FleetData = siteConfig.fleet.items satisfies readonly FleetItem[];

export function getFleetSpecifications(fleet: FleetItem) {
  return [
    [siteConfig.fleet.specificationLabels.loa, fleet.loa],
    [siteConfig.fleet.specificationLabels.breadth, fleet.breadth],
    [siteConfig.fleet.specificationLabels.freedeck, fleet.freedeck],
    [siteConfig.fleet.specificationLabels.depth, fleet.depth],
    [siteConfig.fleet.specificationLabels.draft, fleet.draft],
    [siteConfig.fleet.specificationLabels.deadweight, fleet.deadweight],
    [siteConfig.fleet.specificationLabels.speed, fleet.speed],
    [siteConfig.fleet.specificationLabels.propulsion, fleet.propulsion],
    [siteConfig.fleet.specificationLabels.ballastcapacity, fleet.ballastcapacity],
  ] as const;
}
