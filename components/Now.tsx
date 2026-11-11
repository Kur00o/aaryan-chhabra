import { BUILDING, EXPERIENCE } from "@/lib/content";
import Scribble from "./Scribble";

export default function Now() {
  return (
    <section id="now" className="now sec-paper" aria-labelledby="now-title">
      <div className="now__side">
        <h2 id="now-title" className="display now__title">
          <Scribble name="hash" className="now__hash scribble--red" />
          <span className="now__word">Now</span>
        </h2>
        <p className="now__lede">Where the hours go this year.</p>
      </div>

      <div className="now__main">
        <article className="exp" aria-labelledby="exp-title" data-reveal="fade">
          <p className="kicker">Experience</p>
          <h3 id="exp-title" className="display exp__title">
            {EXPERIENCE.title}
          </h3>
          <p className="exp__meta">
            <span>{EXPERIENCE.org}</span>
            <span>
              {EXPERIENCE.role} · {EXPERIENCE.dates} · {EXPERIENCE.place}
            </span>
          </p>
          <ul className="exp__list">
            {EXPERIENCE.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <ul className="tags" aria-label="Stack">
            {EXPERIENCE.tech.map((t) => (
              <li key={t} className="tag tag--on-paper">
                {t}
              </li>
            ))}
          </ul>
        </article>

        <div className="wip">
          <p className="kicker">Currently building</p>
          <ul className="wip__list" data-reveal="rows">
            {BUILDING.map((b) => (
              <li key={b.title} className={`wip__row ${b.tbd ? "wip__row--tbd" : ""}`}>
                <h3 className="display wip__name">{b.title}</h3>
                <p className="wip__desc">{b.description}</p>
                <span className="stamp">{b.tbd ? "Name TBD" : "In progress"}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
