import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = "https://munna-thakur-software.vercel.app";

export const metadata: Metadata = {
  title: "Frontend Developer in Ahmedabad | Munna Thakur",
  description:
    "Frontend Developer in Ahmedabad, Gujarat — Munna Thakur. React, Next.js, TypeScript, and performance optimization (Core Web Vitals).",
  alternates: { canonical: "/frontend-developer-ahmedabad" },
  openGraph: {
    type: "website",
    url: `${siteUrl}/frontend-developer-ahmedabad`,
    title: "Frontend Developer in Ahmedabad | Munna Thakur",
    description:
      "Ahmedabad-based Frontend Developer focused on React internals, scalable UI systems, and web performance.",
    images: [{ url: "/profile.png", width: 1200, height: 630, alt: "Munna Thakur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer in Ahmedabad | Munna Thakur",
    description: "Ahmedabad-based Frontend Developer specializing in React and performance.",
    images: ["/profile.png"],
  },
};

export default function FrontendDeveloperAhmedabadPage() {
  const localLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Munna Thakur",
    jobTitle: ["Frontend Developer", "Software Engineer"],
    url: `${siteUrl}/frontend-developer-ahmedabad`,
    email: "munna.thakur.dev@gmail.com",
    telephone: "+91-623-940-2958",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-16">
      <Script id="ld-local-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localLd) }} />

      <div className="max-w-4xl mx-auto space-y-10">
        <header className="space-y-4">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Ahmedabad, Gujarat</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Frontend Developer in <span className="text-gradient">Ahmedabad</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            I’m Munna Thakur, a Frontend Developer / Software Engineer based in Ahmedabad. I build high-scale web
            applications with React and Next.js, and I optimize performance with a Core Web Vitals-first approach.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/"
              className="px-5 py-3 rounded-full bg-zinc-100 text-zinc-950 font-semibold hover:bg-white transition-colors"
            >
              View Portfolio
            </a>
            <a
              href="/munna-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors font-semibold"
            >
              Download Resume
            </a>
            <a
              href="/#contact"
              className="px-5 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors font-semibold"
            >
              Contact
            </a>
          </div>
        </header>

        <section className="glass p-8 rounded-[32px] space-y-3">
          <h2 className="text-2xl font-bold">What I deliver</h2>
          <ul className="space-y-3 text-zinc-400 leading-relaxed">
            <li className="flex gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
              <span>Production-grade React/Next.js apps with clean architecture and scalable state patterns.</span>
            </li>
            <li className="flex gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
              <span>Performance optimization: code splitting, lazy loading, render tuning, and Web Vitals improvements.</span>
            </li>
            <li className="flex gap-3">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
              <span>TypeScript migrations and DX improvements that reduce production errors and speed up delivery.</span>
            </li>
          </ul>
        </section>

        <section className="glass p-8 rounded-[32px] space-y-3">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="text-zinc-400">If you’re hiring in Ahmedabad (or remote), reach out:</p>
          <ul className="text-zinc-200 space-y-1">
            <li>
              <strong>Email:</strong>{" "}
              <a className="text-blue-400 hover:text-blue-300" href="mailto:munna.thakur.dev@gmail.com">
                munna.thakur.dev@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a className="text-blue-400 hover:text-blue-300" href="tel:+916239402958">
                +91 62394 02958
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

