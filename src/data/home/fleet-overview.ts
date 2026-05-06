import type { FleetOverviewGroup } from "./types";

export const fleetOverviewGroups = [
  {
    title: "OUR \nVESSELS",
    vessels: [
      { vesselName: "MEGA CARAVAN", vecelID: "megacaravan" },
      { vesselName: "MEGA CARAVAN2", vecelID: "megacaravan2" },
    ],
  },
  {
    title: "OUR \nPARTNER VESSELS",
    vessels: [
      { vesselName: "MEGA TRUST", vecelID: "megatrust" },
      { vesselName: "MEGA PASSION", vecelID: "megapassion" },
    ],
  },
  {
    title: "OUR LONG-TERM \nCHARTERING VESSEL",
    vessels: [{ vesselName: "Chang Yang Dong Fang", vecelID: "cydf" }],
  },
] satisfies readonly FleetOverviewGroup[];
