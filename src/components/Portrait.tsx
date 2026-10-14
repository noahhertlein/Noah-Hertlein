"use client";

import Image from "next/image";
import { useState } from "react";
import { Tickmark } from "./Icon";

// Starts as a pixelated draft; hovering, focusing or tapping "verifies" it into the real photo.
export function Portrait() {
  const [pinned, setPinned] = useState(false);

  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border-2 border-ink bg-wash">
      <button
        type="button"
        onClick={() => setPinned((p) => !p)}
        aria-pressed={pinned}
        aria-label={pinned ? "Show pixelated portrait" : "Reveal full portrait of Noah"}
        className="group relative block aspect-square w-full cursor-pointer overflow-hidden border-b-2 border-ink focus-visible:outline-offset-[-6px]"
        data-pinned={pinned}
      >
        <Image
          src="/images/headshot.jpg"
          alt="Noah Hertlein smiling in a navy suit"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover"
        />
        <Image
          src="/images/headshot-pixel.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover [image-rendering:pixelated] transition-opacity duration-500 ease-out group-hover:opacity-0 group-focus-visible:opacity-0 group-data-[pinned=true]:opacity-0"
        />
        <span className="absolute right-3 top-3 flex rotate-[-8deg] items-center gap-1.5 rounded-md border-2 border-cardinal bg-card/95 px-2 py-1 text-sm font-bold text-cardinal opacity-0 transition-all duration-300 group-hover:rotate-[-4deg] group-hover:opacity-100 group-focus-visible:opacity-100 group-data-[pinned=true]:rotate-[-4deg] group-data-[pinned=true]:opacity-100">
          <Tickmark kind="tested" className="size-5" />
          Verified
        </span>
        <span className="absolute bottom-3 left-3 rounded-md border-2 border-ink bg-card px-2 py-1 text-xs font-semibold transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 group-data-[pinned=true]:opacity-0">
          <span className="hidden [@media(hover:hover)]:inline">Hover</span>
          <span className="[@media(hover:hover)]:hidden">Tap</span> to verify
        </span>
      </button>
      <figcaption className="flex flex-1 flex-col justify-center gap-0.5 px-4 py-3">
        <span className="text-sm font-bold">Currently</span>
        <span className="text-sm text-ink-soft">Testing app controls and studying for the CISA</span>
      </figcaption>
    </figure>
  );
}
