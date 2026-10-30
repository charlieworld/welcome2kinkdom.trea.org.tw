import type { Handle } from 'remix/ui'

// Icons from Lucide v0.544.0 (https://lucide.dev), ISC License.

interface PathShape { tag: 'path'; d: string }
interface RectShape { tag: 'rect'; x: string; y: string; width: string; height: string; rx: string }
type IconShape = PathShape | RectShape

export const ICONS = {
  calendar: [
    { tag: "path", d: "M8 2v4" },
    { tag: "path", d: "M16 2v4" },
    { tag: "rect", width: "18", height: "18", x: "3", y: "4", rx: "2" },
    { tag: "path", d: "M3 10h18" },
  ],
  'file-text': [
    { tag: "path", d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" },
    { tag: "path", d: "M14 2v4a2 2 0 0 0 2 2h4" },
    { tag: "path", d: "M10 9H8" },
    { tag: "path", d: "M16 13H8" },
    { tag: "path", d: "M16 17H8" },
  ],
  mic: [
    { tag: "path", d: "M12 19v3" },
    { tag: "path", d: "M19 10v2a7 7 0 0 1-14 0v-2" },
    { tag: "rect", x: "9", y: "2", width: "6", height: "13", rx: "3" },
  ],
  'book-open': [
    { tag: "path", d: "M12 7v14" },
    { tag: "path", d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" },
  ],
  'message-square': [
    { tag: "path", d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" },
  ],
  menu: [
    { tag: "path", d: "M4 5h16" },
    { tag: "path", d: "M4 12h16" },
    { tag: "path", d: "M4 19h16" },
  ],
  'chevron-down': [
    { tag: "path", d: "m6 9 6 6 6-6" },
  ],
  'chevron-right': [
    { tag: "path", d: "m9 18 6-6-6-6" },
  ],
  'arrow-up-right': [
    { tag: "path", d: "M7 7h10v10" },
    { tag: "path", d: "M7 17 17 7" },
  ],
  'arrow-right': [
    { tag: "path", d: "M5 12h14" },
    { tag: "path", d: "m12 5 7 7-7 7" },
  ],
  'arrow-left': [
    { tag: "path", d: "m12 19-7-7 7-7" },
    { tag: "path", d: "M19 12H5" },
  ],
  x: [
    { tag: "path", d: "M18 6 6 18" },
    { tag: "path", d: "m6 6 12 12" },
  ],
  sparkle: [
    { tag: "path", d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" },
  ],
} as const satisfies Record<string, readonly IconShape[]>

export type IconName = keyof typeof ICONS

interface IconProps {
  name: IconName
  size?: number
  strokeWidth?: number
  className?: string
}

/** Lucide icon rendered as an inline SVG; stroke follows `currentColor`. */
export function Icon(handle: Handle<IconProps>) {
  return () => {
    const { name, size = 20, strokeWidth = 1.75, className } = handle.props
    const shapes: readonly IconShape[] = ICONS[name]
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className={className}>
        {shapes.map((shape, i) => shape.tag === 'path'
          ? <path d={shape.d} key={i} />
          : <rect x={shape.x} y={shape.y} width={shape.width} height={shape.height} rx={shape.rx} key={i} />)}
      </svg>
    )
  }
}
