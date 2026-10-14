import type { Tick } from "@/content/site";

const paths: Record<string, React.ReactNode> = {
  code: (
    <>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13.5 5-3 14" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M3.5 9.5h17M3.5 15h17M9.5 3.5v17" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c.6-3.4 3-5.4 6-5.4s5.4 2 6 5.4" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6M18 14.9c1.6.7 2.6 2.4 3 5.1" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6.2L4.6 18.4A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.4-2.6L14 9.2V3" />
      <path d="M7.2 15h9.6" />
    </>
  ),
  cap: (
    <>
      <path d="m2.5 9 9.5-4.5L21.5 9 12 13.5z" />
      <path d="M6.5 11.2V16c1.4 1.4 3.3 2 5.5 2s4.1-.6 5.5-2v-4.8" />
      <path d="M21.5 9v5" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.6 13.4-1.4 7.1 4.8-2.6 4.8 2.6-1.4-7.1" />
      <path d="m9.8 9 1.5 1.5 2.9-2.9" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7M3 12.5h18" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m12 8.5 1.2 2.3 2.3 1.2-2.3 1.2L12 15.5l-1.2-2.3L8.5 12l2.3-1.2z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V17M7.5 7.2v.1M11.5 17v-6.5M11.5 13.2c0-1.7 1.1-2.8 2.5-2.8s2.5 1 2.5 2.8V17" />
    </>
  ),
  github: (
    <path d="M9 19.5c-4 1.2-4-2-5.6-2.4m11.2 4.4v-3.1a2.7 2.7 0 0 0-.8-2.1c2.6-.3 5.4-1.3 5.4-5.9a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.4 11.4 0 0 0-6 0C6.2 3.7 5.2 4 5.2 4a4.3 4.3 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.8 5.6 5.4 5.9a2.7 2.7 0 0 0-.8 2.1v3.1" />
  ),
  download: (
    <>
      <path d="M12 4v11M7.5 10.5 12 15l4.5-4.5" />
      <path d="M4.5 19.5h15" />
    </>
  ),
  arrow: <path d="M7 17 17 7M8.5 7H17v8.5" />,
  left: <path d="m14.5 6-6 6 6 6" />,
  right: <path d="m9.5 6 6 6-6 6" />,
  copy: (
    <>
      <rect x="8.5" y="8.5" width="12" height="12" rx="2" />
      <path d="M15.5 8.5V5.5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  cloud: <path d="M7 18.5a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 8.6a4.9 4.9 0 0 1-.5 9.9z" />,
  stream: (
    <>
      <path d="M3.5 8h13M13 4.5 16.5 8 13 11.5" />
      <path d="M20.5 16h-13M11 12.5 7.5 16l3.5 3.5" />
    </>
  ),
  flow: (
    <>
      <rect x="3" y="4" width="6" height="5" rx="1.2" />
      <rect x="15" y="4" width="6" height="5" rx="1.2" />
      <rect x="9" y="15" width="6" height="5" rx="1.2" />
      <path d="M9 6.5h6M6 9v2.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V9M12 13v2" />
    </>
  ),
};

export function Icon({
  name,
  className = "size-5",
}: {
  name: keyof typeof paths | (string & {});
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

/* Audit tickmarks, drawn like a reviewer's red pencil marks in a workpaper margin. */
export const tickMeaning: Record<Tick, string> = {
  tested: "Tested",
  reconciled: "Reconciled",
  traced: "Traced to source",
};

export function Tickmark({ kind, className = "size-6" }: { kind: Tick; className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {kind === "tested" && <path d="M5 15.5c2 1.4 3.6 3.2 5 5.5C13 13 17.5 8 23.5 4.5" />}
      {kind === "reconciled" && <path d="M5.5 20.5 14 6.5l8.5 14" />}
      {kind === "traced" && (
        <>
          <circle cx="14" cy="14" r="10" />
          <path d="M9.5 10h9M14 10v9.5" />
        </>
      )}
    </svg>
  );
}
