import { LOOP_LINES, LOOP_STAGES, type TermLine } from "@/lib/content";
import Scribble from "./Scribble";

function Line({ line, i }: { line: TermLine; i: number }) {
  return (
    <li className={`tline tone-${line.tone}`} data-i={i} data-stage={line.stage}>
      <span className="tline__p">{line.prefix}</span>
      <span className="tline__t">{line.text}</span>
    </li>
  );
}

/**
 * Signature moment. Desktop: the section pins, OBSERVE → THINK → ACT light up
 * in step with Kira's terminal, then a lime arrow draws back to OBSERVE.
 * Phones: the stages stack, each with its own slice of the log.
 */
export default function Loop() {
  return (
    <section id="loop" className="loop sec-paper" aria-labelledby="loop-title">
      <div className="loop__pin">
        <header className="loop__head">
          <h2 id="loop-title" className="loop__label">
            The loop
          </h2>
          <p className="loop__intro">How Kira works. Also, how I work.</p>
        </header>

        <div className="loop__body">
          <ol className="loop__stages">
            {LOOP_STAGES.map((s, si) => (
              <li key={s.word} className="stage" data-stage={si}>
                <h3 className="stage__word display">{s.word}</h3>
                <div className="stage__capwrap">
                  <p className="stage__cap">{s.caption}</p>
                </div>
                <ul className="stage__log term__lines" aria-label={`Kira log: ${s.word}`}>
                  {LOOP_LINES.map((l, i) => (l.stage === si ? <Line key={i} line={l} i={i} /> : null))}
                </ul>
              </li>
            ))}
          </ol>

          <Scribble name="loopback" className="loop__back scribble--red" draw={false} />

          <div className="term loop__term" aria-label="Kira terminal output">
            <div className="term__chrome" aria-hidden="true">
              <span />
              <span />
              <span />
              <em>kira-agent ~ zsh</em>
            </div>
            <ul className="term__lines">
              {LOOP_LINES.map((l, i) => (
                <Line key={i} line={l} i={i} />
              ))}
              <li className="tline tline--cursor" aria-hidden="true">
                <span className="tline__p" />
                <span className="caret">▋</span>
              </li>
            </ul>
            <p className="term__cycle" aria-hidden="true">
              cycle <span className="term__n">01</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
