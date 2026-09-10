"use client";

import ScrollReveal from "./ScrollReveal";

interface Achievement {
  title: string;
  subtitle?: string;
  accent: string;
  rotate: number;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Winner",
    subtitle: "CSI MIT-WPU Fussion Agentic AI Sprint (2026)",
    accent: "var(--coral)",
    rotate: -2,
  },
  {
    title: "Winner",
    subtitle: "IRIS Hackathon 2024 (BharatGO) — led a first-year team against senior-level competition",
    accent: "var(--sunflower)",
    rotate: 2,
  },
  {
    title: "Runner-up",
    subtitle: "MRIIRS Scientific Research Poster Presentation (2026)",
    accent: "var(--coral)",
    rotate: -1.5,
  },
  {
    title: "Runner-up",
    subtitle: "State Level Game Designing Competition (2024)",
    accent: "var(--sunflower)",
    rotate: 1.5,
  },
  {
    title: "Winner",
    subtitle: "RIDExSTARTUPEXPO MIT-WPU (2025) — Top 10 Best Venture Ideas",
    accent: "var(--blue)",
    rotate: 3,
  },
];

function StarIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e8e6e0] mb-16">
          Achievements
        </h2>
      </ScrollReveal>

      <div className="flex flex-wrap gap-8 justify-start">
        {ACHIEVEMENTS.map((a, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div
              className="p-5 max-w-xs flex flex-col gap-3"
              style={{
                background: "var(--surface)",
                border: `1px solid ${a.accent}`,
                transform: `rotate(${a.rotate}deg)`,
                boxShadow: `4px 4px 0 ${a.accent}`,
              }}
            >
              <div className="flex items-center gap-2">
                <StarIcon color={a.accent} />
                <span
                  className="font-display font-bold text-lg"
                  style={{ color: a.accent }}
                >
                  {a.title}
                </span>
              </div>
              {a.subtitle && (
                <p className="font-body text-sm text-[#c8c5be] leading-snug">
                  {a.subtitle}
                </p>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
