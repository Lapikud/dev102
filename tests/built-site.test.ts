import { readFile, readdir } from "node:fs/promises";
import { test } from "node:test";
import assert from "node:assert/strict";

const dist = new URL("../dist/", import.meta.url);
const read = (path: string) => readFile(new URL(path, dist), "utf8");

const workshopIds = (
  await readdir(new URL("workshops/", dist), { withFileTypes: true })
)
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);
const workshopIndex = await read("workshops/index.html");
const feed = await read("rss.xml");

test("every workshop page is linked from the workshop index and listed in the RSS feed", () => {
  for (const id of workshopIds) {
    assert.ok(
      workshopIndex.includes(`href="/workshops/${id}/"`),
      `${id} missing from /workshops/`,
    );
    assert.ok(
      feed.includes(`/workshops/${id}/</link>`),
      `${id} missing from rss.xml`,
    );
  }
});
