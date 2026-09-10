"use client";

import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e8e6e0] mb-16">
          Experience
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <article
          className="border border-border-bright p-8 md:p-10 shadow-hard-coral"
          style={{ background: "var(--surface)" }}
        >
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-border">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-[#e8e6e0] leading-tight">
                iOS Student Developer Program
              </h3>
              <p className="font-body text-base text-[#b8b5ae] mt-1">
                MIT-WPU — powered by Apple &amp; Infosys
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1.5 flex-shrink-0">
              <span className="font-mono text-xs font-medium text-coral tracking-wider uppercase">
                Student Developer
              </span>
              <span className="font-body text-xs text-[#c8c5be]">
                July 2025 – Present
              </span>
              <span className="font-body text-xs text-[#c8c5be]">
                Pune, India
              </span>
            </div>
          </div>

          {/* Bullets */}
          <ul className="flex flex-col gap-4">
            {[
              "Working in a 4-person team building a gamified Indian culture and mythology learning app for children aged 5–10 — a daily investigation-based content engine, a map-based heritage exploration mode, and a family companion layer.",
              "Contributed to a structured product strategy process: user research synthesis, competitive analysis, and market sizing to validate features before development.",
            ].map((bullet, i) => (
              <li
                key={i}
                className="font-body text-sm md:text-base text-[#b8b5ae] leading-relaxed flex gap-3"
              >
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-coral"
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>

          {/* Tech used */}
          <div className="mt-6 pt-5 border-t border-border flex items-center gap-2.5 flex-wrap">
            {["RealityKit", "SpriteKit", "Swift", "iOS"].map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-2.5 py-1 text-[#c8c5be] border border-border-bright"
                style={{ background: "var(--surface2)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
}
