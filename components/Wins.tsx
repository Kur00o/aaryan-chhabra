import { WINS } from "@/lib/content";
import Scribble from "./Scribble";

export default function Wins() {
  const firsts = WINS.filter((w) => w.result === "Winner").length;
  return (
    <section id="wins" className="wins sec-lime" aria-labelledby="wins-title">
      <header className="wins__head">
        <h2 id="wins-title" className="display wins__title" data-reveal="lines">
          <span className="line">
            <span>Wins</span>
          </span>
        </h2>
        <p className="wins__count">
          <span className="wins__num">{WINS.length}</span>
          <span>
            podiums since 2024.
            <br />
            {firsts} of them first place.
          </span>
          <Scribble name="star" className="wins__star scribble--red" />
        </p>
      </header>

      <ol className="board" data-reveal="rows">
        {WINS.map((w) => (
          <li key={w.title} className="board__row">
            <span className="board__year">{w.year}</span>
            <span className={`board__pill ${w.result === "Winner" ? "is-win" : ""}`}>{w.result}</span>
            <span className="board__title">
              {w.title}
              {w.detail && <span className="board__detail"> — {w.detail}</span>}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
