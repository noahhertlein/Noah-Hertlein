# noahhertlein.xyz

Personal site for Noah Hertlein, built with Next.js 16 and Tailwind CSS 4.

```bash
npm install
npm run dev        # http://localhost:3003
npm run build
```

## Editing content

All copy and numbers live in `src/content/site.ts`. Page layout is in `src/app/page.tsx`.

## Résumé

The résumé source is `resume/resume.html`. After editing it, regenerate the PDFs (uses your local Google Chrome):

```bash
npm run resume:pdf
```

This writes two files:

- `public/Noah-Hertlein-Resume.pdf`: the public download on the site, without a phone number
- `private/Noah-Hertlein-Resume-Full.pdf`: includes the phone number, for applications (gitignored)
