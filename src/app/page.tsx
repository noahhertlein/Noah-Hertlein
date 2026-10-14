import Image from "next/image";
import { CopyEmail } from "@/components/CopyEmail";
import { Icon, Tickmark, tickMeaning } from "@/components/Icon";
import { Portrait } from "@/components/Portrait";
import { Toolkit } from "@/components/Toolkit";
import {
  auditSkills,
  beyond,
  contact,
  focusTags,
  project,
  roles,
  stats,
  type Tick,
} from "@/content/site";

const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-card px-3 py-2 font-semibold focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Masthead />

      <main id="main" className="mx-auto flex max-w-[1080px] flex-col gap-6 px-4 pb-16 pt-6 sm:gap-8 sm:px-6 sm:pt-8">
        <QuickLinks />
        <Intro />
        <Stats />
        <Project />
        <Experience />
        <Skills />
        <Beyond />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function Masthead() {
  return (
    <header className="border-b-2 border-ink bg-cardinal text-card">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-5 px-4 pb-7 pt-8 sm:px-6 sm:pt-10">
        <a href="#main" className="text-center leading-[0.82] tracking-[-0.03em]" aria-label="Noah Hertlein, home">
          <span className="block text-[2.6rem] font-extrabold sm:text-5xl" style={{ fontVariationSettings: '"wdth" 78' }}>
            NOAH
          </span>
          <span className="block text-[2.6rem] font-extrabold sm:text-5xl" style={{ fontVariationSettings: '"wdth" 78' }}>
            HERTLEIN
          </span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap justify-center gap-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="btn press !min-h-10 bg-card !px-3.5 !text-sm text-ink">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href={contact.resume} className="btn press !min-h-10 bg-butter !px-3.5 !text-sm text-ink" download>
                <Icon name="download" className="size-4" />
                Résumé
              </a>
            </li>
          </ul>
        </nav>
        <p className="flex items-center gap-1.5 rounded-full border-2 border-ink bg-cardinal-deep px-3 py-1 text-sm font-medium">
          <Icon name="pin" className="size-4" />
          Based in {contact.location}
        </p>
      </div>
    </header>
  );
}

function QuickLinks() {
  const links = [
    {
      href: "#work",
      title: "IT Risk & Assurance at EY",
      sub: "Application controls for a Fortune 1 retailer",
      badge: <span className="text-lg font-extrabold text-ink">EY</span>,
      tone: "bg-[#ffe600]",
    },
    {
      href: "#project",
      title: "My audit-automation workflow",
      sub: "Used by 50+ people on the engagement",
      badge: <Icon name="spark" className="size-6" />,
      tone: "bg-lilac",
    },
    {
      href: contact.resume,
      title: "One-page résumé",
      sub: "PDF, updated October 2026",
      badge: <Icon name="file" className="size-6" />,
      tone: "bg-sage",
      download: true,
    },
  ];

  return (
    <nav aria-label="Highlights" className="grid gap-3 sm:grid-cols-3 sm:gap-4">
      {links.map((l) => (
        <a
          key={l.title}
          href={l.href}
          download={l.download || undefined}
          className="card press flex items-center gap-3 p-3"
        >
          <span className={`${l.tone} grid size-12 shrink-0 place-items-center rounded-lg border-2 border-ink`}>
            {l.badge}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[0.95rem] font-bold leading-tight">{l.title}</span>
            <span className="mt-0.5 block text-sm leading-snug text-ink-soft">{l.sub}</span>
          </span>
          <Icon name={l.download ? "download" : "arrow"} className="size-5 shrink-0" />
        </a>
      ))}
    </nav>
  );
}

function Intro() {
  return (
    <section id="about" aria-labelledby="intro-title" className="panel grid gap-6 p-5 sm:p-7 md:grid-cols-[1fr_minmax(0,380px)] md:gap-8">
      <div className="flex flex-col">
        <p className="flex items-center gap-2 text-sm font-semibold text-cardinal">
          <Icon name="briefcase" className="size-4" />
          IT risk and assurance at EY
        </p>
        <h1
          id="intro-title"
          className="mt-3 text-[2.15rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-5xl"
          style={{ fontVariationSettings: '"wdth" 88' }}
        >
          Hi, I&rsquo;m Noah. I audit the code behind the numbers.
        </h1>
        <div className="mt-5 max-w-[60ch] space-y-3 text-[1.05rem] leading-relaxed text-ink-soft">
          <p>
            I&rsquo;m on EY&rsquo;s technology risk team in Bentonville, where I test the most complex application
            controls for a Fortune 1 retailer. Day to day, that means reading Java, Python and SQL, tracing data from
            source system to financial report, and writing it up so a reviewer can follow every step.
          </p>
          <p>
            When the same work keeps coming back, I automate it. My AI-driven audit workflow is now used by more than
            50 people on the engagement.
          </p>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
          {focusTags.map((t) => (
            <li key={t.label} className={`chip tone-${t.tone}`}>
              {t.label}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          <a href={`mailto:${contact.email}`} className="btn press bg-cardinal text-card">
            <Icon name="mail" />
            Email me
          </a>
          <a href={contact.linkedin} className="btn press bg-card" target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" />
            LinkedIn
          </a>
        </div>
      </div>
      <Portrait />
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="By the numbers" className="grid gap-4 sm:grid-cols-2">
      {stats.map((s) => (
        <div key={s.label} className="card p-5">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full border-2 border-ink bg-paper">
              <Icon name={s.icon} className="size-[18px]" />
            </span>
            <span className="text-sm font-bold">{s.label}</span>
          </div>
          <p
            className="mt-3 text-[2.6rem] font-extrabold leading-none tracking-[-0.03em] text-cardinal"
            style={{ fontVariationSettings: '"wdth" 80' }}
          >
            {s.value}
          </p>
          <p className="mt-2 text-[0.95rem] leading-snug text-ink-soft">{s.note}</p>
        </div>
      ))}
    </section>
  );
}

function Project() {
  return (
    <section id="project" aria-labelledby="project-title" className="panel p-5 sm:p-7">
      <p className="flex items-center gap-2 text-sm font-semibold text-cardinal">
        <Icon name="spark" className="size-4" />
        Featured project
      </p>
      <h2 id="project-title" className="section-title mt-2">
        {project.title}
      </h2>
      <p className="mt-3 max-w-[64ch] text-[1.05rem] leading-relaxed text-ink-soft">{project.lede}</p>

      <div className="mt-6 grid gap-5 rounded-[var(--radius-card)] border-2 border-ink bg-lilac p-5 sm:grid-cols-[1fr_auto] sm:items-end sm:p-6">
        <ul className="space-y-2.5">
          {project.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 font-medium">
              <Tickmark kind="tested" className="mt-0.5 size-5 shrink-0 text-cardinal" />
              {p}
            </li>
          ))}
        </ul>
        <p className="max-w-[30ch] text-sm leading-snug text-ink-soft sm:text-right">{project.note}</p>
      </div>
      <p className="mt-5 max-w-[64ch] leading-relaxed">{project.outcome}</p>
    </section>
  );
}

function TickLegend() {
  return (
    <dl className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Tickmark legend">
      {(Object.keys(tickMeaning) as Tick[]).map((k) => (
        <div key={k} className="flex items-center gap-1.5">
          <dt>
            <Tickmark kind={k} className="size-5 text-cardinal" />
            <span className="sr-only">{k} mark</span>
          </dt>
          <dd className="font-medium text-ink-soft">{tickMeaning[k]}</dd>
        </div>
      ))}
    </dl>
  );
}

function Experience() {
  return (
    <section id="work" aria-labelledby="work-title" className="panel p-4 sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-cardinal">
            <Icon name="briefcase" className="size-4" />
            Experience
          </p>
          <h2 id="work-title" className="section-title mt-2">
            Where I&rsquo;ve done the work
          </h2>
        </div>
        <TickLegend />
      </div>

      <ol className="mt-6 space-y-5">
        {roles.map((r) => (
          <li key={r.title} className="card p-4 sm:p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-xl font-bold leading-tight tracking-[-0.01em]">{r.title}</h3>
              <p className="shrink-0 text-sm font-semibold text-cardinal">{r.dates}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-ink-soft">
              {r.org}, {r.place}
            </p>
            <p className="mt-3 max-w-[70ch] leading-relaxed">{r.summary}</p>
            <ul className="mt-4 space-y-3">
              {r.points.map((p) => (
                <li key={p.text} className="flex items-start gap-2.5 leading-relaxed text-ink-soft sm:gap-3">
                  <Tickmark kind={p.tick} className="mt-0.5 size-5 shrink-0 text-cardinal sm:size-6" />
                  <span className="sr-only">{tickMeaning[p.tick]}: </span>
                  <span className="max-w-[72ch]">{p.text}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Skills() {
  return (
    <section aria-labelledby="skills-title" className="panel p-5 sm:p-7">
      <p className="flex items-center gap-2 text-sm font-semibold text-cardinal">
        <Icon name="code" className="size-4" />
        Toolkit
      </p>
      <h2 id="skills-title" className="section-title mt-2">
        The systems I test, and what I test them with
      </h2>
      <div className="mt-5">
        <Toolkit />
      </div>
      <h3 className="mt-6 text-base font-bold">Audit and risk</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {auditSkills.map((s) => (
          <li key={s} className="chip bg-paper">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Beyond() {
  return (
    <section aria-labelledby="beyond-title" className="panel p-4 sm:p-7">
      <p className="flex items-center gap-2 text-sm font-semibold text-cardinal">
        <Icon name="cap" className="size-4" />
        Before EY, and on the side
      </p>
      <h2 id="beyond-title" className="section-title mt-2">
        School, research and the AI club that got big
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {beyond.map((b) => (
          <li key={b.title} className="card flex flex-col gap-3 p-4 sm:flex-row sm:gap-4 sm:p-5">
            <span className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-xl border-2 border-ink bg-paper">
              {b.kind === "logo" ? (
                <Image src="/images/ai-foundry-mark.png" alt="Arkansas AI Foundry logo" width={48} height={48} className="size-11" />
              ) : (
                <Icon name={b.icon} className="size-6" />
              )}
            </span>
            <div className="min-w-0">
              <h3 className="text-lg font-bold leading-tight">{b.title}</h3>
              <p className="mt-0.5 text-sm font-semibold text-cardinal">{b.role}</p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{b.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="rounded-[var(--radius-panel)] border-2 border-ink bg-cardinal p-6 text-card shadow-[var(--shadow-hard-lg)] sm:p-9"
    >
      <h2
        id="contact-title"
        className="max-w-[20ch] text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[2.75rem]"
        style={{ fontVariationSettings: '"wdth" 88' }}
      >
        Working on IT risk, SOX or audit automation? Let&rsquo;s talk.
      </h2>
      <p className="mt-4 max-w-[56ch] text-[1.05rem] leading-relaxed text-card/85">
        Email is the fastest way to reach me. I&rsquo;m also on LinkedIn, and my résumé is one click away.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a href={`mailto:${contact.email}`} className="btn press bg-butter text-ink">
          <Icon name="mail" />
          {contact.email}
        </a>
        <CopyEmail email={contact.email} />
        <a href={contact.linkedin} className="btn press bg-card text-ink" target="_blank" rel="noopener noreferrer">
          <Icon name="linkedin" />
          LinkedIn
        </a>
        <a href={contact.github} className="btn press bg-card text-ink" target="_blank" rel="noopener noreferrer">
          <Icon name="github" />
          GitHub
        </a>
        <a href={contact.resume} className="btn press bg-card text-ink" download>
          <Icon name="download" />
          Download résumé
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-card">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-2 px-4 py-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="flex items-center gap-1.5">
          <Tickmark kind="tested" className="size-5 text-cardinal" />
          Every number on this page is tied to source.
        </p>
        <p>© {new Date().getFullYear()} Noah Hertlein. Views are my own; client details stay confidential.</p>
      </div>
    </footer>
  );
}
