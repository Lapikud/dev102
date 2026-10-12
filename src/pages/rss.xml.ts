import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import { formatWorkshopDate } from "../lib/workshops.ts";

export async function GET(context: APIContext) {
  const workshops = (await getCollection("workshops")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
  return rss({
    title: `${SITE_TITLE} Workshops`,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: workshops.map(({ id, data }) => ({
      title: data.title.replace(/\s+/g, " "),
      pubDate: data.date,
      description: `${formatWorkshopDate(data.date)} / ${data.location}`,
      link: `/workshops/${id}/`,
      categories: data.tags,
    })),
  });
}
