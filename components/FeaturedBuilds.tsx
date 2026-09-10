"use client";

import ScrollReveal from "./ScrollReveal";
import TechTag from "./TechTag";

interface Project {
  title: string;
  subtitle: string;
  award?: string;
  github: string;
  description: string[];
  tags: string[];
  shadowClass: string;
  accentColor: string;
  visual: React.ReactNode;
}

function KiraSVG() {
  return (
    <div
      className="w-full h-40 border-b border-border flex items-center justify-center overflow-hidden"
      style={{ background: "var(--surface2)" }}
    >
      <svg viewBox="0 0 200 100" fill="none" className="w-full h-full p-4" aria-label="Kira architecture diagram">
        <rect x="8"   y="30" width="52" height="40" stroke="var(--coral)"       strokeWidth="2" fill="none" />
        <text x="34"  y="46" textAnchor="middle" fill="var(--coral)"       fontFamily="var(--font-jetbrains-mono)" fontSize="6" fontWeight="600">OBSERVE</text>
        <text x="34"  y="59" textAnchor="middle" fill="var(--ink)"         fontFamily="var(--font-jetbrains-mono)" fontSize="5" opacity="0.4">nmap · gobuster</text>

        <rect x="76"  y="30" width="52" height="40" stroke="var(--blue)"        strokeWidth="2" fill="none" />
        <text x="102" y="46" textAnchor="middle" fill="var(--blue)"        fontFamily="var(--font-jetbrains-mono)" fontSize="6" fontWeight="600">THINK</text>
        <text x="102" y="59" textAnchor="middle" fill="var(--ink)"         fontFamily="var(--font-jetbrains-mono)" fontSize="5" opacity="0.4">Gemma 3 4B</text>

        <rect x="144" y="30" width="52" height="40" stroke="var(--sunflower)"   strokeWidth="2" fill="none" />
        <text x="170" y="46" textAnchor="middle" fill="var(--sunflower)"   fontFamily="var(--font-jetbrains-mono)" fontSize="6" fontWeight="600">ACT</text>
        <text x="170" y="59" textAnchor="middle" fill="var(--ink)"         fontFamily="var(--font-jetbrains-mono)" fontSize="5" opacity="0.4">14 tools</text>

        <path d="M60 50 L76 50"   stroke="var(--border-bright)" strokeWidth="1.5" markerEnd="url(#k-ah)" />
        <path d="M128 50 L144 50" stroke="var(--border-bright)" strokeWidth="1.5" markerEnd="url(#k-ah)" />
        <path d="M170 70 Q170 88 102 88 Q34 88 34 70" stroke="var(--coral)" strokeWidth="1.5" strokeDasharray="4 3" fill="none" markerEnd="url(#k-ahc)" />

        <defs>
          <marker id="k-ah"  markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto"><path d="M0,0 L0,4 L6,2 z" fill="var(--border-bright)" /></marker>
          <marker id="k-ahc" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto"><path d="M0,0 L0,4 L6,2 z" fill="var(--coral)" /></marker>
        </defs>
      </svg>
    </div>
  );
}

function ContainerCraftSVG() {
  return (
    <div
      className="w-full h-40 border-b border-border flex items-center justify-center overflow-hidden"
      style={{ background: "var(--surface2)" }}
    >
      <svg viewBox="0 0 200 100" fill="none" className="w-full h-full p-4" aria-label="ContainerCraft diagram">
        <rect x="10" y="15" width="180" height="70" stroke="var(--blue)" strokeWidth="1.5" fill="none" strokeDasharray="6 3" />
        <text x="100" y="11" textAnchor="middle" fill="var(--blue)" fontFamily="var(--font-jetbrains-mono)" fontSize="6.5">Docker Compose Canvas</text>

        <rect x="20"  y="28" width="44" height="44" stroke="var(--border-bright)" strokeWidth="1.5" fill="var(--surface)" />
        <text x="42"  y="47" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-jetbrains-mono)" fontSize="6"   opacity="0.85">nginx</text>
        <text x="42"  y="60" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-jetbrains-mono)" fontSize="5"   opacity="0.35">:80</text>

        <rect x="80"  y="28" width="44" height="44" stroke="var(--border-bright)" strokeWidth="1.5" fill="var(--surface)" />
        <text x="102" y="47" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-jetbrains-mono)" fontSize="6"   opacity="0.85">api</text>
        <text x="102" y="60" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-jetbrains-mono)" fontSize="5"   opacity="0.35">:8000</text>

        <rect x="140" y="28" width="44" height="44" stroke="var(--border-bright)" strokeWidth="1.5" fill="var(--surface)" />
        <text x="162" y="47" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-jetbrains-mono)" fontSize="6"   opacity="0.85">postgres</text>
        <text x="162" y="60" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-jetbrains-mono)" fontSize="5"   opacity="0.35">:5432</text>

        <path d="M64 50 L80 50"   stroke="var(--blue)" strokeWidth="1.5" markerEnd="url(#cc-ah)" />
        <path d="M124 50 L140 50" stroke="var(--blue)" strokeWidth="1.5" markerEnd="url(#cc-ah)" />

        <defs>
          <marker id="cc-ah" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto"><path d="M0,0 L0,4 L6,2 z" fill="var(--blue)" /></marker>
        </defs>
      </svg>
    </div>
  );
}

function CottonDoctorSVG() {
  return (
    <div
      className="w-full h-40 border-b border-border flex items-center justify-center overflow-hidden"
      style={{ background: "var(--surface2)" }}
    >
      <svg viewBox="0 0 200 100" fill="none" className="w-full h-full p-4" aria-label="Cotton Doctor CNN pipeline">
        <rect x="8"   y="35" width="30" height="30" stroke="var(--sunflower)" strokeWidth="1.5" fill="none" />
        <text x="23"  y="52" textAnchor="middle" fill="var(--sunflower)" fontFamily="var(--font-jetbrains-mono)" fontSize="5.5">Input</text>
        <text x="23"  y="62" textAnchor="middle" fill="var(--ink)"       fontFamily="var(--font-jetbrains-mono)" fontSize="4.5" opacity="0.35">224×224</text>

        <path d="M38 50 L50 50" stroke="var(--border-bright)" strokeWidth="1.5" markerEnd="url(#cd-ah)" />

        <rect x="50"  y="30" width="36" height="40" stroke="var(--border-bright)" strokeWidth="1.5" fill="none" />
        <text x="68"  y="48" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-jetbrains-mono)" fontSize="5.5" opacity="0.85">ResNet</text>
        <text x="68"  y="60" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-jetbrains-mono)" fontSize="5"   opacity="0.45">-18</text>

        <path d="M86 50 L100 50" stroke="var(--border-bright)" strokeWidth="1.5" markerEnd="url(#cd-ah)" />

        <rect x="100" y="35" width="36" height="30" stroke="var(--border-bright)" strokeWidth="1.5" fill="none" />
        <text x="118" y="52" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-jetbrains-mono)" fontSize="5.5" opacity="0.85">FC Layer</text>

        <path d="M136 50 L150 50" stroke="var(--border-bright)" strokeWidth="1.5" markerEnd="url(#cd-ah)" />

        <rect x="150" y="28" width="42" height="44" stroke="var(--sunflower)" strokeWidth="1.5" fill="none" />
        <text x="171" y="46" textAnchor="middle" fill="var(--sunflower)" fontFamily="var(--font-jetbrains-mono)" fontSize="5.5">6 Classes</text>
        <text x="171" y="57" textAnchor="middle" fill="var(--ink)"       fontFamily="var(--font-jetbrains-mono)" fontSize="4.5" opacity="0.6">91% acc.</text>
        <text x="171" y="67" textAnchor="middle" fill="var(--ink)"       fontFamily="var(--font-jetbrains-mono)" fontSize="4"   opacity="0.35">4,200 imgs</text>

        <defs>
          <marker id="cd-ah" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto"><path d="M0,0 L0,4 L6,2 z" fill="var(--border-bright)" /></marker>
        </defs>
      </svg>
    </div>
  );
}

const PROJECTS: Project[] = [
  {
    title: "Kira",
    subtitle: "Autonomous Penetration Testing Agent",
    award: "Winner — CSI MIT-WPU Fussion Agentic AI Sprint 2026",
    github: "https://github.com/Kur00o/Kira",
    description: [
      "Terminal-based agentic pentesting system (observe→think→act loop) driven by a local LLM (Gemma 3 4B via Ollama), autonomously executing full pentest lifecycle: recon, enumeration, exploitation, report generation.",
      "14-tool dispatch system, atomic JSON state management with thread-safe writes, JSONL logging, per-tool timeouts.",
      "Integrations: nmap, gobuster, searchsploit, enum4linux, pymetasploit3.",
    ],
    tags: ["Python", "LLM", "Ollama", "nmap", "Metasploit"],
    shadowClass: "shadow-hard-coral",
    accentColor: "var(--coral)",
    visual: <KiraSVG />,
  },
  {
    title: "ContainerCraft",
    subtitle: "Visual Docker Compose Builder",
    award: "FOSS Hack 2026",
    github: "https://github.com/Kur00o/Container-Craft",
    description: [
      "Open-source drag-and-drop Docker Compose configurator. React + React Flow frontend, Python FastAPI + Pydantic backend.",
      "16+ validation rules, 8 pre-configured service templates. Shipped to production in 30 days, 70%+ pytest coverage, MIT licensed.",
      "16-rule Pydantic validation layer catches invalid compose configs before file generation.",
    ],
    tags: ["React", "React Flow", "FastAPI", "Pydantic"],
    shadowClass: "shadow-hard-blue",
    accentColor: "var(--blue)",
    visual: <ContainerCraftSVG />,
  },
  {
    title: "Cotton Doctor",
    subtitle: "AI Disease Detection",
    award: "Winner — IRIS Hackathon 2024 (BharatGO)",
    github: "",
    description: [
      "ResNet-18 CNN trained on 4,200 annotated cotton leaf images, 91% classification accuracy across 6 disease classes.",
      "Pitched live to BharatGo's CEO at IRIS Hackathon — won 1st place.",
    ],
    tags: ["PyTorch", "ResNet-18", "Computer Vision"],
    shadowClass: "shadow-hard-sunflower",
    accentColor: "var(--sunflower)",
    visual: <CottonDoctorSVG />,
  },
];

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function FeaturedBuilds() {
  return (
    <section id="builds" className="py-24 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e8e6e0] mb-16">
          Featured Builds
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.08}>
            <article
              className={`group relative border border-border-bright flex flex-col h-full card-press ${project.shadowClass}`}
              style={{ background: "var(--surface)" }}
            >
              {project.visual}

              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Award badge */}
                {project.award && (
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-border-bright self-start"
                    style={{ background: "var(--surface2)" }}
                  >
                    <svg width="9" height="9" viewBox="0 0 24 24" aria-hidden="true" style={{ fill: project.accentColor }}>
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                    <span className="font-mono text-xs text-[#c8c5be]">{project.award}</span>
                  </div>
                )}

                {/* Title */}
                <div>
                  <h3 className="font-display font-bold text-2xl text-[#e8e6e0]">{project.title}</h3>
                  <p className="font-body text-sm text-[#a8a59e] mt-0.5">{project.subtitle}</p>
                </div>

                {/* Description */}
                <ul className="flex flex-col gap-2.5 flex-1">
                  {project.description.map((line, j) => (
                    <li key={j} className="font-body text-sm text-[#c8c5be] leading-relaxed flex gap-2.5">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: project.accentColor }}
                        aria-hidden="true"
                      />
                      {line}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag, j) => (
                    <TechTag key={tag} label={tag} rotateIndex={j + i * 3} />
                  ))}
                </div>

                {/* GitHub link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#b8b5ae] hover:text-coral transition-colors duration-150 mt-1 self-start"
                  >
                    View on GitHub
                    <ExternalIcon />
                  </a>
                )}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
