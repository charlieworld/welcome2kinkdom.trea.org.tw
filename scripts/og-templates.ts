// Writes the HTML templates for the page-specific social images (1200×630) into tmp/og/.
// Screenshot them with any headless browser, e.g.
//   npx playwright screenshot --viewport-size=1200,630 tmp/og/kink-space.html public/og-kink-space.jpg
// Fonts: Noto Serif CJK / Noto Sans CJK (installed locally) with Syne for labels when available.
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

import { CURRENT_YEAR, FIRST_YEAR, countsByCity, isOngoing, spaces } from '../app/data/spaces.ts'
import { eventsByYear, isHighlight, visibleEvents } from '../app/data/chronicle.ts'
import { coreValues, definition, kinkBasics } from '../app/data/kink-basics.ts'

const outDir = path.resolve('tmp/og')

const base = (phase: 'day' | 'night', body: string) => `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><style>
:root{--sky-top:#dfeaf3;--sky-bot:#f4efe6;--ground:#f4efe6;--surface:#fbf8f2;--surface-2:#ece5d8;--ink:#1c2230;--ink-2:#4d5566;--ink-3:#7d8494;--line:rgba(28,34,48,.14);--accent:#b3164f;--accent-ink:#fff;--glow:none}
html[data-phase=night]{--sky-top:#05070f;--sky-bot:#141a33;--ground:#0b0e1a;--surface:#141827;--surface-2:#1d2236;--ink:#ecebf4;--ink-2:#b9b8cc;--ink-3:#8385a0;--line:rgba(236,235,244,.14);--accent:#ff4fa3;--accent-ink:#1a0712;--glow:0 0 28px rgba(255,79,163,.45)}
*{box-sizing:border-box}html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{background:linear-gradient(160deg,var(--sky-top),var(--ground) 55%);color:var(--ink);font-family:"Noto Sans TC","Noto Sans CJK TC","PingFang TC",sans-serif;position:relative}
.serif{font-family:"Noto Serif TC","Noto Serif CJK TC","Songti TC",serif}
.mono{font-family:Syne,"Noto Sans TC","Noto Sans CJK TC",sans-serif;letter-spacing:.18em;text-transform:uppercase}
.frame{position:absolute;inset:0;padding:56px 64px;display:flex;gap:48px;align-items:stretch}
.text{flex:1;display:flex;flex-direction:column;justify-content:space-between;min-width:0}
.eyebrow{display:flex;align-items:center;gap:14px;font-size:18px;color:var(--ink-3)}
.eyebrow i{width:36px;height:2px;background:var(--ink-3)}
h1{margin:18px 0 10px;font-size:76px;line-height:1.1;font-weight:700;letter-spacing:.02em}
.sub{font-size:22px;letter-spacing:.2em;color:var(--accent);font-weight:800}
.lede{margin:22px 0 0;font-size:24px;line-height:1.55;color:var(--ink-2);max-width:22em}
.brand{display:flex;align-items:baseline;gap:12px}
.brand b{font-size:24px}.brand span{font-size:14px;color:var(--ink-3);letter-spacing:.14em}
.stats{display:flex;gap:28px;margin-top:24px}
.stats div{display:flex;flex-direction:column}
.stats dt{font-size:13px;letter-spacing:.14em;color:var(--ink-3)}
.stats dd{margin:0;font-size:40px;font-weight:700;line-height:1.1}
</style></head><body data-phase="${phase}">${body}</body></html>`.replace('<body data-phase', '<body').replace('<html lang="zh-Hant">', `<html lang="zh-Hant" data-phase="${phase}">`)

function kinkSpace(): string {
  const counts = countsByCity()
  const max = Math.max(...counts.map((c) => c.active))
  const active = spaces.filter(isOngoing).length
  const tiles = counts.map((c) => {
    const total = c.active + c.closed
    const level = total === 0 ? 0 : Math.max(1, Math.ceil((c.active / max) * 4))
    return `<div class="tile level-${level}" style="grid-column:${c.col + 1};grid-row:${c.row + 1}"><span class="n">${c.name.zh}</span>${total ? `<span class="c">${c.active}${c.closed ? `<small>(${c.closed})</small>` : ''}</span>` : ''}</div>`
  }).join('')
  return base('day', `<style>
.map{display:grid;grid-template-columns:repeat(3,118px);grid-auto-rows:62px;gap:6px;align-self:center}
.tile{border-radius:12px;background:var(--surface-2);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;padding:7px 10px;opacity:.4}
.tile.level-1,.tile.level-2,.tile.level-3,.tile.level-4{opacity:1}
.tile.level-1{background:color-mix(in srgb,var(--accent) 14%,var(--surface))}
.tile.level-2{background:color-mix(in srgb,var(--accent) 30%,var(--surface))}
.tile.level-3{background:color-mix(in srgb,var(--accent) 50%,var(--surface));color:#fff}
.tile.level-4{background:var(--accent);color:#fff;box-shadow:0 12px 30px -14px var(--accent)}
.n{font-size:13px}.c{font-family:"Noto Serif TC","Noto Serif CJK TC",serif;font-size:24px;font-weight:700;line-height:1}
.c small{font-size:12px;font-weight:500;margin-left:4px;opacity:.85}
</style><div class="frame"><div class="text"><div><div class="eyebrow mono"><i></i>策展 · Curation</div><h1 class="serif">台灣禁羈空間</h1><div class="sub mono">Kink Spaces in Taiwan</div><p class="lede">${FIRST_YEAR} 年到 ${CURRENT_YEAR} 年，台灣各地出現過的禁羈空間：地區分布與成立、結束年份。</p>
<dl class="stats"><div><dt class="mono">收錄空間</dt><dd class="serif">${spaces.length}</dd></div><div><dt class="mono">營運中</dt><dd class="serif">${active}</dd></div><div><dt class="mono">縣市</dt><dd class="serif">${new Set(spaces.map((s) => s.city).filter(Boolean)).size}</dd></div></dl></div>
<div class="brand"><b class="serif">台灣禁羈資訊導航站</b><span class="mono">kink nav</span></div></div><div class="map">${tiles}</div></div>`)
}

function chronicle(): string {
  const years = eventsByYear()
  const shown = visibleEvents()
  const first = shown[0].start.year, last = shown.at(-1)!.start.year
  const byYear = new Map(years.map((g) => [g.year, g.items]))
  const max = Math.max(...years.map((g) => g.items.length))
  const cols: string[] = []
  for (let y = first; y <= last; y++) {
    const items = byYear.get(y) ?? []
    const hi = items.some(isHighlight)
    const h = items.length ? 40 + (items.length / max) * 150 : 6
    cols.push(`<div class="col${items.length ? '' : ' empty'}${hi ? ' hi' : ''}"><i style="height:${h}px"></i><span>${y % 5 === 0 || y === last ? y : ''}</span></div>`)
  }
  return base('night', `<style>
.strip{position:absolute;left:64px;right:64px;bottom:150px;height:220px;display:flex;align-items:flex-end;gap:8px;border-bottom:2px solid var(--line)}
.col{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:10px}
.col i{display:block;width:100%;max-width:26px;border-radius:6px 6px 2px 2px;background:color-mix(in srgb,var(--accent) 45%,var(--surface-2))}
.col.hi i{background:var(--accent);box-shadow:var(--glow)}
.col.empty i{width:2px;background:var(--line)}
.col span{font-size:14px;letter-spacing:.06em;color:var(--ink-3);height:16px}
.rail{position:absolute;left:64px;right:64px;bottom:118px;height:2px;background:linear-gradient(90deg,var(--accent),color-mix(in srgb,var(--accent) 20%,transparent))}
.rail::before,.rail::after{content:"";position:absolute;top:-7px;width:16px;height:16px;border-radius:50%;background:var(--accent);box-shadow:var(--glow)}
.rail::after{right:-2px;background:var(--ground);border:2px solid var(--accent);width:12px;height:12px;top:-6px}
.text{position:absolute;left:64px;top:52px;right:64px}
.brand{position:absolute;left:64px;bottom:52px}
h1{font-size:64px;margin:14px 0 8px}
</style><div class="text"><div class="eyebrow mono"><i></i>年表 · Chronicle</div><h1 class="serif">台灣BDSM社群大紀事及年表</h1><div class="sub mono">${first} – ${last} · ${shown.length} 則事件</div></div>
<div class="strip">${cols.join('')}</div><div class="rail"></div>
<div class="brand"><b class="serif">台灣禁羈資訊導航站</b><span class="mono">kink nav</span></div>`)
}

function basics(): string {
  const content = kinkBasics.zh
  const def = definition('zh')
  const values = coreValues('zh')
  const acronyms = content.chapters.flatMap((c) => c.sections).flatMap((s) => (s.body.kind === 'acronyms' ? s.body.items : []))
  return base('day', `<style>
.side{width:440px;display:flex;flex-direction:column;justify-content:center;gap:12px;align-self:center}
.values{display:flex;flex-direction:column;gap:8px}
.values div{display:grid;grid-template-columns:34px 1fr;align-items:center;gap:10px;padding:10px 14px;border-radius:12px;background:var(--surface);border:1px solid var(--line)}
.values .n{font-size:22px;font-weight:800;color:var(--accent);line-height:1}
.values b{font-family:"Noto Serif TC","Noto Serif CJK TC",serif;font-size:20px}
.acro{display:flex;gap:6px;flex-wrap:wrap}
.acro span{padding:5px 12px;border-radius:999px;background:var(--surface-2);font-size:15px;font-weight:800;letter-spacing:.04em;text-transform:none}
.def{margin:20px 0 0;padding:16px 18px;border-left:4px solid var(--accent);background:var(--surface);border-radius:0 14px 14px 0;font-size:20px;line-height:1.6;color:var(--ink-2);max-width:26em}
.def b{color:var(--ink)}
</style><div class="frame"><div class="text"><div><div class="eyebrow mono"><i></i>基礎知識 · Basics</div><h1 class="serif">認識禁羈</h1><div class="sub mono">Understanding Kink</div>
<p class="def"><b>${def.term}</b>${def.text}</p></div>
<div class="brand"><b class="serif">台灣禁羈資訊導航站</b><span class="mono">kink nav</span></div></div>
<div class="side"><div class="values">${values.map((v, i) => `<div><span class="n mono">${i + 1}</span><b>${v}</b></div>`).join('')}</div>
<div class="acro">${acronyms.map((a) => `<span class="mono">${a.short}</span>`).join('')}</div></div></div>`)
}

await mkdir(outDir, { recursive: true })
await writeFile(path.join(outDir, 'kink-basics.html'), basics())
await writeFile(path.join(outDir, 'kink-space.html'), kinkSpace())
await writeFile(path.join(outDir, 'chronicle.html'), chronicle())
console.log(`OG templates written to ${outDir}`)
