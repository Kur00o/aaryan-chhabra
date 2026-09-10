"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import TechTag from "./TechTag";

interface ClientProject {
  name: string;
  url: string;
  urlDisplay: string;
  blurb: string;
  note?: string;
  stack: string[];
  image: string;
  imageAlt: string;
}

const CLIENTS: ClientProject[] = [
  {
    name: "Voyyage",
    url: "https://voyyageinvest.com",
    urlDisplay: "voyyageinvest.com",
    blurb:
      "SEBI-registered quantitative research firm. Designed and shipped a live market ticker, a three-pillar Vector Framework strategy explainer, and tiered pricing with KYC-gated onboarding.",
    note: "Designed and shipped via Lovable.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/assets/client-work/voyyage.png",
    imageAlt: "Voyyage website screenshot",
  },
  {
    name: "Klynn Ceramics",
    url: "https://klynnceramics.com",
    urlDisplay: "klynnceramics.com",
    blurb:
      "D2C handcrafted stoneware and tableware brand. Designed and shipped a product catalog, cart, and an Instagram-fed \u201cin real rooms\u201d gallery.",
    note: "Designed and shipped via Lovable.",
    stack: ["React", "Tailwind CSS", "Instagram API"],
    image: "/assets/client-work/klynn-ceramics.png",
    imageAlt: "Klynn Ceramics website screenshot",
  },
  {
    name: "Qurve Wealth",
    url: "https://qurvewealth.com",
    urlDisplay: "qurvewealth.com",
    blurb:
      "Mutual fund and wealth advisory site. Partner network of 40+ institutions, investment-basket explainer, and FAQ.",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/assets/client-work/qurve-wealth.png",
    imageAlt: "Qurve Wealth website screenshot",
  },
  {
    name: "Insight AI Club",
    url: "https://insightai.club",
    urlDisplay: "insightai.club",
    blurb:
      "MIT-WPU's student AI/Data Science community. Aaryan serves as Advisor. Event calendar, active-projects showcase, and full member directory.",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/assets/client-work/insight-ai-club.png",
    imageAlt: "Insight AI Club website screenshot",
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

export default function ClientWork() {
  return (
    <section id="client-work" className="py-24 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e8e6e0] mb-3">
          Client Work
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.06}>
        <p className="font-body text-base text-[#a8a59e] mb-16">
          Designed and shipped end-to-end for real clients.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CLIENTS.map((client, i) => (
          <ScrollReveal key={client.name} delay={i * 0.08}>
            <article
              className="group border border-border-bright shadow-hard-ink card-press flex flex-col h-full"
              style={{ background: "var(--surface)" }}
            >
              {/* Screenshot */}
              <div className="relative w-full aspect-video border-b border-border overflow-hidden">
                <Image
                  src={client.image}
                  alt={client.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-bold text-2xl text-[#e8e6e0]">
                    {client.name}
                  </h3>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-[#c8c5be] hover:text-coral transition-colors duration-150 mt-1 flex-shrink-0"
                    aria-label={`Visit ${client.name} website`}
                  >
                    {client.urlDisplay}
                    <ExternalIcon />
                  </a>
                </div>

                <p className="font-body text-sm text-[#c8c5be] leading-relaxed flex-1">
                  {client.blurb}
                </p>

                {client.note && (
                  <p className="font-body text-xs text-[#c8c5be] italic">
                    {client.note}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-1">
                  {client.stack.map((tag, j) => (
                    <TechTag key={tag} label={tag} rotateIndex={j + i * 2} />
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
