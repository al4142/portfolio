import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  authors: [{ name: site.name }],
  openGraph: {
    title,
    description: site.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description: site.tagline,
  },
  other: {
    email: site.email,
    "reply-to": site.email,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  email: site.email,
  jobTitle: "Founder",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami Beach",
    addressRegion: "Florida",
  },
  worksFor: {
    "@type": "Organization",
    name: "Stannos",
    url: site.stannosUrl,
    email: site.email,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-dvh antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
