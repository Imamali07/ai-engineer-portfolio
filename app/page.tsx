"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    name: "Nexus AI Job Search",
    category: "AI AGENTS / NLP",
    description:
      "An intelligent job-search platform designed to analyze resumes, identify relevant opportunities, and help candidates understand their job readiness.",
    stack: ["Python", "LLMs", "Ollama", "Flask"],
    color: "blue",
  },
  {
    number: "02",
    name: "AI Data Pipeline Agent",
    category: "AI AUTOMATION / DATA",
    description:
      "An AI-assisted pipeline that ingests data, cleans records, validates quality, and prepares information for downstream analysis.",
    stack: ["Python", "FastAPI", "n8n", "RAG"],
    color: "purple",
  },
  {
    number: "03",
    name: "AI Data Analyst Copilot",
    category: "DATA INTELLIGENCE",
    description:
      "A concept for helping users explore datasets, detect quality issues, generate visualizations, and discover useful insights.",
    stack: ["Python", "Pandas", "Streamlit", "LLMs"],
    color: "cyan",
  },
  {
    number: "04",
    name: "Driver Drowsiness Detection",
    category: "COMPUTER VISION",
    description:
      "A computer-vision application that analyzes facial landmarks and eye movements to detect possible driver drowsiness.",
    stack: ["Python", "OpenCV", "Dlib", "EAR"],
    color: "pink",
  },
];

const skills = [
  { name: "Python", type: "PROGRAMMING" },
  { name: "Machine Learning", type: "AI / ML" },
  { name: "LLMs & RAG", type: "GENERATIVE AI" },
  { name: "FastAPI", type: "BACKEND" },
  { name: "SQL", type: "DATA" },
  { name: "Computer Vision", type: "AI / ML" },
  { name: "Pandas & NumPy", type: "DATA" },
  { name: "Git & GitHub", type: "ENGINEERING" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function askPortfolio(questionText: string) {
    const q = questionText.toLowerCase();

    if (q.includes("project")) {
      setAnswer(
        "Explore the Projects section to learn about my job-search platform, data pipeline, data analyst copilot, and driver drowsiness detection application."
      );
    } else if (q.includes("skill") || q.includes("technology")) {
      setAnswer(
        "My portfolio highlights Python, SQL, data processing, machine learning, computer vision, FastAPI, and generative AI technologies. The project cards show the technologies associated with each project."
      );
    } else if (q.includes("contact") || q.includes("email")) {
      setAnswer(
        "You can connect with me through the LinkedIn and GitHub links in the Contact section. Replace the example links with your real profiles before publishing."
      );
    } else if (q.includes("resume") || q.includes("experience")) {
      setAnswer(
        "Visit the Resume section to add your latest resume and professional experience. This portfolio is a starting point that you can update with verified details."
      );
    } else {
      setAnswer(
        "I can help you explore the projects, skills, resume section, and technologies presented on this portfolio. Try asking about my projects or skills."
      );
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#070910] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-30">
        <div className="absolute left-[10%] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute right-[-8rem] top-[25rem] h-[30rem] w-[30rem] rounded-full bg-violet-600/20 blur-[150px]" />
      </div>

      <header className="relative z-20 border-b border-white/[0.08] bg-[#070910]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="text-lg font-bold tracking-tight">
            IMAM<span className="text-blue-400">.AI</span>
            <span className="ml-3 hidden border-l border-white/20 pl-3 text-xs font-normal tracking-widest text-slate-500 sm:inline">
              ENGINEERING LAB
            </span>
          </a>

          <button
            className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <div
            className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-5 border-b border-white/10 bg-[#0b0d17] px-6 py-6 text-sm text-slate-300 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}
          >
            <a onClick={() => setMenuOpen(false)} className="hover:text-blue-400" href="#projects">Projects</a>
            <a onClick={() => setMenuOpen(false)} className="hover:text-blue-400" href="#lab">AI Lab</a>
            <a onClick={() => setMenuOpen(false)} className="hover:text-blue-400" href="#skills">Skills</a>
            <a onClick={() => setMenuOpen(false)} className="hover:text-blue-400" href="#contact">Contact</a>
            <a href="#resume" className="rounded-full border border-blue-400/40 px-5 py-2.5 text-center text-blue-300 transition hover:bg-blue-400/10">
              View Resume ↗
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:min-h-[690px] lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-28">
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs tracking-wide text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            AI ENGINEER PORTFOLIO
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Building intelligent systems
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Turning ideas
            <br />
            into{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              intelligent
            </span>
            <br />
            systems.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m Mohammed Imam Ali, an aspiring AI Engineer focused on
            developing practical AI applications, intelligent automation, and
            data-driven solutions to real-world problems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-400">
              Explore Projects <span className="ml-2">↗</span>
            </a>
            <a href="#lab" className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-violet-400/50 hover:bg-white/[0.06]">
              Enter AI Lab
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-slate-500">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>LLMs & RAG</span>
            <span>AI Automation</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-8 rounded-full bg-blue-500/20 blur-[90px]" />
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-blue-950/30 backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">System overview</p>
                <h2 className="mt-2 text-lg font-semibold">AI Engineering Lab</h2>
              </div>
              <div className="rounded-xl border border-blue-400/20 bg-blue-400/10 p-3 text-xl text-blue-300">
                ⌘
              </div>
            </div>

            <div className="my-7 flex items-center justify-center">
              <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-blue-400/20">
                <div className="absolute inset-4 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-violet-400/40" />
                <div className="absolute inset-10 rounded-full border border-cyan-300/20" />
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-blue-300/30 bg-gradient-to-br from-blue-500/20 to-violet-500/20 shadow-[0_0_60px_rgba(59,130,246,0.15)]">
                  <span className="text-3xl font-bold tracking-tighter">AI</span>
                </div>
                <span className="absolute left-0 top-12 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_15px_#67e8f9]" />
                <span className="absolute right-3 top-20 h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_15px_#a78bfa]" />
                <span className="absolute bottom-6 left-9 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_#60a5fa]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["01", "AI APPLICATIONS"],
                ["02", "DATA INTELLIGENCE"],
                ["03", "LLM SYSTEMS"],
                ["04", "AUTOMATION"],
              ].map(([number, label]) => (
                <div key={number} className="rounded-xl border border-white/[0.07] bg-black/20 p-4">
                  <span className="text-xs text-blue-400">{number}</span>
                  <p className="mt-2 text-[10px] tracking-[0.12em] text-slate-400 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-black/20 p-4">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-xs text-slate-400">Explore the projects to see how each system works.</span>
            </div>
          </div>
          <p className="mt-4 text-center text-[10px] tracking-[0.25em] text-slate-600">EXPERIMENT · ENGINEER · IMPROVE</p>
        </div>
      </section>

      <section className="relative border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 sm:grid-cols-3 lg:px-10">
          {[
            ["BUILD", "Practical AI applications"],
            ["EXPLORE", "Intelligent system architecture"],
            ["SOLVE", "Real-world engineering problems"],
          ].map(([title, description]) => (
            <div key={title} className="flex items-start gap-4">
              <span className="mt-1 text-sm font-bold text-blue-400">/ {title}</span>
              <p className="text-sm text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-400">Selected engineering work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Project laboratory<span className="text-blue-400">.</span></h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Explore the applications I&apos;m building and the technologies behind them.
            </p>
          </div>
          <span className="text-sm text-slate-500">PROJECT INDEX / 001—004</span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.number} className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04] sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-slate-500">{project.number} / 04</span>
                <span className={`h-2 w-2 rounded-full ${project.color === "purple" ? "bg-violet-400" : project.color === "cyan" ? "bg-cyan-300" : project.color === "pink" ? "bg-pink-400" : "bg-blue-400"}`} />
              </div>
              <p className="mt-8 text-[10px] font-semibold tracking-[0.2em] text-blue-400">{project.category}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.name}</h3>
              <p className="mt-4 min-h-20 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span key={technology} className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-7 border-t border-white/[0.07] pt-5">
                <a href="#contact" className="text-sm font-medium text-slate-300 transition group-hover:text-blue-300">
                  Explore project details <span className="ml-1">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-6 text-slate-600">
          Project descriptions represent the intended capabilities of these projects. Update each card with verified implementation details, working demos, and repository links before publishing.
        </p>
      </section>

      <section id="lab" className="relative border-y border-white/[0.07] bg-[#0b0e19]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-violet-400">Interactive experience</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">Ask the portfolio<span className="text-violet-400">.</span></h2>
            <p className="mt-5 leading-8 text-slate-400">
              Explore the portfolio using natural language. This first version uses a small set of predefined responses. We can connect a real LLM and RAG backend in a later step.
            </p>
            <div className="mt-8 space-y-3">
              {["What projects are available?", "What technologies do you use?", "How can I contact you?"].map((prompt) => (
                <button key={prompt} onClick={() => { setQuestion(prompt); askPortfolio(prompt); }} className="block w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-left text-sm text-slate-300 transition hover:border-violet-400/40 hover:bg-violet-400/[0.05]">
                  <span className="mr-3 text-violet-400">↳</span>{prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="flex min-h-[420px] flex-col rounded-2xl border border-white/10 bg-[#070910] p-5 shadow-2xl sm:p-7">
            <div className="flex items-center gap-3 border-b border-white/[0.08] pb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 font-bold">AI</div>
              <div>
                <p className="text-sm font-semibold">Portfolio Assistant</p>
                <p className="mt-1 text-xs text-slate-500">Interactive preview · Demo mode</p>
              </div>
              <span className="ml-auto rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-2 py-1 text-[10px] text-amber-300">DEMO</span>
            </div>

            <div className="flex-1 py-6">
              <div className="max-w-md rounded-xl border border-white/[0.08] bg-white/[0.035] p-4 text-sm leading-7 text-slate-300">
                Hello! I&apos;m the portfolio assistant. Ask me about the projects, technical skills, or contact information presented on this page.
              </div>
              {answer && (
                <div className="ml-auto mt-5 max-w-md rounded-xl border border-blue-400/20 bg-blue-400/[0.07] p-4 text-sm leading-7 text-slate-200">
                  <p className="mb-2 text-xs text-blue-300">Portfolio Assistant</p>
                  {answer}
                </div>
              )}
            </div>

            <form onSubmit={(event) => { event.preventDefault(); if (question.trim()) askPortfolio(question); }} className="flex gap-2 border-t border-white/[0.08] pt-5">
              <input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask about projects or skills..." className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-400/50" />
              <button type="submit" className="rounded-xl bg-blue-500 px-5 text-sm font-semibold transition hover:bg-blue-400">Ask ↗</button>
            </form>
          </div>
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">Technical toolkit</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Engineering skills<span className="text-cyan-400">.</span></h2>
          <p className="mt-4 text-slate-400">A selection of technologies associated with my AI and software projects.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.name} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-cyan-300/30">
              <p className="text-[10px] tracking-[0.2em] text-slate-500">{skill.type}</p>
              <h3 className="mt-4 text-lg font-medium">{skill.name}</h3>
              <div className="mt-5 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-slate-600">Adjust this list to reflect the technologies you can confidently explain and demonstrate.</p>
      </section>

      <section id="resume" className="relative mx-6 mb-24 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.10] via-[#0b0e19] to-violet-500/[0.10] sm:mx-auto sm:max-w-7xl">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[80px]" />
        <div className="relative flex flex-col justify-between gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:p-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-400">Professional profile</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Let&apos;s build something meaningful.</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-400">Add your current resume PDF here so recruiters can review your verified skills, projects, and experience.</p>
          </div>
          <a href="#contact" className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-4 text-sm font-semibold text-[#080a12] transition hover:-translate-y-1 hover:bg-blue-100">
            Resume coming soon ↗
          </a>
        </div>
      </section>

      <footer id="contact" className="relative border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <a href="#home" className="text-lg font-bold">IMAM<span className="text-blue-400">.AI</span></a>
            <p className="mt-2 text-sm text-slate-500">Building, learning, and engineering intelligent systems.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-slate-400">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-blue-400">GitHub ↗</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-blue-400">LinkedIn ↗</a>
            <a href="#home" className="transition hover:text-blue-400">Back to top ↑</a>
          </div>
        </div>
        <div className="border-t border-white/[0.05] px-6 py-5 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Mohammed Imam Ali · AI Engineer Portfolio
        </div>
      </footer>
    </main>
  );
}