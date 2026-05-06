export const screens = {
  xs: "20rem",
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
  "2xl": "96rem",
  "3xl": "120rem",
  qhd: "160rem",
  display4k: "240rem",
  display8k: "480rem",
} as const;

export const screenQueries = {
  xs: `(min-width: ${screens.xs})`,
  sm: `(min-width: ${screens.sm})`,
  md: `(min-width: ${screens.md})`,
  lg: `(min-width: ${screens.lg})`,
  xl: `(min-width: ${screens.xl})`,
  "2xl": `(min-width: ${screens["2xl"]})`,
  "3xl": `(min-width: ${screens["3xl"]})`,
  qhd: `(min-width: ${screens.qhd})`,
  display4k: `(min-width: ${screens.display4k})`,
  display8k: `(min-width: ${screens.display8k})`,
} as const;
