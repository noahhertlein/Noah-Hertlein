// Renders resume/resume.html to two PDFs with the locally installed Chrome:
//   public/Noah-Hertlein-Resume.pdf       – served by the site, no phone number
//   private/Noah-Hertlein-Resume-Full.pdf – for applications, with phone (gitignored)
import { readFile } from "node:fs/promises";
import { chromium } from "playwright-core";

const PHONE = " | (860) 934-3187";
const html = await readFile(new URL("../resume/resume.html", import.meta.url), "utf8");

const targets = [
  { out: "public/Noah-Hertlein-Resume.pdf", html },
  { out: "private/Noah-Hertlein-Resume-Full.pdf", html: html.replace("<!--PHONE-->", PHONE) },
];

const browser = await chromium.launch({ channel: "chrome" });
try {
  for (const t of targets) {
    const page = await browser.newPage();
    await page.setContent(t.html, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const fits = await page.evaluate(() => document.body.scrollHeight <= 10 * 96);
    await page.pdf({ path: t.out, format: "Letter", preferCSSPageSize: true, printBackground: true });
    console.log(`${t.out}${fits ? "" : "  (warning: content may exceed one page)"}`);
    await page.close();
  }
} finally {
  await browser.close();
}
