import { compareAsc, isBefore } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

type Dated = { data: { date: Date } };

export const WORKSHOP_RUNTIME_MS = 3 * 60 * 60 * 1000; // 3 hours

export function isWorkshopOver(date: Date, now = new Date()): boolean {
  return !isBefore(now, new Date(date.getTime() + WORKSHOP_RUNTIME_MS));
}

export function getUpcomingWorkshops<T extends Dated>(
  workshops: T[],
  now = new Date(),
): T[] {
  return workshops
    .filter(({ data }) => !isWorkshopOver(data.date, now))
    .sort((a, b) => compareAsc(a.data.date, b.data.date));
}

export function getPastWorkshops<T extends Dated>(
  workshops: T[],
  now = new Date(),
): T[] {
  return workshops
    .filter(({ data }) => isWorkshopOver(data.date, now))
    .sort((a, b) => compareAsc(b.data.date, a.data.date));
}

const speakerList = new Intl.ListFormat("en", { type: "conjunction" });

export function formatSpeakers(speakers: { name: string }[] = []): string {
  return speakerList.format(speakers.map(({ name }) => name));
}

export function formatWorkshopDate(date: Date): string {
  return formatInTimeZone(date, "Europe/Tallinn", "dd MMM yyyy, HH:mm zzz");
}

export function formatShortWorkshopDate(date: Date): string {
  return formatInTimeZone(date, "Europe/Tallinn", "dd.MM.yy HH:mm");
}
