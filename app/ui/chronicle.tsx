import type { Handle } from 'remix/ui'

import { kinkdomHref } from '../assets.ts'
import { Document } from '../actions/document.tsx'
import type { Lang } from '../i18n/index.ts'
import { t } from '../i18n/index.ts'
import { hostOf } from '../data/links.ts'
import { eventsByYear, formatDate, isHighlight, localizeEvent, visibleEvents, type ChronicleDate, type ChronicleEvent } from '../data/chronicle.ts'
import { MenuSheet, SiteFooter, TopBar, otherLang, pageHrefs } from './pages.tsx'
import { Icon } from './icons.tsx'

const OG_IMAGE = { src: '/og-chronicle.jpg', alt: { zh: '社群大紀事及年表：2000 到 2026 的時間軸', en: 'Taiwan BDSM Community Chronicle: timeline 2000–2026' } }

export function ChroniclePage(handle: Handle<{ lang: Lang }>) {
  return () => {
    const { lang } = handle.props
    const dict = t(lang)
    const c = dict.chronicle
    const shown = visibleEvents()
    const years = eventsByYear()
    const first = shown[0]?.start.year ?? 0
    const last = shown.at(-1)?.start.year ?? 0
    const highlighted = shown.filter(isHighlight).length
    return (
      <Document lang={lang} title={`${c.title} · ${dict.siteName}`} description={c.lede} urlPath={pageHrefs.chronicle[lang]} altPath={pageHrefs.chronicle[otherLang(lang)]} ogImage={OG_IMAGE}>
        <TopBar lang={lang} page="chronicle" />
        <main className="wrap content-page chronicle">
          <section className="hero">
            <div className="eyebrow"><i></i><span>{c.eyebrow}</span></div>
            <h1>{c.title}<small>{c.sub}</small></h1>
            <p className="lede">{c.lede}</p>
          </section>

          <dl className="stats chronicle-stats">
            <div><dt>{c.stats.shown}</dt><dd>{shown.length}</dd></div>
            <div><dt>{c.stats.span}</dt><dd>{first}–{last}</dd></div>
            <div><dt>{c.stats.highlighted}</dt><dd>{highlighted}</dd></div>
          </dl>

          <YearStrip years={years} first={first} last={last} lang={lang} />

          <section className="section" id="timeline">
            <h2><em>{c.timelineHeading}</em></h2>
            <p className="sub">{c.timelineSub}</p>
            <div className="chron" data-chron>
              <div className="chron-progress" aria-hidden="true"></div>
              {years.map((group, index) => {
                const previous = years[index - 1]
                const decade = Math.floor(group.year / 10) * 10
                const newDecade = !previous || Math.floor(previous.year / 10) * 10 !== decade
                const gap = previous ? group.year - previous.year - 1 : 0
                return (<>
                  {gap > 0 ? <div className="chron-gap" aria-hidden="true"><span>{c.gap(gap)}</span></div> : null}
                  {newDecade ? <div className="chron-decade" aria-hidden="true"><span>{decade}s</span></div> : null}
                  <section className="chron-year" key={group.year} id={`y${group.year}`} aria-labelledby={`h${group.year}`}>
                    <i className="chron-node" aria-hidden="true"></i>
                    <h3 id={`h${group.year}`}><b>{group.year}</b><span>{c.yearCount(group.items.length)}</span></h3>
                    <ol>{group.items.map((event, i) => <ChronicleItem event={event} lang={lang} key={`${group.year}-${i}`} />)}</ol>
                  </section>
                </>)
              })}
              <div className="chron-end" aria-hidden="true"><span>{c.toBeContinued}</span></div>
            </div>
          </section>

          <h2 className="eyebrow related-heading"><i></i><span>{c.relatedHeading}</span></h2>
          <div className="related">
            <a href={pageHrefs.kinkSpace[lang]}><span>{c.relatedKinkSpace.label}</span><small>{c.relatedKinkSpace.meta}<Icon name="arrow-right" size={14} className="icon-inline" /></small></a>
          </div>
          <p className="source">{c.sourceNote}</p>
          <a className="back-link" href={pageHrefs.home[lang]}><Icon name="arrow-left" size={16} className="back-icon" />{dict.backToLinks}</a>
          <SiteFooter lang={lang} />
        </main>
        <MenuSheet lang={lang} page="chronicle" />
        <script type="module" src={kinkdomHref}></script>
      </Document>
    )
  }
}

/** Horizontal overview: one column per calendar year, bar height = events that year; tap to jump. */
function YearStrip(handle: Handle<{ years: { year: number; items: ChronicleEvent[] }[]; first: number; last: number; lang: Lang }>) {
  return () => {
    const { years, first, last, lang } = handle.props
    const c = t(lang).chronicle
    const byYear = new Map(years.map((group) => [group.year, group.items]))
    const max = Math.max(...years.map((group) => group.items.length))
    const columns = []
    for (let year = first; year <= last; year++) columns.push(year)
    return (
      <nav className="chron-strip" aria-label={c.stripLabel} data-chron-strip>
        <div className="chron-strip-track">
          {columns.map((year) => {
            const items = byYear.get(year) ?? []
            const highlight = items.some(isHighlight)
            const height = items.length ? 22 + (items.length / max) * 34 : 4
            return items.length ? (
              <a href={`#y${year}`} className={`strip-year${highlight ? ' is-highlight' : ''}`} key={year} data-strip-year={year} title={c.yearCount(items.length)}>
                <i style={{ height: `${height}px` }}></i>
                <span>{year}</span>
              </a>
            ) : (
              <span className="strip-year is-empty" key={year} aria-hidden="true"><i></i><span>{year % 10 === 0 ? year : ''}</span></span>
            )
          })}
        </div>
      </nav>
    )
  }
}

function dateParts(date: ChronicleDate): { year: number; rest?: string } {
  const rest = [date.month, date.month ? date.day : undefined].filter((v) => v !== undefined).map((v) => String(v).padStart(2, '0')).join('.')
  return { year: date.year, rest: rest || undefined }
}

function ChronicleItem(handle: Handle<{ event: ChronicleEvent; lang: Lang }>) {
  return () => {
    const { event, lang } = handle.props
    const c = t(lang).chronicle
    const highlight = isHighlight(event)
    const text = localizeEvent(event, lang)
    const meta = [text.org, text.place].filter(Boolean).join(' · ')
    const { rest } = dateParts(event.start)
    const full = formatDate(event.start, event.end)
    return (
      <li className={`chron-event${highlight ? ' is-highlight' : ''}`} data-chron-event>
        <i className="chron-dot" aria-hidden="true"></i>
        <div className="chron-head">
          <time className="chron-date" dateTime={String(event.start.year)} title={full}>
            {rest ? <b>{rest}</b> : <b>{event.start.year}</b>}
            {event.end ? <small>{full.slice(full.indexOf('–'))}</small> : null}
          </time>
          {text.types.map((type) => <span className="chron-tag" key={type}>{type}</span>)}
        </div>
        <p className="chron-summary">{text.summary}</p>
        {text.detail ? <p className="chron-detail">{text.detail}</p> : null}
        {meta ? <p className="chron-meta">{meta}</p> : null}
        {highlight ? <span className="chron-badge">{c.highlightBadge}</span> : null}
        {event.refs.length ? (
          <p className="chron-refs" aria-label={c.refs}>
            {event.refs.map((ref) => <a href={ref.url} key={ref.url} target="_blank" rel="noopener noreferrer">{ref.label ?? hostOf(ref.url)}<Icon name="arrow-up-right" size={14} className="icon-inline" /></a>)}
          </p>
        ) : null}
      </li>
    )
  }
}
