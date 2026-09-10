/**
 * TechTag — mono chip with a slight rotation, dark-theme aware.
 * Uses CSS variables directly so it never needs bg-paper or text-[#e8e6e0] classes.
 */

interface TechTagProps {
  label: string;
  rotateIndex?: number;
}

const ROTATIONS = [-2, 1.5, -1, 2, -1.5, 0.5, 2.5, -0.5, 1, -2];

export default function TechTag({ label, rotateIndex = 0 }: TechTagProps) {
  const deg = ROTATIONS[rotateIndex % ROTATIONS.length];
  return (
    <span
      className="inline-block font-mono text-xs font-medium px-2.5 py-1"
      style={{
        transform: `rotate(${deg}deg)`,
        background: "var(--surface2)",
        border: "1px solid var(--border-bright)",
        color: "var(--ink)",
        opacity: 0.75,
      }}
    >
      {label}
    </span>
  );
}
