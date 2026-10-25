import { test } from "node:test";
import assert from "node:assert/strict";
import {
  getUpcomingWorkshops,
  getPastWorkshops,
  isWorkshopOver,
  formatWorkshopDate,
  formatShortWorkshopDate,
} from "../src/lib/workshops.ts";

const event = (slug: string, date: string) => ({
  id: slug,
  data: { date: new Date(date) },
});

const events = [
  event("later", "2026-11-01T18:00:00+02:00"),
  event("past", "2026-10-20T18:00:00+03:00"),
  event("next", "2026-10-21T18:30:00+03:00"),
];

const now = new Date("2026-10-21T15:00:00Z");

test("workshops are split by instant and sorted chronologically", () => {
  assert.deepEqual(
    getUpcomingWorkshops(events, now).map(({ id }) => id),
    ["next", "later"],
  );

  assert.deepEqual(
    getPastWorkshops(events, now).map(({ id }) => id),
    ["past"],
  );
});

test("a workshop stays upcoming until its runtime has passed", () => {
  const start = new Date("2026-10-21T15:30:00Z");
  assert.equal(isWorkshopOver(start, new Date("2026-10-21T17:00:00Z")), false);
  assert.equal(isWorkshopOver(start, new Date("2026-10-21T18:30:00Z")), true);
  assert.equal(
    getUpcomingWorkshops(events, new Date("2026-10-21T17:00:00Z"))[0]?.id,
    "next",
  );
});

test("dates format in Europe/Tallinn local time", () => {
  assert.equal(
    formatWorkshopDate(new Date("2026-10-21T15:30:00Z")),
    "21 Oct 2026, 18:30 GMT+3",
  );
  assert.equal(
    formatShortWorkshopDate(new Date("2026-10-21T15:30:00Z")),
    "21.10.26 18:30",
  );
});
