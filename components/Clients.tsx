import Image from "next/image";
import { CLIENTS } from "@/lib/content";
import Scribble from "./Scribble";

export default function Clients() {
  return (
    <section id="work" className="work sec-ink" aria-labelledby="work-title">
      <div className="work__pin">
        <header className="work__head">
          <h2 id="work-title" className="display work__title" data-reveal="lines">
            <span className="line">
              <span>Client work</span>
            </span>
          </h2>
          <p className="work__lede" data-reveal="fade">
            Designed and shipped end to end, for people who paid for it.
          </p>
          <Scribble name="zigzag" className="work__zig" />
        </header>

        <div className="work__viewport">
          <ol className="work__track">
            {CLIENTS.map((c, i) => (
              <li key={c.name} className="ccard" style={{ ["--tilt" as string]: i % 2 ? "1.5deg" : "-1.5deg" }}>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="ccard__shot">
                  <Image
                    src={c.image}
                    alt={`${c.name} homepage`}
                    fill
                    sizes="(max-width: 899px) 82vw, 40vw"
                    className="ccard__img"
                  />
                  <span className="ccard__url">
                    {c.urlDisplay} ↗<span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
                <h3 className="display ccard__name">{c.name}</h3>
                <p className="ccard__blurb">{c.blurb}</p>
                {"note" in c && c.note ? <p className="ccard__note">{c.note}</p> : null}
                <ul className="tags" aria-label="Stack">
                  {c.stack.map((t) => (
                    <li key={t} className="tag tag--on-ink">
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="ccard ccard--next">
              <a href="#contact" className="ccard__nextlink">
                <span className="display">Yours next?</span>
                <span className="ccard__nextsub">Tell me what it should do. →</span>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
