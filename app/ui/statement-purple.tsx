import type { Handle } from 'remix/ui'

import { kinkdomHref } from '../assets.ts'
import { Document } from '../actions/document.tsx'
import type { Lang } from '../i18n/index.ts'
import { pick, t } from '../i18n/index.ts'
import { purple, purpleUpdated } from '../data/statement-cd-purple.ts'
import { linkHost } from '../data/statement-cd-solidarity.ts'
import { MenuSheet, SiteFooter, TopBar, otherLang, pageHrefs } from './pages.tsx'

export function StatementPurplePage(handle: Handle<{ lang: Lang }>) {
  return () => {
    const { lang } = handle.props
    const dict = t(lang)
    const s = dict.purple
    return (
      <Document lang={lang} title={`${s.title} · ${dict.siteName}`} description={s.lede} urlPath={pageHrefs.statementCdPurple[lang]} altPath={pageHrefs.statementCdPurple[otherLang(lang)]}>
        <TopBar lang={lang} page="statementCdPurple" />
        <main className="wrap content-page statement purple">
          <section className="hero">
            <div className="eyebrow"><i></i><span>{s.eyebrow}</span></div>
            <h1>{s.title}<small>{s.sub}</small></h1>
            <p className="lede">{s.lede}</p>
            <p className="meta"><span>{s.updated(purpleUpdated)}</span><span aria-hidden="true">·</span><span>{s.summary(purple.length)}</span></p>
          </section>
          <article>
            {purple.map((group) => (
              <div className="purple-card" id={group.slug} key={group.slug} style={{ ['--card-color' as string]: group.color }}>
                <div className="purple-head">
                  {group.logo
                    ? <div className="purple-logo"><img src={group.logo} alt="" width="64" height="64" loading="lazy" decoding="async" /></div>
                    : <div className="purple-logo purple-logo-text" aria-hidden="true"><span>{group.name.zh.slice(0, 2)}</span></div>}
                  <div className="purple-title">
                    <h3>{pick(group.name, lang)}</h3>
                    {group.url
                      ? <a className="purple-visit" href={group.url} target="_blank" rel="noopener noreferrer">{s.visit}<small>{linkHost(group.url)}</small></a>
                      : null}
                  </div>
                </div>
                <p className="purple-intro">{pick(group.intro, lang)}</p>
                {group.support.zh
                  ? <blockquote className="purple-support"><p className="purple-label">{s.supportHeading}</p><p>{pick(group.support, lang)}</p></blockquote>
                  : null}
                {group.speech.length === 0
                  ? <p className="purple-pending">{s.speechPending}</p>
                  : (
                    <details className="purple-speech">
                      <summary>{s.speechToggle}</summary>
                      <div>
                        {group.speech.map((paragraph, i) => paragraph.startsWith('［') ? <h4 key={i}>{paragraph}</h4> : <p key={i}>{paragraph}</p>)}
                      </div>
                    </details>
                  )}
              </div>
            ))}
            <p className="purple-note">{s.sourceNote}</p>
          </article>
          <a className="back-link" href={pageHrefs.statementCd[lang]}>{s.backToStatement}</a>
          <SiteFooter lang={lang} />
        </main>
        <MenuSheet lang={lang} page="statementCdPurple" />
        <script type="module" src={kinkdomHref}></script>
      </Document>
    )
  }
}
