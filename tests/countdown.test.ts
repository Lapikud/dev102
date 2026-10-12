import { test } from "node:test";
import assert from "node:assert/strict";
import { formatCountdown } from "../src/lib/countdown.ts";

test("countdown pads each unit and stops at zero", () => {
  assert.equal(
    formatCountdown(((9 * 24 + 8) * 3600 + 30 * 60 + 5) * 1000 + 999),
    "09d 08h 30m 05s",
  );
  assert.equal(formatCountdown(0), "Starting now");
  assert.equal(formatCountdown(-1), "Starting now");
});
