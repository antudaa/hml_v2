export const WorkFlowData = [
  {
    serialNo: "01",
    workList: [
      "Cargo dimensional review",
      "Preliminary route planning",
      "Vessel suitability check",
      "Stability and draft assessment",
      "Port interface review",
    ],
  },
  {
    serialNo: "02",
    workList: [
      "Structural verification",
      "Grillage arrangement",
      "Sea fastening design",
      "Loadout sequence planning",
      "MWS document preparation",
    ],
    Softwares: "MOSES / SACS / AUTOCAD",
  },
  {
    serialNo: "03",
    workList: [
      "Ballasting sequence",
      "Cargo positioning control",
      "Deck load distribution",
      "Fastening inspection plan",
      "Operational coordination",
    ],
    Softwares: "AUTOCAD / EXCEL / STABILITY TOOL",
  },
  {
    serialNo: "04",
    workList: [
      "Weather routing review",
      "Motion response check",
      "Acceleration monitoring",
      "Daily engineering support",
      "Contingency evaluation",
    ],
    Softwares: "ROUTE MONITOR / MOSES",
  },
  {
    serialNo: "05",
    category: "DISCHARGING",
    workList: [
      "Final document issue",
      "Class and MWS response",
      "Client technical support",
      "Completion dossier",
      "Lessons learned review",
    ],
    Softwares: "QA CHECK / REPORTING",
  },
] as const;
