import { test } from "node:test";
import assert from "node:assert/strict";
import {
  WAVE_DURATION_MS,
  nearestDotCentre,
  ringBrightness,
} from "../src/lib/dot-field.ts";

test("positions snap to the centre of the dot tile they fall in, matching the CSS grid", () => {
  assert.equal(nearestDotCentre(0, 28), 14);
  assert.equal(nearestDotCentre(27.9, 28), 14);
  assert.equal(nearestDotCentre(28, 28), 42);
});

test("a ring lights nothing before it starts or after it ends", () => {
  const delayedRing = {
    x: 0,
    y: 0,
    start: 500,
    strength: 1,
  };

  assert.equal(ringBrightness(delayedRing, { x: 0, y: 0 }, 499), 0);
  assert.equal(
    ringBrightness(delayedRing, { x: 0, y: 0 }, 500 + WAVE_DURATION_MS),
    0,
  );
});
