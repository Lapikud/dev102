import sharp from "sharp";
import badgeDataUrl from "../assets/dev102-badge.png?inline";
import socialCardBackgroundSvg from "../assets/social-card-background.svg?raw";

const SOCIAL_CARD_BADGE_SIZE = 520;
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

export const SOCIAL_CARD_SIZE = { width: 1200, height: 630 };

const badgeBytes = Buffer.from(
  badgeDataUrl.slice(badgeDataUrl.indexOf(",") + 1),
  "base64",
);

function badgeFittedInto(size: number) {
  return sharp(badgeBytes)
    .resize({
      width: size,
      height: size,
      fit: "contain",
      background: TRANSPARENT,
    })
    .png()
    .toBuffer();
}

export async function socialCard(): Promise<Uint8Array<ArrayBuffer>> {
  const card = sharp(Buffer.from(socialCardBackgroundSvg)).composite([
    { input: await badgeFittedInto(SOCIAL_CARD_BADGE_SIZE), gravity: "center" },
  ]);
  return new Uint8Array(await card.png().toBuffer());
}
