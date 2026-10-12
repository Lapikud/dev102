import type { APIRoute } from "astro";
import { socialCard } from "../lib/brand-images.ts";

export const GET: APIRoute = async () =>
  new Response(await socialCard(), {
    headers: { "Content-Type": "image/png" },
  });
