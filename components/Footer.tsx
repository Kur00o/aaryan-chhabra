import { PERSON } from "@/lib/content";
import Sticker from "./Sticker";

export default function Footer() {
  return (
    <footer id="contact" className="foot sec-red gridlines" aria-labelledby="contact-title">
      <h2 id="contact-title" className="display foot__title" data-reveal="lines">
        <span className="line">
          <span>Say hi.</span>
        </span>
      </h2>

      <a href={`mailto:${PERSON.email}`} className="foot__mail">
        {PERSON.email}
      </a>

      <ul className="foot__links">
        <li>
          <a href={PERSON.phoneHref} className="pill pill--lg">
            {PERSON.phone}
          </a>
        </li>
        <li>
          <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="pill pill--lg">
            GitHub ↗<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" className="pill pill--lg">
            LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li className="foot__status">
          <span className="dot" aria-hidden="true" /> Open to work
        </li>
      </ul>

      <div className="foot__bar">
        <p>
          © 2026 {PERSON.name}. Built in {PERSON.city}.
        </p>
        <p>Observe → think → act → repeat.</p>
        <Sticker id="sticker-top" text="Back to top" href="#top" label="Back to top" className="foot__sticker" />
      </div>
    </footer>
  );
}
