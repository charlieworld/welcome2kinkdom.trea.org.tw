import type { Handle } from 'remix/ui'

import { kinkdomHref } from '../assets.ts'
import { Document } from '../actions/document.tsx'
import type { Lang } from '../i18n/index.ts'
import { t } from '../i18n/index.ts'
import { hostOf } from '../data/links.ts'
import { eventsByYear, formatDate, isHighlight, visibleEvents, type ChronicleEvent } from '../data/chronicle.ts'
import { MenuSheet, SiteFooter, TopBar, otherLang, pageHrefs } from './pages.tsx'

export function ChroniclePage(handle: Handle<{ lang: Lang }>) {
  return () => {
    const { lang } = handle.props
    const dict = t(lang)
    const c = dict.chronicle
    const shown = visibleEvents()
    const years = eventsByYear()
    const first = shown[0]?.start.year
    const last = shown.at(-1)?.start.year
    const highlighted = shown.filter(isHighlight).length
    return (
      <Document lang={lang} title={`${c.title} · ${dict.siteName}`} description={c.lede} urlPath={pageHrefs.chronicle[lang]} altPath={pageHrefs.chronicle[otherLang(lang)]}>
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

          <section className="section" id="timeline">
            <h2><em>{c.timelineHeading}</em></h2>
            <p className="sub">{c.timelineSub}</p>
            <div className="chron">
              {years.map((group) => (
                <section className="chron-year" key={group.year} aria-labelledby={`y${group.year}`}>
                  <h3 id={`y${group.year}`}>{group.year}<span>{c.yearCount(group.items.length)}</span></h3>
                  <ol>{group.items.map((event, index) => <ChronicleItem event={event} lang={lang} key={`${group.year}-${index}`} />)}</ol>
                </section>
              ))}
            </div>
          </section>

          <h2 className="eyebrow related-heading"><i></i><span>{c.relatedHeading}</span></h2>
          <div className="related">
            <a href={pageHrefs.kinkSpace[lang]}><span>{c.relatedKinkSpace.label}</span><small>{c.relatedKinkSpace.meta} →</small></a>
          </div>
          <p className="source">{c.sourceNote}</p>
          <a className="back-link" href={pageHrefs.home[lang]}>{dict.backToLinks}</a>
          <SiteFooter lang={lang} />
        </main>
        <MenuSheet lang={lang} page="chronicle" />
        <script type="module" src={kinkdomHref}></script>
      </Document>
    )
  }
}

function ChronicleItem(handle: Handle<{ event: ChronicleEvent; lang: Lang }>) {
  return () => {
    const { event, lang } = handle.props
    const c = t(lang).chronicle
    const highlight = isHighlight(event)
    const meta = [event.org, event.place].filter(Boolean).join(' · ')
    return (
      <li className={`chron-event${highlight ? ' is-highlight' : ''}`}>
        <div className="chron-head">
          <time className="chron-date">{formatDate(event.start, event.end)}</time>
          {event.types.map((type) => <span className="chron-tag" key={type}>{type}</span>)}
        </div>
        <p className="chron-summary">{event.summary}</p>
        {highlight ? <span className="chron-badge">{c.highlightBadge}</span> : null}
        {event.detail ? <p className="chron-detail">{event.detail}</p> : null}
        {meta ? <p className="chron-meta">{meta}</p> : null}
        {event.refs.length ? (
          <p className="chron-refs" aria-label={c.refs}>
            {event.refs.map((ref) => <a href={ref.url} key={ref.url} target="_blank" rel="noopener noreferrer">{ref.label ?? hostOf(ref.url)} ↗</a>)}
          </p>
        ) : null}
      </li>
    )
  }
}
