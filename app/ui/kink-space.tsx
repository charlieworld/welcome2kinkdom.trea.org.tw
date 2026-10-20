import type { Handle } from 'remix/ui'

import { kinkdomHref } from '../assets.ts'
import { Document } from '../actions/document.tsx'
import type { Lang } from '../i18n/index.ts'
import { pick, t } from '../i18n/index.ts'
import {
  CURRENT_YEAR, FIRST_YEAR, SOURCE, activePerYear, cityName, countsByCity, isOngoing, kindNames,
  spaces, spacesByCity, timelineOrder, type KinkSpace,
} from '../data/spaces.ts'
import { MenuSheet, SiteFooter, TopBar, otherLang, pageHrefs } from './pages.tsx'

const OG_IMAGE = { src: '/og-kink-space.jpg', alt: { zh: '台灣禁羈空間：縣市分布方塊圖與營運中空間數', en: 'Kink Spaces in Taiwan: county map and counts' } }

export function KinkSpacePage(handle: Handle<{ lang: Lang }>) {
  return () => {
    const { lang } = handle.props
    const dict = t(lang)
    const k = dict.kinkSpace
    const active = spaces.filter(isOngoing).length
    const closed = spaces.length - active
    const cityCount = new Set(spaces.map((s) => s.city).filter(Boolean)).size
    return (
      <Document lang={lang} title={`${k.title} · ${dict.siteName}`} description={k.lede} urlPath={pageHrefs.kinkSpace[lang]} altPath={pageHrefs.kinkSpace[otherLang(lang)]} ogImage={OG_IMAGE}>
        <TopBar lang={lang} page="kinkSpace" />
        <main className="wrap content-page kink-space">
          <section className="hero">
            <div className="eyebrow"><i></i><span>{k.eyebrow}</span></div>
            <h1>{k.title}<small>{k.sub}</small></h1>
            <p className="lede">{k.lede}</p>
          </section>

          <dl className="stats">
            <div><dt>{k.stats.total}</dt><dd>{spaces.length}</dd></div>
            <div><dt>{k.stats.active}</dt><dd>{active}</dd></div>
            <div><dt>{k.stats.closed}</dt><dd>{closed}</dd></div>
            <div><dt>{k.stats.cities}</dt><dd>{cityCount}</dd></div>
          </dl>

          <section className="section" id="map">
            <h2><em>{k.mapHeading}</em></h2>
            <p className="sub">{k.mapSub}</p>
            <Cartogram lang={lang} />
          </section>

          <section className="section" id="per-year">
            <h2><em>{k.perYearHeading}</em></h2>
            <p className="sub">{k.perYearSub}</p>
            <PerYearChart lang={lang} />
          </section>

          <section className="section" id="timeline">
            <h2><em>{k.timelineHeading}</em></h2>
            <p className="sub">{k.timelineSub}</p>
            <div className="filter" role="group" aria-label={k.timelineHeading}>
              <button type="button" className="chip chip-active" data-filter="all" aria-pressed="true">{k.filterAll}</button>
              <button type="button" className="chip" data-filter="active" aria-pressed="false">{k.filterActive} · {active}</button>
              <button type="button" className="chip" data-filter="closed" aria-pressed="false">{k.filterClosed} · {closed}</button>
            </div>
            <Timeline lang={lang} />
          </section>

          <section className="section" id="list">
            <h2><em>{k.listHeading}</em></h2>
            <p className="sub">{k.listSub}</p>
            {spacesByCity(lang).map((group) => (
              <div className="city-group" key={group.key ?? 'unknown'}>
                <h3>{group.name}<span>{group.items.length}</span></h3>
                <div className="rows">{group.items.map((space) => <SpaceRow space={space} lang={lang} key={`${space.name}-${space.start}`} />)}</div>
              </div>
            ))}
          </section>

          <p className="source"><b>{k.source}</b>{k.sourceNote} <a href={SOURCE.url} target="_blank" rel="noopener noreferrer">{SOURCE.title}（{SOURCE.author}）↗</a></p>
          <a className="back-link" href={pageHrefs.home[lang]}>{dict.backToLinks}</a>
          <SiteFooter lang={lang} />
        </main>
        <MenuSheet lang={lang} page="kinkSpace" />
        <script type="module" src={kinkdomHref}></script>
      </Document>
    )
  }
}

function Cartogram(handle: Handle<{ lang: Lang }>) {
  return () => {
    const { lang } = handle.props
    const counts = countsByCity()
    const max = Math.max(...counts.map((c) => c.active))
    return (
      <div className="cartogram" role="img" aria-label={counts.filter((c) => c.active + c.closed).map((c) => `${pick(c.name, lang)} ${c.active}/${c.closed}`).join(', ')}>
        {counts.map((city) => {
          const total = city.active + city.closed
          const level = total === 0 ? 0 : Math.max(1, Math.ceil((city.active / max) * 4))
          return (
            <div className={`tile level-${level}`} style={{ gridColumn: String(city.col + 1), gridRow: String(city.row + 1) }} key={city.key}>
              <span className="tile-name">{pick(city.name, lang)}</span>
              {total > 0 ? <span className="tile-count">{city.active}{city.closed ? <small>({city.closed})</small> : null}</span> : null}
            </div>
          )
        })}
      </div>
    )
  }
}

function PerYearChart(handle: Handle<{ lang: Lang }>) {
  return () => {
    const { lang } = handle.props
    const data = activePerYear()
    const max = Math.max(...data.map((d) => d.count))
    const w = 600, h = 200, padL = 28, padB = 24, padT = 14
    const innerW = w - padL - 8, innerH = h - padB - padT
    const barW = innerW / data.length
    const y = (v: number) => padT + innerH - (v / max) * innerH
    const ticks = [0, 10, 20, 30, 40, 50].filter((v) => v <= max)
    return (
      <figure className="chart">
        <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={data.map((d) => `${d.year}: ${d.count}`).join(', ')}>
          {ticks.map((v) => <g key={v}><line x1={padL} x2={w - 8} y1={y(v)} y2={y(v)} className="grid" /><text x={padL - 6} y={y(v) + 4} className="tick" text-anchor="end">{v}</text></g>)}
          {data.map((d, i) => (
            <g key={d.year}>
              <rect x={padL + i * barW + 2} y={y(d.count)} width={barW - 4} height={innerH + padT - y(d.count)} className={d.year === CURRENT_YEAR ? 'bar bar-now' : 'bar'} rx="2" />
              {d.year === CURRENT_YEAR || d.count === max ? <text x={padL + i * barW + barW / 2} y={y(d.count) - 4} className="val" text-anchor="middle">{d.count}</text> : null}
              {(d.year - FIRST_YEAR) % 4 === 0 || d.year === CURRENT_YEAR ? <text x={padL + i * barW + barW / 2} y={h - 6} className="tick" text-anchor="middle">{d.year}</text> : null}
            </g>
          ))}
        </svg>
        <figcaption>{lang === 'zh' ? `${FIRST_YEAR}–${CURRENT_YEAR}，單位：空間數` : `${FIRST_YEAR}–${CURRENT_YEAR}, number of spaces`}</figcaption>
      </figure>
    )
  }
}

function Timeline(handle: Handle<{ lang: Lang }>) {
  return () => {
    const { lang } = handle.props
    const k = t(lang).kinkSpace
    const span = CURRENT_YEAR - FIRST_YEAR + 1
    const years = []
    for (let yr = FIRST_YEAR; yr <= CURRENT_YEAR; yr += 1) years.push(yr)
    const pct = (v: number) => `${(v / span) * 100}%`
    return (
      <div className="timeline">
        <div className="tl-axis" aria-hidden="true">
          {years.filter((yr) => (yr - FIRST_YEAR) % 4 === 0).map((yr) => <span key={yr} style={{ left: pct(yr - FIRST_YEAR) }}>{yr}</span>)}
        </div>
        {timelineOrder(lang).map((space) => {
          const ongoing = isOngoing(space)
          return (
            <div className={`tl-row${ongoing ? ' is-active' : ' is-closed'}`} data-status={ongoing ? 'active' : 'closed'} key={`${space.name}-${space.start}-${space.venue ?? ''}`}>
              <span className="tl-name"><b>{space.name}</b><small>{cityName(space.city, lang)}{space.venue && space.venue !== space.name ? ` · ${space.venue}` : ''}</small></span>
              <span className="tl-track">
                <span className="tl-bar" style={{ left: pct(space.start - FIRST_YEAR), width: pct(space.end - space.start + 1) }} title={k.yearRange(space.start, space.end, ongoing)}></span>
                <span className="tl-years" style={{ left: pct(space.end - FIRST_YEAR + 1) }}>{k.yearRange(space.start, space.end, ongoing)}</span>
              </span>
            </div>
          )
        })}
      </div>
    )
  }
}

function SpaceRow(handle: Handle<{ space: KinkSpace; lang: Lang }>) {
  return () => {
    const { space, lang } = handle.props
    const k = t(lang).kinkSpace
    const ongoing = isOngoing(space)
    const details = [
      pick(kindNames[space.kind], lang),
      space.district,
      space.venue && space.venue !== space.name ? space.venue : undefined,
      space.host && space.host !== space.name ? space.host : undefined,
    ].filter(Boolean).join(' · ')
    return (
      <div className={`row space-row${ongoing ? ' is-active' : ' is-closed'}`} data-status={ongoing ? 'active' : 'closed'}>
        <span className={`status${ongoing ? ' on' : ''}`} aria-label={ongoing ? k.filterActive : k.filterClosed}></span>
        <span className="t"><b>{space.name}</b><span>{details}</span></span>
        <span className="years">{k.yearRange(space.start, space.end, ongoing)}{space.url ? <a href={space.url} target="_blank" rel="noopener noreferrer">{k.reference}</a> : null}</span>
      </div>
    )
  }
}
