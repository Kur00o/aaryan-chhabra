/**
 * Hand-drawn lime marks: the "agent annotations" that mark up the page.
 * Every path uses pathLength=1 so the draw-on animation is just
 * stroke-dashoffset 1 → 0 (see .scribble in globals.css).
 */

type Name = "circle" | "curl" | "swoop" | "underline" | "hash" | "star" | "loopback" | "zigzag";

const SHAPES: Record<Name, { viewBox: string; paths: string[]; stretch?: boolean }> = {
  circle: {
    viewBox: "0 0 400 140",
    stretch: true,
    paths: [
      "M70 26 C150 0 334 6 380 52 C412 90 330 130 200 133 C80 136 10 110 14 74 C18 38 96 16 176 12 C236 9 296 15 336 30",
    ],
  },
  curl: {
    viewBox: "0 0 220 210",
    paths: [
      "M12 34 C58 4 124 8 132 54 C140 100 72 114 70 78 C68 42 132 38 162 86 C182 118 188 150 182 186",
      "M150 160 L183 190 L206 150",
    ],
  },
  swoop: {
    viewBox: "0 0 300 210",
    paths: ["M18 34 C150 -4 296 40 252 160", "M214 136 L252 168 L280 124"],
  },
  underline: {
    viewBox: "0 0 400 40",
    stretch: true,
    paths: ["M6 26 C60 8 112 36 172 20 C232 4 282 34 342 18 C364 12 382 16 394 22"],
  },
  hash: {
    viewBox: "0 0 120 120",
    paths: ["M46 10 L34 112", "M86 6 L74 108", "M10 44 L112 36", "M8 82 L108 74"],
  },
  star: {
    viewBox: "0 0 120 120",
    paths: [
      "M60 10 C62 34 66 46 72 50 C82 54 96 54 110 56 C96 60 82 64 76 70 C72 78 72 96 74 112 C66 98 60 86 54 80 C46 76 30 82 14 90 C24 78 34 68 36 60 C36 50 24 38 14 26 C30 32 42 38 50 38 C56 34 58 22 60 10",
    ],
  },
  loopback: {
    viewBox: "0 0 160 420",
    paths: ["M18 392 C124 392 150 320 142 214 C134 108 114 34 34 34", "M66 8 L30 34 L62 62"],
  },
  zigzag: {
    viewBox: "0 0 260 120",
    paths: ["M10 92 C40 20 60 20 76 70 C92 120 112 110 128 60 C144 10 168 16 180 64 C192 100 214 100 248 40", "M222 40 L250 36 L252 66"],
  },
};

export default function Scribble({
  name,
  className = "",
  draw = true,
}: {
  name: Name;
  className?: string;
  /** opt out of the scroll-triggered draw (e.g. when a parent animates it) */
  draw?: boolean;
}) {
  const s = SHAPES[name];
  return (
    <svg
      className={`scribble scribble--${name} ${className}`}
      viewBox={s.viewBox}
      preserveAspectRatio={s.stretch ? "none" : "xMidYMid meet"}
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...(draw ? { "data-draw": "" } : {})}
    >
      {s.paths.map((d, i) => (
        <path key={i} d={d} pathLength={1} vectorEffect={s.stretch ? "non-scaling-stroke" : undefined} />
      ))}
    </svg>
  );
}
