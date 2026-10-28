// Regenerates the `events` array in app/data/chronicle.ts from a CSV export of the sheet.
// Usage: node --import remix/node-tsx scripts/chronicle-from-csv.ts <path-to-chronicle.csv>
// Everything before and after the `events` array in chronicle.ts is left untouched.
import * as fs from 'node:fs'
import * as path from 'node:path'

const csvPath = process.argv[2]
if (!csvPath) {
  console.error('Usage: node --import remix/node-tsx scripts/chronicle-from-csv.ts <chronicle.csv>')
  process.exit(1)
}

const target = path.join(import.meta.dirname, '..', 'app', 'data', 'chronicle.ts')

interface DateParts {
  year: number
  month?: number
  day?: number
}

interface Row {
  importance: number
  start: DateParts
  end?: DateParts
  types: string[]
  summary: string
  detail?: string
  org?: string
  place?: string
  refs: { label?: string; url: string }[]
  note?: string
}

/** Minimal RFC 4180 parser: quoted fields may contain commas, newlines and doubled quotes. */
function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let quoted = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i++
        } else quoted = false
      } else field += c
    } else if (c === '"') quoted = true
    else if (c === ',') {
      row.push(field)
      field = ''
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      row.push(field)
      field = ''
      if (row.some((f) => f !== '')) rows.push(row)
      row = []
    } else field += c
  }
  row.push(field)
  if (row.some((f) => f !== '')) rows.push(row)
  return rows
}

function num(value: string): number | undefined {
  const n = Number(value.trim())
  return value.trim() !== '' && Number.isFinite(n) ? n : undefined
}

function date(y: string, m: string, d: string): DateParts | undefined {
  const year = num(y)
  if (year === undefined) return undefined
  const out: DateParts = { year }
  const month = num(m)
  if (month !== undefined) out.month = month
  const day = num(d)
  if (day !== undefined) out.day = day
  return out
}

/** "1. label https://url" lines, bare URL lines, or a label line followed by URL lines. */
function parseRefs(cell: string): { label?: string; url: string }[] {
  const refs: { label?: string; url: string }[] = []
  let pendingLabel: string | undefined
  for (const rawLine of cell.split(/\r?\n/)) {
    const numbered = /^\s*\d+\.\s+/.test(rawLine)
    const line = rawLine.replace(/^\s*\d+\.\s+/, '').trim()
    if (!line) continue
    if (numbered) pendingLabel = undefined
    const match = line.match(/https?:\/\/\S+/)
    if (!match) {
      pendingLabel = line.replace(/[：:]\s*$/, '').trim()
      continue
    }
    const inlineLabel = line.slice(0, match.index).replace(/[：:]\s*$/, '').trim()
    const label = inlineLabel || pendingLabel
    refs.push(label ? { label, url: match[0] } : { url: match[0] })
  }
  return refs
}

/**
 * Obvious sheet mistakes, corrected here instead of in the sheet. Each entry matches a row by summary and
 * says what the sheet holds; the override is skipped (with a warning) once the sheet no longer has the bad value.
 */
const overrides: { summary: string; comment: string; applies: (r: Row) => boolean; fix: (r: Row) => void }[] = [
  {
    summary: '2005 夜色繩艷',
    comment: '試算表結束欄位為 年份=4、月份=23（欄位錯位），解讀為 2005.4.23',
    applies: (r) => r.end?.year === 4 && r.end.month === 23,
    fix: (r) => {
      r.end = { year: r.start.year, month: 4, day: 23 }
    },
  },
  {
    summary: '2006 ˙冬˙夜色繩艷',
    comment: '試算表原值 2026，疑為筆誤',
    applies: (r) => r.end?.year === 2026 && r.start.year === 2006,
    fix: (r) => {
      r.end!.year = 2006
    },
  },
  {
    summary: '《電腦網路內容分級處理辦法》正式上路',
    comment: '試算表年份為 2025（夾在 2005 的列之間），該辦法實際於 2005-10-25 上路，修為 2005',
    applies: (r) => r.start.year === 2025,
    fix: (r) => {
      r.start.year = 2005
    },
  },
]

const q = (s: string) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, '\\n')}'`
const d = (p: DateParts) =>
  `{ ${[`year: ${p.year}`, p.month !== undefined && `month: ${p.month}`, p.day !== undefined && `day: ${p.day}`].filter(Boolean).join(', ')} }`

function render(r: Row): string {
  const parts = [`importance: ${r.importance}`, `start: ${d(r.start)}`]
  if (r.end) parts.push(`end: ${d(r.end)}`)
  parts.push(`types: [${r.types.map(q).join(', ')}]`, `summary: ${q(r.summary)}`)
  if (r.detail) parts.push(`detail: ${q(r.detail)}`)
  if (r.org) parts.push(`org: ${q(r.org)}`)
  if (r.place) parts.push(`place: ${q(r.place)}`)
  parts.push(`refs: [${r.refs.map((f) => `{ ${f.label ? `label: ${q(f.label)}, ` : ''}url: ${q(f.url)} }`).join(', ')}]`)
  if (r.note) parts.push(`note: ${q(r.note)}`)
  return `{ ${parts.join(', ')} }`
}

const table = parseCsv(fs.readFileSync(csvPath, 'utf8')).slice(2) // two header rows
const lines: string[] = []
const used = new Set<string>()
let count = 0
for (const c of table) {
  const importance = num(c[0])
  const start = date(c[1], c[2], c[3])
  const summary = (c[8] ?? '').trim()
  if (importance === undefined || !start || !summary) {
    console.warn(`skipped row without importance/year/summary: ${JSON.stringify(c.slice(0, 9))}`)
    continue
  }
  const row: Row = {
    importance,
    start,
    end: date(c[4], c[5], c[6]),
    types: (c[7] ?? '').split(',').map((t) => t.trim()).filter(Boolean),
    summary,
    detail: c[9]?.trim() || undefined,
    org: c[10]?.trim() || undefined,
    place: c[11]?.trim() || undefined,
    refs: parseRefs(c[12] ?? ''),
    note: c[13]?.trim() || undefined,
  }
  if (!row.end) delete row.end
  const override = overrides.find((o) => o.summary === row.summary && o.applies(row))
  if (override) {
    lines.push(`  // ${override.comment}`)
    override.fix(row)
    used.add(override.summary)
  }
  if (row.end && (row.end.year < row.start.year || row.end.year > row.start.year + 1)) {
    console.warn(`suspicious end date: ${row.summary} ${JSON.stringify(row.start)} -> ${JSON.stringify(row.end)}`)
  }
  lines.push(`  ${render(row)},`)
  count++
}
for (const o of overrides) if (!used.has(o.summary)) console.warn(`override no longer needed (sheet fixed?): ${o.summary}`)

const source = fs.readFileSync(target, 'utf8')
const opener = 'export const events: readonly ChronicleEvent[] = [\n'
const from = source.indexOf(opener)
const to = source.indexOf('\n]\n', from)
if (from < 0 || to < 0) throw new Error('could not locate the events array in chronicle.ts')
fs.writeFileSync(target, source.slice(0, from + opener.length) + lines.join('\n') + source.slice(to))
console.log(`wrote ${count} events to ${path.relative(process.cwd(), target)}`)
