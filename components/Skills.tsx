import { PERSON, SKILLS } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="skills sec-ink" aria-labelledby="skills-title">
      <h2 id="skills-title" className="display skills__title" data-reveal="lines">
        <span className="line">
          <span>Toolbox</span>
        </span>
      </h2>

      <div className="skills__groups">
        {SKILLS.map((g) => (
          <div key={g.category} className="skills__group" data-reveal="fade">
            <h3 className="kicker kicker--lime">{g.category}</h3>
            <ul className="tags tags--lg">
              {g.tags.map((t) => (
                <li key={t} className="tag tag--on-ink">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a href={`${PERSON.github}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="gh">
        <span className="display gh__big">More on GitHub</span>
        <span className="gh__handle">
          github.com/{PERSON.githubHandle} ↗<span className="sr-only"> (opens in a new tab)</span>
        </span>
      </a>
    </section>
  );
}
