import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Noah Hertlein, IT Risk & Assurance at EY";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [photo, bold, semibold] = await Promise.all([
    readFile(join(process.cwd(), "public/images/headshot.jpg")),
    readFile(join(process.cwd(), "src/assets/bricolage-800.ttf")),
    readFile(join(process.cwd(), "src/assets/bricolage-600.ttf")),
  ]);
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#f7eedd", padding: 48, fontFamily: "Bricolage" }}>
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            gap: 48,
            padding: 48,
            background: "#9d2235",
            border: "4px solid #1d1517",
            borderRadius: 32,
            boxShadow: "10px 10px 0 0 #1d1517",
            color: "#fffaf0",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 0.9, letterSpacing: -3 }}>NOAH</div>
            <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 0.9, letterSpacing: -3 }}>HERTLEIN</div>
            <div style={{ marginTop: 32, fontSize: 36, fontWeight: 600 }}>IT Risk &amp; Assurance at EY</div>
            <div style={{ marginTop: 12, fontSize: 28, fontWeight: 600, opacity: 0.85 }}>ITGC, SOX 404, application controls and audit automation</div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            width={340}
            height={340}
            alt=""
            style={{ borderRadius: 20, border: "4px solid #1d1517", objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: bold, weight: 800, style: "normal" },
        { name: "Bricolage", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
