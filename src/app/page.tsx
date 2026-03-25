"use client";

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  ChevronRight,
  Terminal,
  Zap,
  Star
} from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Quantum Analytics Engine",
    description: "A high-performance data processing engine built with Rust and Next.js, capable of handling millions of data points in real-time.",
    tags: ["Next.js", "Rust", "WebAssembly", "Tailwind"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/quantum/800/450"
  },
  {
    title: "Neural Vision Dashboard",
    description: "An AI-powered computer vision dashboard for real-time object detection and classification in manufacturing environments.",
    tags: ["React", "TensorFlow.js", "Python", "FastAPI"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/neural/800/450"
  },
  {
    title: "Eco-Sync Platform",
    description: "A decentralized platform for tracking carbon credits and environmental impact using blockchain technology.",
    tags: ["Solidity", "Ether.js", "Next.js", "PostgreSQL"],
    link: "#",
    github: "#",
    image: "https://picsum.photos/seed/eco/800/450"
  }
];

const skills = [
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { name: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"] },
  { name: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"] },
  { name: "AI/ML", items: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain"] }
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
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

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
        <div className="glass px-8 py-3 rounded-full flex items-center gap-8 text-sm font-medium">
          {["hero", "about", "experience", "projects", "skills", "contact"].map((section) => (
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
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
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
            <span>AVAILABLE FOR NEW PROJECTS</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight">
            Building the <span className="text-gradient">Future</span> of <br />
            Software Solutions
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Munna Thakur — Senior Software Engineer specializing in high-performance 
            scalable systems and modern web architectures.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-zinc-100 text-zinc-950 font-semibold hover:bg-white transition-all transform hover:scale-105">
              View Projects
            </button>
            <button className="px-8 py-4 rounded-full glass font-semibold hover:bg-white/10 transition-all transform hover:scale-105 flex items-center gap-2">
              Contact Me <ChevronRight className="w-4 h-4" />
            </button>
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
                With over a decade of experience in the software industry, I've helped startups 
                and enterprises build robust digital products. My approach combines technical 
                precision with a deep understanding of user needs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Code2, label: "Clean Code", desc: "Maintainable & Scalable" },
                { icon: Cpu, label: "Performance", desc: "Optimized & Fast" },
                { icon: Globe, label: "Global Scale", desc: "Cloud Native" },
                { icon: Layers, label: "Architecture", desc: "Modern Patterns" }
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
                src="https://picsum.photos/seed/munna/800/800" 
                alt="Munna Thakur" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-blue-400">10+</div>
                <div className="text-xs text-zinc-400 uppercase tracking-wider font-bold">Years of<br />Experience</div>
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
              A timeline of my professional growth and the impact I've made at various organizations.
            </p>
          </div>
          
          <div className="md:w-2/3 space-y-12">
            {[
              {
                role: "Lead Software Architect",
                company: "TechNova Solutions",
                period: "2021 — Present",
                desc: "Leading the architectural design of a cloud-native SaaS platform. Reduced infrastructure costs by 40% through serverless optimization."
              },
              {
                role: "Senior Full Stack Engineer",
                company: "DataStream AI",
                period: "2018 — 2021",
                desc: "Developed real-time data visualization tools using React and D3.js. Implemented automated CI/CD pipelines for 50+ microservices."
              },
              {
                role: "Software Engineer",
                company: "Global Systems",
                period: "2015 — 2018",
                desc: "Built scalable RESTful APIs and optimized database queries, improving application performance by 60%."
              }
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
              <h2 className="font-display text-4xl font-bold">Selected Works</h2>
              <p className="text-zinc-400 max-w-xl">
                A collection of projects that push the boundaries of what's possible 
                on the web and beyond.
              </p>
            </div>
            <button className="text-blue-400 font-medium flex items-center gap-2 hover:gap-4 transition-all">
              View All Archive <ChevronRight className="w-4 h-4" />
            </button>
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
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
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
                  <div className="pt-4 flex items-center gap-4">
                    <a href={project.link} className="p-2 rounded-full glass hover:bg-white/10 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={project.github} className="p-2 rounded-full glass hover:bg-white/10 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
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
            My expertise spans across the entire development stack, with a focus 
            on modern, efficient technologies.
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
                {i === 2 && <Globe className="w-6 h-6 text-blue-400" />}
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
                I'm currently open to new opportunities and collaborations. 
                Have a project in mind? Let's talk.
              </p>
              
              <div className="space-y-4 pt-8">
                <a href="mailto:hello@munnathakur.com" className="flex items-center gap-4 text-xl font-medium hover:text-blue-400 transition-colors">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  hello@munnathakur.com
                </a>
                <div className="flex gap-4 pt-4">
                  {[Github, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                  <input type="text" className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                  <input type="email" className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                <textarea rows={4} className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500/50 transition-colors resize-none" placeholder="Tell me about your project..." />
              </div>
              <button className="w-full py-4 rounded-xl bg-zinc-100 text-zinc-950 font-bold hover:bg-white transition-all transform hover:scale-[1.02]">
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
