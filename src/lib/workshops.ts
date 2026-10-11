import { compareAsc, isBefore } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

type Dated = { data: { date: Date } };

export function getUpcomingWorkshops<T extends Dated>(
  workshops: T[],
  now = new Date(),
): T[] {
  return workshops
    .filter(({ data }) => !isBefore(data.date, now))
    .sort((a, b) => compareAsc(a.data.date, b.data.date));
}

export function getPastWorkshops<T extends Dated>(
  workshops: T[],
  now = new Date(),
): T[] {
  return workshops
    .filter(({ data }) => isBefore(data.date, now))
    .sort((a, b) => compareAsc(b.data.date, a.data.date));
}

export function getNextWorkshop<T extends Dated>(
  workshops: T[],
  now = new Date(),
): T | null {
  return getUpcomingWorkshops(workshops, now)[0] ?? null;
}

export function formatWorkshopDate(date: Date): string {
  return formatInTimeZone(date, "Europe/Tallinn", "dd MMM yyyy, HH:mm zzz");
}

export function formatShortWorkshopDate(date: Date): string {
  return formatInTimeZone(date, "Europe/Tallinn", "dd.MM.yy HH:mm");
}
