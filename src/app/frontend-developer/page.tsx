import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = "https://munna-thakur-software.vercel.app";

export const metadata: Metadata = {
  title: "Frontend Developer | Munna Thakur",
  description:
    "Munna Thakur is a Frontend Developer / Software Engineer specializing in React, Next.js, TypeScript, and web performance (Core Web Vitals).",
  alternates: { canonical: "/frontend-developer" },
  openGraph: {
    type: "profile",
    url: `${siteUrl}/frontend-developer`,
    title: "Frontend Developer | Munna Thakur",
    description:
      "React • Next.js • TypeScript • Web Performance • Frontend System Design. Explore projects and download resume.",
    images: [{ url: "/profile.png", width: 1200, height: 630, alt: "Munna Thakur" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer | Munna Thakur",
    description: "Frontend Developer focused on React internals and performance optimization.",
    images: ["/profile.png"],
  },
};

export default function FrontendDeveloperPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kind of frontend work does Munna Thakur specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Frontend systems and performance: React (Fiber/reconciliation concepts), Next.js, TypeScript, Core Web Vitals optimization, and scalable UI architecture.",
        },
      },
      {
        "@type": "Question",
        name: "Which technologies does Munna use most?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "React, Next.js, TypeScript, Redux Toolkit, TanStack Query, Tailwind CSS, and modern tooling for testing and performance.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Munna Thakur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Email: munna.thakur.dev@gmail.com. Phone: +91 62394 02958. Location: Ahmedabad, Gujarat, India.",
        },
      },
    ],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Frontend Developer",
        item: `${siteUrl}/frontend-developer`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-16">
      <Script id="ld-faq-frontend" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script
        id="ld-breadcrumb-frontend"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <div className="max-w-4xl mx-auto space-y-10">
        <header className="space-y-4">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Frontend Developer</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Munna <span className="text-gradient">Thakur</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Frontend Developer / Software Engineer focused on <strong>React</strong>, <strong>Next.js</strong>,{" "}
            <strong>TypeScript</strong>, and <strong>web performance</strong> (Core Web Vitals). I build production-grade
            interfaces with scalable architecture and fast UX.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/#projects"
              className="px-5 py-3 rounded-full bg-zinc-100 text-zinc-950 font-semibold hover:bg-white transition-colors"
            >
              View Projects
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

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Performance-first UI",
              desc: "Web Vitals optimization, code-splitting, and render profiling to keep interactions snappy.",
            },
            {
              title: "Frontend system design",
              desc: "Scalable architecture, state patterns, reusable component libraries, and maintainable codebases.",
            },
            {
              title: "Modern React/Next.js",
              desc: "Type-safe development with TypeScript and practical patterns for production apps.",
            },
          ].map((card) => (
            <div key={card.title} className="glass p-6 rounded-2xl space-y-2">
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p className="text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </section>

        <section className="glass p-8 rounded-[32px] space-y-3">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="text-zinc-400">For roles, freelance work, or collaborations:</p>
          <ul className="text-zinc-200 space-y-1">
            <li>
              <strong>Email:</strong> <a className="text-blue-400 hover:text-blue-300" href="mailto:munna.thakur.dev@gmail.com">munna.thakur.dev@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong> <a className="text-blue-400 hover:text-blue-300" href="tel:+916239402958">+91 62394 02958</a>
            </li>
            <li>
              <strong>Location:</strong> Ahmedabad, Gujarat, India
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

