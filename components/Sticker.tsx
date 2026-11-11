/** Spinning lime badge with text on a circular path. */
export default function Sticker({
  text,
  href,
  label,
  className = "",
  id,
}: {
  text: string;
  href: string;
  label: string;
  className?: string;
  id: string;
}) {
  const ring = `${text} ✺ ${text} ✺ `;
  return (
    <a href={href} className={`sticker ${className}`} aria-label={label}>
      <svg viewBox="0 0 200 200" aria-hidden="true" focusable="false">
        <circle cx="100" cy="100" r="100" className="sticker__disc" />
        <g className="sticker__ring">
          <defs>
            <path id={id} d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
          </defs>
          <text className="sticker__text">
            <textPath href={`#${id}`} textLength="462" lengthAdjust="spacing">
              {ring}
            </textPath>
          </text>
        </g>
        <path
          className="sticker__arrow"
          d="M70 122 C78 96 98 90 104 104 C110 118 92 124 92 110 C92 92 116 80 132 74 M116 70 L134 73 L128 90"
        />
      </svg>
    </a>
  );
}
