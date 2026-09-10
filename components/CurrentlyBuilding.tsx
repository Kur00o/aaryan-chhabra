"use client";

import ScrollReveal from "./ScrollReveal";

interface BuildItem {
  title: string;
  description: string;
  dashed?: boolean;
}

const ITEMS: BuildItem[] = [
  {
    title: "Mentor OS",
    description: "Solving mentor-to-student allocation for colleges.",
  },
  {
    title: "Sage",
    description:
      "Bringing Indian Sign Language (ISL) translation to everyone, while growing the dataset behind it.",
  },
  {
    title: "TODO: [Untitled — name TBD]",
    description: "Mentor-guided project, name not finalized yet.",
    dashed: true,
  },
];

export default function CurrentlyBuilding() {
  return (
    <section id="building" className="py-24 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e8e6e0] mb-4">
          Currently Building
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.06}>
        <p className="font-body text-sm text-[#c8c5be] mb-16">
          In-progress. No live links yet.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ITEMS.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.08}>
            <article
              className="p-6 flex flex-col gap-4 h-full"
              style={{
                background: "var(--surface)",
                border: item.dashed
                  ? "1px dashed var(--border-bright)"
                  : "1px solid var(--border-bright)",
                boxShadow: "6px 6px 0 var(--border)",
              }}
            >
              {/* Status badge */}
              <div className="inline-flex self-start">
                <span
                  className="font-mono text-xs font-medium px-2.5 py-1 text-mint tracking-wider"
                  style={{
                    background: "rgba(0,194,160,0.08)",
                    border: "1px solid rgba(0,194,160,0.25)",
                  }}
                >
                  IN PROGRESS
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#e8e6e0] leading-tight">
                {item.title}
              </h3>

              <p className="font-body text-sm text-[#c8c5be] leading-relaxed flex-1">
                {item.description}
              </p>

              {item.dashed && (
                <p className="font-mono text-xs text-[#c8c5be] italic">
                  further out — name TBD
                </p>
              )}
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
