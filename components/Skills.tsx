"use client";

import ScrollReveal from "./ScrollReveal";
import TechTag from "./TechTag";

const SKILL_GROUPS = [
  {
    category: "Languages",
    tags: ["Python", "C++", "Swift", "SQL (MySQL)"],
  },
  {
    category: "Frameworks / Libraries",
    tags: [
      "FastAPI",
      "React",
      "React Flow",
      "Pydantic",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Jinja2",
      "RealityKit",
      "SpriteKit",
    ],
  },
  {
    category: "Tools / Platforms",
    tags: ["Git", "GitHub", "Docker", "Ollama", "Linux"],
  },
];

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Skills() {
  let tagOffset = 0;
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e8e6e0] mb-16">
          Skills
        </h2>
      </ScrollReveal>

      <div className="flex flex-col gap-12">
        {SKILL_GROUPS.map((group, gi) => {
          const groupOffset = tagOffset;
          tagOffset += group.tags.length;
          return (
            <ScrollReveal key={group.category} delay={gi * 0.1}>
              <div className="flex flex-col gap-4">
                <h3 className="font-mono text-xs font-medium text-[#c8c5be] uppercase tracking-[0.2em]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.tags.map((tag, ti) => (
                    <TechTag key={tag} label={tag} rotateIndex={groupOffset + ti} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* GitHub CTA */}
      <ScrollReveal delay={0.35}>
        <div className="mt-20">
          <a
            href="https://github.com/Kur00o?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-6 border border-border-bright p-8 md:p-10 shadow-hard-coral hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none transition-all duration-150"
            style={{ background: "var(--surface)" }}
          >
            <div className="flex flex-col gap-1.5">
              <span className="font-display font-bold text-3xl md:text-4xl text-[#e8e6e0]">
                More on GitHub
              </span>
              <span className="font-mono text-sm text-[#c8c5be]">
                github.com/Kur00o
              </span>
            </div>
            <div className="text-[#c8c5be] group-hover:text-coral transition-colors duration-150 flex-shrink-0">
              <ExternalIcon />
            </div>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
