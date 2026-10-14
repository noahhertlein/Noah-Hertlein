"use client";

import { useRef } from "react";
import { toolkit } from "@/content/site";
import { Icon } from "./Icon";

export function Toolkit() {
  const rail = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button type="button" onClick={() => scroll(-1)} aria-label="Scroll toolkit left" className="btn press !min-h-10 !px-2.5 bg-card">
          <Icon name="left" />
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label="Scroll toolkit right" className="btn press !min-h-10 !px-2.5 bg-card">
          <Icon name="right" />
        </button>
      </div>
      <ul
        ref={rail}
        className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 pt-1"
        aria-label="Systems and languages I work in"
      >
        {toolkit.map((t) => (
          <li key={t.name} className="card w-40 shrink-0 snap-start overflow-hidden sm:w-44">
            <div
              className={`tone-${t.tone} flex aspect-[5/4] items-center justify-center border-b-2 border-ink text-4xl font-extrabold tracking-tight`}
              aria-hidden="true"
              style={{ fontVariationSettings: '"wdth" 85' }}
            >
              {"icon" in t ? <Icon name={t.icon} className="size-12" /> : t.short}
            </div>
            <p className="px-3 py-2.5 text-sm font-semibold leading-snug">{t.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
