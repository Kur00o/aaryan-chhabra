import { BUILDS, type Build } from "@/lib/content";
import Scribble from "./Scribble";

/* Diagrams: ink line-work on a snow card, red + lime as fills (never lime text on white). */

function Arrow({ d, id }: { d: string; id: string }) {
  return <path d={d} className="dg-line" markerEnd={`url(#${id})`} />;
}
function Head({ id }: { id: string }) {
  return (
    <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="var(--ink)" />
    </marker>
  );
}

function KiraDiagram() {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label="Kira's loop: observe with nmap and gobuster, think with Gemma 3 4B, act with 14 tools, then loop back.">
      <defs><Head id="kh" /></defs>
      <rect x="12" y="52" width="88" height="72" rx="14" className="dg-red" />
      <text x="56" y="84" className="dg-t dg-t--snow">OBSERVE</text>
      <text x="56" y="102" className="dg-s dg-t--snow">nmap · gobuster</text>
      <rect x="116" y="52" width="88" height="72" rx="14" className="dg-ink" />
      <text x="160" y="84" className="dg-t dg-t--lime">THINK</text>
      <text x="160" y="102" className="dg-s dg-t--snow">Gemma 3 4B</text>
      <rect x="220" y="52" width="88" height="72" rx="14" className="dg-lime" />
      <text x="264" y="84" className="dg-t">ACT</text>
      <text x="264" y="102" className="dg-s">14 tools</text>
      <Arrow d="M100 88 H112" id="kh" />
      <Arrow d="M204 88 H216" id="kh" />
      <path d="M264 124 C264 176 56 176 56 130" className="dg-line dg-dash" markerEnd="url(#kh)" />
      <text x="160" y="190" className="dg-s">loop until done → report</text>
    </svg>
  );
}

function ContainerCraftDiagram() {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label="ContainerCraft canvas: nginx on port 80 to api on 8000 to postgres on 5432, checked by 16 validation rules.">
      <defs><Head id="ch" /></defs>
      <rect x="10" y="24" width="300" height="140" rx="18" className="dg-frame" />
      <text x="160" y="16" className="dg-s">docker-compose canvas</text>
      {[
        { x: 26, n: "nginx", p: ":80" },
        { x: 122, n: "api", p: ":8000" },
        { x: 218, n: "postgres", p: ":5432" },
      ].map((b, i) => (
        <g key={b.n}>
          <rect x={b.x} y="56" width="76" height="76" rx="14" className={i === 1 ? "dg-red" : "dg-snow"} />
          <text x={b.x + 38} y="92" className={`dg-t ${i === 1 ? "dg-t--snow" : ""}`}>{b.n}</text>
          <text x={b.x + 38} y="110" className={`dg-s ${i === 1 ? "dg-t--snow" : ""}`}>{b.p}</text>
        </g>
      ))}
      <Arrow d="M102 94 H118" id="ch" />
      <Arrow d="M198 94 H214" id="ch" />
      <rect x="96" y="176" width="128" height="22" rx="11" className="dg-lime" />
      <text x="160" y="191" className="dg-s">16 rules · valid ✓</text>
    </svg>
  );
}

function CottonDiagram() {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label="Cotton Doctor pipeline: 224 by 224 leaf image into ResNet-18, a fully connected layer, then 6 disease classes at 91% accuracy.">
      <defs><Head id="dh" /></defs>
      <rect x="10" y="62" width="58" height="58" rx="12" className="dg-lime" />
      <path d="M26 104 C30 80 48 72 58 74 C56 92 44 104 26 104 Z M26 104 L50 82" className="dg-leaf" />
      <text x="39" y="138" className="dg-s">224×224</text>
      <Arrow d="M68 91 H82" id="dh" />
      <rect x="86" y="50" width="78" height="82" rx="12" className="dg-ink" />
      <text x="125" y="88" className="dg-t dg-t--snow">ResNet</text>
      <text x="125" y="106" className="dg-s dg-t--lime">-18</text>
      <Arrow d="M164 91 H178" id="dh" />
      <rect x="182" y="66" width="44" height="50" rx="10" className="dg-snow" />
      <text x="204" y="95" className="dg-s">FC</text>
      <Arrow d="M226 91 H240" id="dh" />
      <rect x="244" y="44" width="66" height="94" rx="12" className="dg-red" />
      <text x="277" y="80" className="dg-t dg-t--snow">91%</text>
      <text x="277" y="98" className="dg-s dg-t--snow">6 classes</text>
      <text x="277" y="114" className="dg-s dg-t--snow">4,200 imgs</text>
    </svg>
  );
}

const DIAGRAMS: Record<Build["slug"], () => JSX.Element> = {
  kira: KiraDiagram,
  containercraft: ContainerCraftDiagram,
  cotton: CottonDiagram,
};

export default function Builds() {
  return (
    <section id="builds" className="builds sec-red gridlines" aria-labelledby="builds-title">
      <header className="builds__head">
        <h2 id="builds-title" className="display builds__title" data-reveal="lines">
          <span className="line">
            <span>Builds</span>
          </span>
        </h2>
        <p className="builds__lede" data-reveal="fade">
          Three shipped. Two of them won.
          <Scribble name="underline" className="builds__ul" />
        </p>
      </header>

      {BUILDS.map((b, i) => {
        const Diagram = DIAGRAMS[b.slug];
        return (
          <article key={b.slug} className={`build build--${i % 2 ? "flip" : "std"} ${b.title.length <= 6 ? "build--short" : ""}`} aria-labelledby={`b-${b.slug}`}>
            <div className="build__top" data-reveal="fade">
              <span className={`badge ${b.won ? "badge--lime" : "badge--snow"}`}>
                {b.won ? "★ " : ""}
                {b.award}
              </span>
            </div>

            <h3
              id={`b-${b.slug}`}
              className="display build__title"
              data-reveal="lines"
              style={{ ["--len" as string]: b.title.length }}
            >
              <span className="line">
                <span>{b.title}</span>
              </span>
            </h3>
            <p className="build__sub">{b.subtitle}</p>

            <div className="build__grid">
              <div className="build__text" data-reveal="fade">
                <ul className="build__list">
                  {b.description.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <ul className="tags" aria-label="Stack">
                  {b.tags.map((t) => (
                    <li key={t} className="tag tag--on-red">
                      {t}
                    </li>
                  ))}
                </ul>
                {b.github && (
                  <a href={b.github} target="_blank" rel="noopener noreferrer" className="btn-ink">
                    <span className="roll" data-text="Read the code ↗">
                      Read the code ↗
                    </span>
                    <span className="sr-only"> for {b.title} on GitHub (opens in a new tab)</span>
                  </a>
                )}
              </div>
              <figure className="build__fig">
                <div className="build__card" data-reveal="wipe">
                  <Diagram />
                </div>
              </figure>
            </div>
          </article>
        );
      })}
    </section>
  );
}
