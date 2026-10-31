"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "AI Applications",
    description:
      "Practical AI tools that help people work through real problems—from intelligent job-search workflows to data exploration assistants.",
    items: ["AI-powered applications", "LLM-powered workflows", "Human-centred problem solving"],
  },
  {
    number: "02",
    title: "Data Intelligence",
    description:
      "Turning raw, messy data into clearer information through data cleaning, analysis, validation, and useful visual insights.",
    items: ["Data analysis & preparation", "Data quality checks", "Insight dashboards"],
  },
  {
    number: "03",
    title: "AI Automation",
    description:
      "Connecting tools and repeatable tasks into useful workflows, with Python, APIs, and automation platforms.",
    items: ["Python automation", "API integrations", "Workflow orchestration"],
  },
  {
    number: "04",
    title: "Machine Learning",
    description:
      "Building and learning predictive systems, from core machine-learning models to computer-vision experiments.",
    items: ["Model training & evaluation", "Computer vision", "Model experimentation"],
  },
];

const projects = [
  {
    number: "01",
    title: "Nexus AI Job Search",
    type: "AI AGENTS · NLP",
    description:
      "An intelligent job-search platform designed to analyse resumes, explore relevant opportunities, and help candidates understand their job readiness.",
    stack: ["Python", "Ollama", "LLMs", "Flask"],
    visual: "visual-job",
    label: "CAREER INTELLIGENCE",
  },
  {
    number: "02",
    title: "AI Data Pipeline Agent",
    type: "AI AUTOMATION · DATA",
    description:
      "An AI-assisted workflow concept for ingesting data, cleaning records, validating quality, and preparing information for downstream analysis.",
    stack: ["Python", "FastAPI", "n8n", "RAG"],
    visual: "visual-pipeline",
    label: "DATA IN MOTION",
  },
  {
    number: "03",
    title: "AI Data Analyst Copilot",
    type: "DATA INTELLIGENCE",
    description:
      "A data-analysis assistant concept that helps users inspect datasets, find quality issues, create visualisations, and discover useful insights.",
    stack: ["Python", "Pandas", "Streamlit", "LLMs"],
    visual: "visual-analyst",
    label: "ASK YOUR DATA",
  },
  {
    number: "04",
    title: "Driver Drowsiness Detection",
    type: "COMPUTER VISION",
    description:
      "A computer-vision project using facial landmarks and eye movement patterns to detect possible driver drowsiness.",
    stack: ["Python", "OpenCV", "Dlib", "EAR"],
    visual: "visual-driver",
    label: "SAFETY SYSTEMS",
  },
];

const skills = [
  ["Python", "PROGRAMMING"],
  ["Machine Learning", "AI / ML"],
  ["LLMs & RAG", "GENERATIVE AI"],
  ["FastAPI", "BACKEND"],
  ["SQL", "DATA"],
  ["Computer Vision", "AI / ML"],
  ["Pandas & NumPy", "DATA"],
  ["Git & GitHub", "ENGINEERING"],
];

export default function Home() {
  const [openService, setOpenService] = useState("01");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="portfolio-shell min-h-screen overflow-hidden bg-[#0a0a0a] text-[#f4f1ec]">
      <style jsx global>{`
        html { scroll-behavior: smooth; background: #0a0a0a; }
        body { margin: 0; background: #0a0a0a; }
        ::selection { background: #f04438; color: #fff; }
        .portfolio-shell { --accent: #f04438; font-family: Arial, Helvetica, sans-serif; }
        .top-nav { border-bottom: 1px solid rgba(255,255,255,.16); }
        .nav-link { transition: color .2s ease; }
        .nav-link:hover { color: var(--accent); }
        .hero-title-track { animation: name-drift 26s linear infinite; }
        @keyframes name-drift { from { transform: translateX(0); } to { transform: translateX(-38%); } }
        .hero-photo { filter: grayscale(100%) contrast(1.06); }
        .hero-photo-wrap:after { content:""; position:absolute; inset:0; background:linear-gradient(90deg,rgba(10,10,10,.03),transparent 45%,rgba(10,10,10,.08)); pointer-events:none; }
        .eyebrow { color: var(--accent); letter-spacing: .19em; }
        .outline-number { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,.38); line-height: .82; }
        .service-row { border-top: 1px solid rgba(255,255,255,.19); }
        .service-row:last-child { border-bottom: 1px solid rgba(255,255,255,.19); }
        .service-content { animation: reveal .28s ease both; }
        @keyframes reveal { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .project-visual { position:relative; min-height:250px; overflow:hidden; background:#171717; }
        .project-visual:before { content:""; position:absolute; inset:0; opacity:.9; }
        .visual-job:before { background: radial-gradient(ellipse at 65% 35%,rgba(240,68,56,.48),transparent 34%), linear-gradient(135deg,#1a1a1a,#303030 55%,#111); }
        .visual-pipeline:before { background: radial-gradient(circle at 28% 35%,rgba(240,68,56,.38),transparent 23%), radial-gradient(circle at 75% 70%,rgba(255,255,255,.13),transparent 30%), #151515; }
        .visual-analyst:before { background: linear-gradient(145deg,transparent 30%,rgba(240,68,56,.3)), repeating-linear-gradient(90deg,#171717 0 42px,#292929 43px 44px); }
        .visual-driver:before { background: radial-gradient(ellipse at 50% 40%,rgba(255,255,255,.22),transparent 23%), radial-gradient(ellipse at 50% 40%,transparent 0 29%,rgba(240,68,56,.45) 30% 30.5%,transparent 31%), #151515; }
        .visual-orbit { position:absolute; left:50%; top:50%; width:155px; height:155px; transform:translate(-50%,-50%); border:1px solid rgba(255,255,255,.45); border-radius:50%; }
        .visual-orbit:before,.visual-orbit:after { content:""; position:absolute; inset:17px; border:1px solid rgba(255,255,255,.25); border-radius:50%; transform:rotate(50deg) scaleX(.45); }
        .visual-orbit:after { transform:rotate(-50deg) scaleX(.45); }
        .project-card { transition: transform .35s ease, border-color .35s ease; }
        .project-card:hover { transform: translateY(-5px); border-color:rgba(240,68,56,.55); }
        .project-card:hover .visual-orbit { transform:translate(-50%,-50%) rotate(22deg) scale(1.06); transition:transform .6s ease; }
        .red-link { transition:gap .2s ease,color .2s ease; }
        .red-link:hover { color:var(--accent); }
        @media (prefers-reduced-motion: reduce) { *,*::before,*::after { animation-duration:.01ms !important; animation-iteration-count:1 !important; scroll-behavior:auto !important; transition-duration:.01ms !important; } }
      `}</style>

      <header className="top-nav relative z-20">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10">
          <a href="#home" className="text-sm font-bold tracking-[.13em]">IMAM ALI <span className="text-[#f04438]">/</span> AI</a>
          <button
            className="border border-white/25 px-3 py-2 text-xs uppercase tracking-widest md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <div className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-5 border-b border-white/15 bg-[#0a0a0a] px-5 py-6 text-xs uppercase tracking-widest md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
            {[["About", "#about"], ["Services", "#services"], ["Projects", "#projects"], ["Skills", "#skills"], ["Contact", "#contact"]].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="nav-link">{label}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="border border-white/30 px-4 py-3 text-center transition hover:border-[#f04438] hover:text-[#f04438]">Let&apos;s talk ↗</a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-8 md:px-10 md:pt-12">
        <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[.22em] text-white/50 md:text-xs">
          <span>AI Engineer · Portfolio 2026</span>
          <span>Based in India · Open to opportunities</span>
        </div>
        <div className="hero-photo-wrap relative h-[440px] overflow-hidden border-y border-white/15 sm:h-[540px] md:h-[650px]">
          <Image
            src="/profile.jpg"
            alt="Portrait of Mohammed Imam Ali"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1440px"
            className="hero-photo object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />
          <div className="absolute inset-0 flex items-center overflow-hidden">
            <div className="hero-title-track flex w-max whitespace-nowrap">
              <span className="px-5 text-[22vw] font-semibold leading-none tracking-[-.085em] text-[#0a0a0a] mix-blend-screen sm:text-[18vw]">Mohammed Imam Ali — </span>
              <span className="px-5 text-[22vw] font-semibold leading-none tracking-[-.085em] text-[#0a0a0a] mix-blend-screen sm:text-[18vw]">Mohammed Imam Ali — </span>
            </div>
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 md:bottom-8 md:left-8 md:right-8">
            <div>
              <p className="eyebrow mb-3 text-[10px] font-bold uppercase md:text-xs">Building useful intelligence</p>
              <h1 className="max-w-xl text-3xl font-medium leading-tight sm:text-5xl md:text-6xl">I build AI systems for <span className="text-[#f04438]">real-world</span> problems.</h1>
            </div>
            <a href="#projects" className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/60 text-2xl transition hover:border-[#f04438] hover:bg-[#f04438] md:flex" aria-label="Scroll to projects">↓</a>
          </div>
        </div>
        <div className="mt-5 grid gap-5 text-sm text-white/65 md:grid-cols-[1fr_1fr_auto] md:items-start">
          <p className="max-w-md">Aspiring AI Engineer focused on practical applications, intelligent automation, and data-driven solutions.</p>
          <p className="max-w-md">Python · Machine Learning · Generative AI · Data Engineering</p>
          <a href="#about" className="red-link flex items-center gap-2 text-xs uppercase tracking-[.16em] text-white">Discover more <span className="text-[#f04438]">↘</span></a>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 md:grid-cols-[.75fr_1.25fr] md:px-10 md:py-32">
        <div>
          <p className="eyebrow text-[10px] font-bold uppercase">01 / About me</p>
          <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">Curiosity first. Useful technology always.</p>
        </div>
        <div>
          <h2 className="max-w-4xl text-3xl font-medium leading-[1.2] tracking-[-.04em] sm:text-4xl md:text-6xl">I&apos;m Mohammed Imam Ali, an aspiring AI Engineer interested in turning complex ideas into <span className="text-[#f04438]">clear, practical tools.</span></h2>
          <div className="mt-8 grid gap-6 text-sm leading-7 text-white/60 sm:grid-cols-2">
            <p>I enjoy building projects that connect software, data, and AI—from resume-aware job-search tools to data workflows and computer-vision experiments.</p>
            <p>My approach is hands-on: learn the fundamentals, build a working version, test it, and improve it based on real needs. I am continuing to grow my engineering skills through practical projects.</p>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/15 bg-[#111111]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-[10px] font-bold uppercase">What I focus on</p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-.05em] sm:text-6xl">Areas of work<span className="text-[#f04438]">.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/55">A growing toolkit for designing and building useful intelligent systems.</p>
          </div>
          <div>
            {services.map((service) => (
              <div key={service.number} className="service-row grid gap-5 py-8 md:grid-cols-[.75fr_1.25fr] md:py-10">
                <button onClick={() => setOpenService(openService === service.number ? "" : service.number)} className="group grid grid-cols-[100px_1fr_auto] items-center gap-4 text-left sm:grid-cols-[150px_1fr_auto]">
                  <span className="outline-number text-7xl font-semibold sm:text-8xl md:text-[130px]">{service.number}</span>
                  <span className="text-xl font-medium tracking-tight sm:text-2xl md:text-3xl">{service.title}</span>
                  <span className={`text-2xl transition ${openService === service.number ? "rotate-45 text-[#f04438]" : "text-white/45"}`}>+</span>
                </button>
                {openService === service.number && (
                  <div className="service-content grid gap-5 pl-1 md:grid-cols-2 md:pl-8">
                    <p className="max-w-lg text-sm leading-7 text-white/60">{service.description}</p>
                    <ul className="space-y-3 text-sm text-white/75">
                      {service.items.map((item) => <li key={item} className="flex items-center justify-between border-b border-white/10 pb-3">{item}<span className="text-[#f04438]">↗</span></li>)}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-[10px] font-bold uppercase">Selected work · 001—004</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-.05em] sm:text-6xl">Projects in progress<span className="text-[#f04438]">.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/55">A selection of AI and data projects exploring practical problems and possible solutions.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.number} className="project-card overflow-hidden border border-white/15 bg-[#111111]">
              <div className={`project-visual ${project.visual}`}>
                <div className="visual-orbit" />
                <div className="absolute left-5 top-5 z-10 text-[10px] uppercase tracking-[.2em] text-white/70">{project.label}</div>
                <div className="absolute bottom-5 left-5 z-10 font-mono text-xs text-white/60">IMAM.AI / {project.number}</div>
                <span className="absolute right-5 top-5 z-10 text-xl text-[#f04438]">↗</span>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="eyebrow text-[10px] font-bold uppercase">{project.type}</p>
                  <span className="text-xs text-white/35">{project.number} / 04</span>
                </div>
                <h3 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">{project.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => <span key={tech} className="border border-white/15 px-3 py-2 text-[10px] uppercase tracking-wider text-white/65">{tech}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-6 text-white/35">Keep project descriptions aligned with what is currently implemented. Add repository and live-demo links once they are ready.</p>
      </section>

      <section id="skills" className="border-y border-white/15 bg-[#111111]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:grid-cols-[.7fr_1.3fr] md:px-10 md:py-28">
          <div>
            <p className="eyebrow text-[10px] font-bold uppercase">Tools of the trade</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-.05em] sm:text-6xl">Technical toolkit<span className="text-[#f04438]">.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {skills.map(([name, type]) => (
              <div key={name} className="flex items-center justify-between border-b border-white/15 py-5">
                <div><p className="text-lg">{name}</p><p className="mt-1 text-[9px] uppercase tracking-[.18em] text-white/40">{type}</p></div>
                <span className="text-[#f04438]">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <div className="border border-white/20 p-7 sm:p-12 md:p-16">
          <p className="eyebrow text-[10px] font-bold uppercase">Have a problem to solve?</p>
          <div className="mt-6 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-.05em] sm:text-6xl md:text-7xl">Let&apos;s build something <span className="text-[#f04438]">meaningful.</span></h2>
            <a href="https://github.com/Imamali07" target="_blank" rel="noreferrer" className="red-link flex items-center gap-3 text-sm uppercase tracking-widest">Visit my GitHub <span className="text-xl text-[#f04438]">↗</span></a>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 border-t border-white/15 pt-6 text-sm text-white/60">
            <a href="https://github.com/Imamali07" target="_blank" rel="noreferrer" className="nav-link">GitHub ↗</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="nav-link">LinkedIn ↗ <span className="text-white/30">(replace with your profile)</span></a>
            <a href="mailto:" className="nav-link">Email ↗ <span className="text-white/30">(add your email)</span></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/15 px-5 py-6 md:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 text-[10px] uppercase tracking-[.15em] text-white/40 sm:flex-row">
          <span>© 2026 Mohammed Imam Ali</span>
          <span>Designed to build useful intelligence <span className="text-[#f04438]">●</span></span>
          <a href="#home" className="nav-link">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
