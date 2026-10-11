export const TWINKLE_DURATION_MS = 1800;
export const WAVE_DURATION_MS = 3200;
export const WAVE_SPEED_PX_PER_MS = 0.4;
export const WAVE_RING_HALF_WIDTH_PX = 36;

export type PagePoint = { x: number; y: number };
export type Pulse = PagePoint & { start: number; strength: number };
export type Viewport = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export function nearestDotCentre(
  pageCoordinate: number,
  spacing: number,
): number {
  return Math.floor(pageCoordinate / spacing) * spacing + spacing / 2;
}

export function* visibleDotCentres(
  { left, top, width, height }: Viewport,
  spacing: number,
): Generator<PagePoint> {
  for (
    let y = nearestDotCentre(top, spacing) - spacing;
    y < top + height + spacing;
    y += spacing
  ) {
    for (
      let x = nearestDotCentre(left, spacing) - spacing;
      x < left + width + spacing;
      x += spacing
    ) {
      yield { x, y };
    }
  }
}

export function twinkleBrightness(ageMs: number): number {
  if (ageMs < 0 || ageMs >= TWINKLE_DURATION_MS) return 0;
  return Math.sin((Math.PI * ageMs) / TWINKLE_DURATION_MS);
}

export function ringBrightness(
  wave: Pulse,
  dot: PagePoint,
  now: number,
): number {
  const ageMs = now - wave.start;
  if (ageMs < 0 || ageMs >= WAVE_DURATION_MS) return 0;
  const ringRadius = ageMs * WAVE_SPEED_PX_PER_MS;
  const distanceFromRing = Math.abs(
    Math.hypot(dot.x - wave.x, dot.y - wave.y) - ringRadius,
  );
  if (distanceFromRing >= WAVE_RING_HALF_WIDTH_PX) return 0;
  const fadeOut = 1 - ageMs / WAVE_DURATION_MS;
  return (
    (1 - distanceFromRing / WAVE_RING_HALF_WIDTH_PX) * fadeOut * wave.strength
  );
}
