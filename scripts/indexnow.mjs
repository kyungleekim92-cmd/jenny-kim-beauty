// Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver…).
// Run after a deploy that adds or changes pages:  node scripts/indexnow.mjs
// Google does not use IndexNow; it reads sitemap.xml via Search Console.
import { readFileSync } from "node:fs";

const site = readFileSync(new URL("../lib/site.ts", import.meta.url), "utf8");
const url = site.match(/url:\s*"([^"]+)"/)?.[1];
const key = site.match(/indexNowKey:\s*"([^"]+)"/)?.[1];
if (!url || !key) throw new Error("site.url or site.indexNowKey missing in lib/site.ts");

const host = new URL(url).host;
const sitemap = await (await fetch(new URL("/sitemap.xml", url))).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) throw new Error(`No URLs found in ${url}/sitemap.xml`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: new URL(`/${key}.txt`, url).toString(), urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs for ${host} → HTTP ${res.status}`);
if (!res.ok && res.status !== 202) process.exitCode = 1;
