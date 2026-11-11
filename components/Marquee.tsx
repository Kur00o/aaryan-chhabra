const WORDS = ["Autonomous agents", "Open-source tools", "Client sites", "Hackathon wins", "Local LLMs", "iOS apps"];

export default function Marquee() {
  const row = (
    <>
      {WORDS.map((w) => (
        <span key={w} className="marquee__item">
          {w}
          <span className="marquee__star" aria-hidden="true">
            ✺
          </span>
        </span>
      ))}
    </>
  );
  return (
    <div className="marquee-wrap">
    <div className="marquee">
      <div className="marquee__track display" aria-hidden="true">
        <div className="marquee__half">{row}</div>
        <div className="marquee__half">{row}</div>
      </div>
      <p className="sr-only">{WORDS.join(", ")}</p>
    </div>
    </div>
  );
}
