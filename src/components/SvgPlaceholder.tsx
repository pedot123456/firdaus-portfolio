/**
 * SvgPlaceholder — two-layer SVG background for project cards without screenshots.
 *
 * Layer 1: dot-grid pattern tinted to accentColor
 * Layer 2: diagonal-rule pattern at lower opacity
 * Foreground: large italic index number (very low opacity)
 */

interface Props {
  index: number
  accentColor: string
  label?: string
}

export default function SvgPlaceholder({ index, accentColor, label }: Props) {
  // Unique IDs per card to avoid SVG pattern collisions when multiple cards are on the page
  const dotId  = `dots-${index}`
  const diagId = `diag-${index}`

  return (
    <div
      className="project-placeholder"
      role="img"
      aria-label={label ?? `Project ${index} placeholder`}
      style={{ background: `${accentColor}0a` }}  /* very light tint */
    >
      {/* Layer 1 — dot grid */}
      <svg
        className="project-placeholder__layer"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        aria-hidden
      >
        <defs>
          <pattern id={dotId} x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="1.5" fill={accentColor} fillOpacity="0.18" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${dotId})`} />
      </svg>

      {/* Layer 2 — diagonal rule */}
      <svg
        className="project-placeholder__layer"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        aria-hidden
      >
        <defs>
          <pattern id={diagId} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <line
              x1="-2" y1="26" x2="26" y2="-2"
              stroke={accentColor}
              strokeOpacity="0.07"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${diagId})`} />
      </svg>

      {/* Large italic index number */}
      <span
        className="project-placeholder__index"
        style={{ color: accentColor }}
        aria-hidden
      >
        {String(index).padStart(2, '0')}
      </span>
    </div>
  )
}
