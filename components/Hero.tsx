import Image from "next/image";
import Scribble from "./Scribble";
import Sticker from "./Sticker";

function KiraGlyph() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className="hcard__glyph">
      <rect width="64" height="64" rx="32" fill="var(--ink)" />
      <path d="M18 24 L28 32 L18 40" stroke="var(--amber)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M32 42 H46" stroke="var(--amber)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero sec-red gridlines" aria-labelledby="hero-title">
      <p className="hero__meta">
        <span>Aaryan Chhabra</span>
        <span>CS undergrad · MIT-WPU, Pune</span>
      </p>

      <h1 id="hero-title" className="hero__title display">
        <span className="line">
          <span>I build</span>
        </span>
        <span className="line">
          <span>
            what{" "}
            <span className="hero__thinks">
              thinks
              <Scribble name="circle" className="hero__circle" draw={false} />
            </span>
          </span>
        </span>
        <span className="line">
          <span>for itself.</span>
        </span>
      </h1>

      <a href="#wins" className="hcard hcard--a" data-depth="0.7" data-rot="4" style={{ ["--rot" as string]: "4deg" }} aria-label="5 podiums since 2024: see the wins">
        <span className="hcard__in">
          <span className="hcard__avatar">
            <Image src="/assets/display-picture.png" alt="" fill sizes="96px" priority />
          </span>
          <strong>aaryan.chhabra</strong>
          <span>5 podiums since 2024</span>
        </span>
      </a>

      <a href="#loop" className="hcard hcard--b" data-depth="1.2" data-rot="-4" style={{ ["--rot" as string]: "-4deg" }} aria-label="Kira, an agent with 14 tools: see how the loop works">
        <span className="hcard__in">
          <KiraGlyph />
          <strong>kira.agent</strong>
          <span>14 tools · 1 loop</span>
        </span>
      </a>

      <Scribble name="curl" className="hero__curl" draw={false} />
      <Scribble name="swoop" className="hero__swoop" draw={false} />

      <Sticker
        id="sticker-hero"
        text="Open to work"
        href="#contact"
        label="Open to work: jump to contact"
        className="hero__sticker"
      />

      <div className="hero__foot">
        <p className="hero__sub">
          Autonomous agents, open-source tools, client sites that ship, and the occasional agentic pentester.
        </p>
      </div>
    </section>
  );
}
