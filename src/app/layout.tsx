import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://munna-thakur-software.vercel.app"),
  title: {
    default: "Munna Thakur | Software Engineer (Frontend Systems & Performance)",
    template: "%s | Munna Thakur",
  },
  description:
    "Software Engineer focused on frontend systems, React internals, and performance optimization. Building high-scale, production-grade web apps with React, Next.js, and TypeScript.",
  keywords: [
    "Munna Thakur",
    "Software Engineer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Performance",
    "Core Web Vitals",
    "Frontend System Design",
  ],
  authors: [{ name: "Munna Thakur" }],
  creator: "Munna Thakur",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Munna Thakur | Software Engineer (Frontend Systems & Performance)",
    description:
      "Frontend-focused Software Engineer with experience building high-scale production apps and delivering 40%+ performance improvements.",
    images: [{ url: "/profile.png", width: 1200, height: 630, alt: "Munna Thakur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Munna Thakur | Software Engineer",
    description:
      "Frontend systems, React internals, and performance optimization. React • Next.js • TypeScript • Web Vitals.",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = "https://munna-thakur-software.vercel.app";
  const profileImage = `${siteUrl}/profile.png`;

  const jsonLdGraph = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Munna Thakur",
      description:
        "Frontend Systems & Performance — React internals, Next.js, TypeScript, and Core Web Vitals optimization.",
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Munna Thakur",
      url: siteUrl,
      image: profileImage,
      jobTitle: ["Frontend Developer", "Software Engineer"],
      email: "munna.thakur.dev@gmail.com",
      telephone: "+91-623-940-2958",
      sameAs: [
        "https://www.linkedin.com/in/munna-thakur-frontend-developer-2854b5243/",
        "https://dev.to/munna_thakur_2019444f0351",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Frontend System Design",
        "Web Performance",
        "Core Web Vitals",
        "Redux Toolkit",
        "TanStack Query",
        "WebRTC",
        "WebSockets",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Munna Thakur | Frontend Developer",
      description:
        "Munna Thakur — Frontend Developer / Software Engineer focused on React internals and performance optimization.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
      primaryImageOfPage: profileImage,
    },
  ];

  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 font-sans antialiased">
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@graph": jsonLdGraph }) }}
        />
        {children}
      </body>
    </html>
  );
}
