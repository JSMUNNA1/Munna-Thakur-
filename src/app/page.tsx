"use client";

import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  BookOpen,
  Github,
  Linkedin,
  MessageCircle,
  X,
  Menu,
  CheckCircle2,
  AlertCircle,
  Code2,
  Cpu,
  Layers,
  ChevronRight,
  Terminal,
  Zap,
  Star,
} from "lucide-react";
import Script from "next/script";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "React Framework Clone (Fiber Architecture)",
    description:
      "Built React from scratch: Virtual DOM diffing, reconciliation, Fiber scheduler, and hooks. Implemented interruptible rendering and lane-based priority scheduling for 10,000+ element lists.",
    tags: ["Vanilla JS", "Algorithms", "Reconciliation", "Fiber"],
  },
  {
    title: "Enterprise Radiology Collaboration Platform (HealthTech)",
    description:
      "HIPAA-compliant pathology platform with DICOM medical imaging workflows. Built a custom viewer (zoom/pan/rotate/annotations) and optimized rendering for 500MB+ files with efficient memory management.",
    tags: ["React", "TypeScript", "DICOM", "Canvas"],
  },
  {
    title: "AI-Powered Learning Management System (EdTech)",
    description:
      "Real-time AI tutor with voice/text via LiveKit WebRTC, collaborative whiteboard with Socket.IO sync, and DRM protection for premium video content.",
    tags: ["Next.js", "LiveKit", "WebRTC", "Socket.IO"],
  },
  {
    title: "Fantasy Sports Admin Dashboard (FinTech/Gaming)",
    description:
      "Admin system for 50,000+ users with real-time financial tracking, contest operations, and fraud workflows. Built WebSocket live leaderboard (sub-100ms) and analytics dashboards over 1M+ transactions.",
    tags: ["React", "Redux Toolkit", "WebSockets", "Charts"],
  },
];

const skills = [
  {
    name: "Core Expertise",
    items: ["React.js (Fiber Architecture)", "TypeScript", "JavaScript (ES6+)", "Frontend System Design"],
  },
  {
    name: "Frameworks & Libraries",
    items: ["Next.js", "Redux Toolkit", "TanStack Query", "Context API", "Tailwind CSS"],
  },
  {
    name: "Performance & Algorithms",
    items: ["Virtual DOM Diffing", "Reconciliation", "Web Vitals Optimization", "Code Splitting"],
  },
  {
    name: "Testing, Tooling & DevOps",
    items: ["Jest", "React Testing Library", "Cypress", "Webpack", "Vite", "Docker", "Git", "CI/CD"],
  },
];

const blogs = [
  {
    title: "Socket.IO Explained: Why It Exists, How It Works Internally, and How It Scales to Millions",
    url: "https://dev.to/munna_thakur_2019444f0351/socketio-explained-why-it-exists-how-it-works-internally-and-how-it-scales-to-millions-1ekj",
    tags: ["System Design", "Networking", "JavaScript"],
  },
  {
    title: "Why Most React Apps Fail Core Web Vitals (And How to Actually Fix Them)",
    url: "https://dev.to/munna_thakur_2019444f0351/why-most-react-apps-fail-core-web-vitals-and-how-to-actually-fix-them-312e",
    tags: ["React", "Performance", "Web Vitals"],
  },
  {
    title: "React Query Architecture — Complete Flow from Hook to Render",
    url: "https://dev.to/munna_thakur_2019444f0351/react-query-architecture-complete-flow-from-hook-to-render-4boj",
    tags: ["React Query", "Architecture", "React"],
  },
  {
    title: "I Built React from Scratch and Discovered Why Fiber Changes Everything",
    url: "https://dev.to/munna_thakur_2019444f0351/i-built-react-from-scratch-and-discovered-why-fiber-changes-everything-1g4c",
    tags: ["React", "Fiber", "Internals"],
  },
  {
    title: "The Day I Finally Understood React Keys (And Why Your Checkbox Keeps Breaking)",
    url: "https://dev.to/munna_thakur_2019444f0351/the-day-i-finally-understood-react-keys-and-why-your-checkbox-keeps-breaking-4ch7",
    tags: ["React", "Reconciliation", "Keys"],
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactStatus, setContactStatus] = useState<"idle" | "success" | "error">("idle");
  const [contactError, setContactError] = useState<string | null>(null);

  const siteUrl = "https://munna-thakur-software.vercel.app";
  const personId = `${siteUrl}/#person`;

  const blogItemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Munna Thakur - DEV.to Articles",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: blogs.length,
    itemListElement: blogs.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: post.url,
      item: {
        "@type": "BlogPosting",
        headline: post.title,
        url: post.url,
        author: { "@id": personId },
      },
    })),
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "blogs", "education", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileNavOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const navSections = ["about", "experience", "projects", "skills", "blogs", "education", "contact"] as const;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-500/30">
      <Script
        id="ld-blogs-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogItemListLd) }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:p-6">
        <div className="w-full max-w-4xl">
          {/* Desktop */}
          <div className="hidden md:flex glass px-8 py-3 rounded-full items-center justify-center gap-8 text-sm font-medium">
            {navSections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`capitalize transition-colors hover:text-blue-400 ${
                  activeSection === section ? "text-blue-400" : "text-zinc-400"
                }`}
              >
                {section}
              </a>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden glass px-4 py-3 rounded-full flex items-center justify-between">
            <a href="#about" className="font-semibold text-zinc-200">
              Munna
            </a>
            <button
              type="button"
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen((v) => !v)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileNavOpen(false)}
          role="presentation"
        >
          <div
            className="absolute top-20 left-4 right-4 glass rounded-3xl p-4"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="grid grid-cols-2 gap-2">
              {navSections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMobileNavOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-sm font-semibold capitalize transition-colors ${
                    activeSection === section
                      ? "bg-blue-500/15 text-blue-200 border border-blue-500/20"
                      : "bg-white/5 text-zinc-200 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <a
                href="https://www.linkedin.com/in/munna-thakur-frontend-developer-2854b5243/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-200 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                Link
              </a>
              <a
                href="https://github.com/JSMUNNA1"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-200 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4 text-blue-400" />
                Git
              </a>
              <a
                href="https://dev.to/munna_thakur_2019444f0351"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-200 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <BookOpen className="w-4 h-4 text-blue-400" />
                Dev
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[92vh] md:h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 md:pt-0"
      >
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full animate-pulse delay-700" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
            <Zap className="w-3 h-3" />
            <span>OPEN TO OPPORTUNITIES</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight">
            Munna <span className="text-gradient">Thakur</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Software Engineer — Frontend Systems & Performance. Building production-grade web apps,
            optimizing Core Web Vitals, and deep-diving into React internals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-zinc-100 text-zinc-950 font-semibold hover:bg-white transition-all transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="https://wa.me/916239402958"
              className="px-8 py-4 rounded-full bg-emerald-400/15 text-emerald-200 border border-emerald-400/20 font-semibold hover:bg-emerald-400/20 transition-all transform hover:scale-105 flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              Hire Me <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="/munna-resume.pdf"
              className="px-8 py-4 rounded-full glass font-semibold hover:bg-white/10 transition-all transform hover:scale-105 flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              Resume <FileText className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full glass font-semibold hover:bg-white/10 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Contact <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a
              href="https://www.linkedin.com/in/munna-thakur-frontend-developer-2854b5243/"
              target="_blank"
              rel="noreferrer"
              className="glass px-4 py-2 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 text-zinc-300"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              LinkedIn
            </a>
            <a
              href="https://github.com/JSMUNNA1"
              target="_blank"
              rel="noreferrer"
              className="glass px-4 py-2 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 text-zinc-300"
            >
              <Github className="w-4 h-4 text-blue-400" />
              GitHub
            </a>
            <a
              href="https://dev.to/munna_thakur_2019444f0351"
              target="_blank"
              rel="noreferrer"
              className="glass px-4 py-2 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 text-zinc-300"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              DEV.to
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-display text-4xl font-bold">Crafting Excellence Through Code</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Software Engineer with 1.8 years of experience building high-scale, production-grade web
                applications serving 10,000+ DAU. I focus on React internals, frontend system design,
                and performance optimization—delivering 40%+ improvements through algorithmic and
                architectural refactoring.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Code2, label: "React Internals", desc: "Fiber • Reconciliation • Hooks" },
                { icon: Cpu, label: "Performance", desc: "Web Vitals • TTI • Code Splitting" },
                { icon: Layers, label: "System Design", desc: "Scalable FE architecture patterns" },
                { icon: Terminal, label: "Quality", desc: "Testing • Tooling • DX" },
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl space-y-3">
                  <item.icon className="w-6 h-6 text-blue-400" />
                  <h3 className="font-semibold">{item.label}</h3>
                  <p className="text-xs text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
              <img 
                src="/profile.png"
                alt="Munna Thakur" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-blue-400">10k+</div>
                <div className="text-xs text-zinc-400 uppercase tracking-wider font-bold">Daily Active<br />Users Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3 space-y-4">
            <h2 className="font-display text-4xl font-bold">Career Journey</h2>
            <p className="text-zinc-400">
              Roles and impact across production systems, performance work, and frontend architecture.
            </p>
          </div>
          
          <div className="md:w-2/3 space-y-12">
            {[
              {
                role: "Software Engineer (Frontend)",
                company: "Yudiz Solutions — Ahmedabad, India",
                period: "Jul 2024 — Present",
                desc: "Delivered 5+ production React apps scaling to 10,000+ DAU with 99.9% FE uptime and sub-100ms interaction latency. Reduced API overhead by 45% with Redux Toolkit + TanStack Query caching/dedup. Led a 50,000+ LOC TypeScript migration cutting runtime errors by 60%. Improved Core Web Vitals with code splitting, lazy loading, and render optimization (40% faster load, 25% better TTI).",
              },
              {
                role: "Frontend Developer Intern",
                company: "CodTech IT Solutions — Remote",
                period: "Feb 2024 — Mar 2024",
                desc: "Built a real-time job portal dashboard with React + Tailwind CSS. Improved engagement by 20% via responsive UX and optimized rendering performance.",
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-zinc-800 space-y-2"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                <div className="text-sm font-bold text-blue-400 uppercase tracking-widest">{exp.period}</div>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <div className="text-zinc-300 font-medium">{exp.company}</div>
                <p className="text-zinc-500 max-w-xl">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="font-display text-4xl font-bold">Deep-Dive Projects</h2>
              <p className="text-zinc-400 max-w-xl">
                Systems-focused projects: React internals, real-time systems, and performance-heavy UIs.
              </p>
            </div>
            <a
              href="/munna-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 font-medium flex items-center gap-2 hover:gap-4 transition-all"
            >
              Download Resume <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all"
              >
                <div className="p-8 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-2 py-1 rounded-md bg-zinc-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-display text-4xl font-bold">Technical Arsenal</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Strong foundation in rendering algorithms, browser performance, and scalable frontend architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl space-y-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                {i === 0 && <Terminal className="w-6 h-6 text-blue-400" />}
                {i === 1 && <Cpu className="w-6 h-6 text-blue-400" />}
                {i === 2 && <Layers className="w-6 h-6 text-blue-400" />}
                {i === 3 && <Star className="w-6 h-6 text-blue-400" />}
              </div>
              <h3 className="text-xl font-bold">{skill.name}</h3>
              <ul className="space-y-3">
                {skill.items.map((item, j) => (
                  <li key={j} className="text-zinc-400 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="py-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="font-display text-4xl font-bold">Blogs</h2>
            <p className="text-zinc-400 max-w-2xl">
              Deep dives on React internals, performance, and scalable web architecture. Read more on{" "}
              <a
                className="text-blue-400 hover:text-blue-300 transition-colors"
                href="https://dev.to/munna_thakur_2019444f0351"
                target="_blank"
                rel="noreferrer"
              >
                DEV.to
              </a>
              .
            </p>
          </div>
          <a
            href="https://dev.to/munna_thakur_2019444f0351"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 font-medium flex items-center gap-2 hover:gap-4 transition-all"
          >
            View all posts <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group glass p-8 rounded-3xl hover:border-blue-500/30 transition-all block"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    DEV.to
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-2 py-1 rounded-md bg-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors mt-1 shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Education & Impact Section */}
      <section id="education" className="py-32 px-4 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[40px] space-y-6"
          >
            <h2 className="font-display text-4xl font-bold">Education</h2>
            <div className="space-y-2">
              <div className="text-lg font-semibold">Bachelor of Engineering in Computer Engineering</div>
              <div className="text-zinc-400">Gujarat Technological University</div>
              <div className="text-zinc-500 text-sm">CGPA: 8.3/10.0</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[40px] space-y-6"
          >
            <h2 className="font-display text-4xl font-bold">Leadership & Impact</h2>
            <ul className="space-y-4 text-zinc-400 leading-relaxed">
              <li className="flex gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>
                  Technical writing on Medium about React internals (Fiber, reconciliation), performance optimization,
                  custom hooks, and scalable frontend architecture—shared with 1.2k+ developers.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>
                  AI-assisted development workflow using Cursor, Claude, and ChatGPT for code review and diagnosis,
                  while validating outputs and refactoring for production quality.
                </span>
              </li>
              <li className="flex gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>
                  Open-source contributor and community speaker (Ahmedabad meetups) on React performance and modern
                  JavaScript patterns.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
        <div className="max-w-5xl mx-auto glass rounded-[40px] p-12 md:p-20 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="font-display text-5xl font-bold leading-tight">
                Let's Build <br />
                Something <span className="text-gradient">Epic</span>
              </h2>
              <p className="text-zinc-400 text-lg">
                For roles, freelance work, or collaborations—reach out and I’ll respond quickly.
              </p>
              
              <div className="space-y-4 pt-8">
                <a href="mailto:munna.thakur.dev@gmail.com" className="flex items-center gap-4 text-xl font-medium hover:text-blue-400 transition-colors">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  munna.thakur.dev@gmail.com
                </a>
                <a href="tel:+916239402958" className="flex items-center gap-4 text-xl font-medium hover:text-blue-400 transition-colors">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  +91 62394 02958
                </a>
                <a
                  href="https://wa.me/916239402958"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-xl font-medium hover:text-emerald-300 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  WhatsApp: Hire me
                </a>
                <div className="flex items-center gap-4 text-xl font-medium text-zinc-300">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  Ahmedabad, Gujarat, India
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://www.linkedin.com/in/munna-thakur-frontend-developer-2854b5243/"
                    target="_blank"
                    rel="noreferrer"
                    className="glass px-4 py-2 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 text-zinc-300"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/JSMUNNA1"
                    target="_blank"
                    rel="noreferrer"
                    className="glass px-4 py-2 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 text-zinc-300"
                  >
                    <Github className="w-4 h-4 text-blue-400" />
                    GitHub
                  </a>
                  <a
                    href="https://dev.to/munna_thakur_2019444f0351"
                    target="_blank"
                    rel="noreferrer"
                    className="glass px-4 py-2 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 text-zinc-300"
                  >
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    DEV.to
                  </a>
                </div>
                <a
                  href="/munna-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 pt-6 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Download Resume (PDF)
                </a>
              </div>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setContactError(null);

                const name = contactName.trim();
                const email = contactEmail.trim();
                const message = contactMessage.trim();

                if (!name || !email || !message) {
                  setContactStatus("error");
                  setContactError("Please fill in name, email, and message.");
                  return;
                }

                // Basic email sanity check (not strict validation).
                if (!/^\S+@\S+\.\S+$/.test(email)) {
                  setContactStatus("error");
                  setContactError("Please enter a valid email address.");
                  return;
                }

                const subject = encodeURIComponent(`Portfolio contact from ${name}`);
                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
                );

                window.location.href = `mailto:munna.thakur.dev@gmail.com?subject=${subject}&body=${body}`;
                setContactStatus("success");
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                <textarea
                  rows={4}
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              {contactStatus !== "idle" && (
                <div
                  className={`rounded-xl px-4 py-3 text-sm border flex items-start gap-2 ${
                    contactStatus === "success"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                      : "border-rose-500/30 bg-rose-500/10 text-rose-200"
                  }`}
                >
                  {contactStatus === "success" ? (
                    <CheckCircle2 className="w-4 h-4 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 mt-0.5" />
                  )}
                  <div>
                    {contactStatus === "success"
                      ? "Opening your email client with the message pre-filled."
                      : contactError ?? "Something went wrong. Please try again."}
                  </div>
                </div>
              )}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-zinc-100 text-zinc-950 font-bold hover:bg-white transition-all transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 text-center">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Munna Thakur Software. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
