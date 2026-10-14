import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
  display: "swap",
});

const title = "Noah Hertlein | IT Risk & Assurance at EY";
const description =
  "Noah Hertlein tests IT general and application controls for a Fortune 1 enterprise at EY, reading the Java, Python and SQL behind the numbers and building AI automation for audit teams.";

export const metadata: Metadata = {
  metadataBase: new URL("https://noahhertlein.xyz"),
  title: { default: title, template: "%s | Noah Hertlein" },
  description,
  authors: [{ name: "Noah Hertlein" }],
  keywords: [
    "Noah Hertlein",
    "IT audit",
    "IT risk and assurance",
    "ITGC",
    "SOX 404",
    "application controls",
    "EY",
    "audit automation",
  ],
  openGraph: {
    type: "website",
    url: "https://noahhertlein.xyz",
    siteName: "Noah Hertlein",
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#9d2235",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body>{children}</body>
    </html>
  );
}
