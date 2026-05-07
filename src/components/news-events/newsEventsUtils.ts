import type { LatestNewsItem } from "@/data/home/types";

const MONTH_ORDER: Record<string, number> = {
  JAN: 1,
  FEB: 2,
  MAR: 3,
  APR: 4,
  MAY: 5,
  JUN: 6,
  JUL: 7,
  AUG: 8,
  SEP: 9,
  OCT: 10,
  NOV: 11,
  DEC: 12,
};

export function sortNewsEvents<T extends LatestNewsItem>(events: readonly T[]) {
  return [...events].sort((a, b) => {
    const aMonth = MONTH_ORDER[a.date.month] ?? 0;
    const bMonth = MONTH_ORDER[b.date.month] ?? 0;
    const aDay = Number(a.date.day) || 0;
    const bDay = Number(b.date.day) || 0;

    if (aMonth !== bMonth) {
      return bMonth - aMonth;
    }

    return bDay - aDay;
  });
}

export function groupNewsEventsByMonth<T extends LatestNewsItem>(events: readonly T[]) {
  return events.reduce<Record<string, T[]>>((acc, event) => {
    const month = event.date.month;
    acc[month] = acc[month] ? [...acc[month], event] : [event];
    return acc;
  }, {});
}

export function getNewsEventImage(event: LatestNewsItem) {
  const image = event.image || event.images?.[0];
  return image && image !== "/placeholder.svg" ? image : "";
}

export function getNewsEventImages(event: LatestNewsItem) {
  const images = event.images?.filter((image) => image && image !== "/placeholder.svg") ?? [];
  const primary = getNewsEventImage(event);

  if (!primary) {
    return images;
  }

  return [primary, ...images.filter((image) => image !== primary)];
}
