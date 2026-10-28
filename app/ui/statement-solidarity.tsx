import type { Handle } from 'remix/ui'

import { kinkdomHref } from '../assets.ts'
import { Document } from '../actions/document.tsx'
import type { Lang } from '../i18n/index.ts'
import { pick, t } from '../i18n/index.ts'
import { linkHost, solidarity, solidarityOrgs, solidarityUpdated, type SolidarityCategory } from '../data/statement-cd-solidarity.ts'
import { MenuSheet, SiteFooter, TopBar, otherLang, pageHrefs } from './pages.tsx'
import { Icon } from './icons.tsx'

const CATEGORIES: SolidarityCategory[] = ['action', 'statement']

export function StatementSolidarityPage(handle: Handle<{ lang: Lang }>) {
  return () => {
    const { lang } = handle.props
    const dict = t(lang)
    const s = dict.solidarity
    const itemCount = solidarity.reduce((sum, group) => sum + group.items.length, 0)
    return (
      <Document lang={lang} title={`${s.title} · ${dict.siteName}`} description={s.lede} urlPath={pageHrefs.statementCdSolidarity[lang]} altPath={pageHrefs.statementCdSolidarity[otherLang(lang)]}>
        <TopBar lang={lang} page="statementCdSolidarity" />
        <main className="wrap content-page statement solidarity">
          <section className="hero">
            <div className="eyebrow"><i></i><span>{s.eyebrow}</span></div>
            <h1>{s.title}<small>{s.sub}</small></h1>
            <p className="lede">{s.lede}</p>
            <p className="meta"><span>{s.updated(solidarityUpdated)}</span><span aria-hidden="true">·</span><span>{s.summary(solidarityOrgs().length, itemCount)}</span></p>
          </section>
          <article>
            {CATEGORIES.map((category) => (
              <section className="solidarity-section" key={category}>
                <h2 className="eyebrow"><i></i><span>{s.categories[category]}</span></h2>
                <p className="sub">{s.categoryNote[category]}</p>
                {solidarity.filter((group) => group.category === category).map((group, index) => (
                  <div className="solidarity-card" key={index}>
                    <div className="solidarity-orgs">
                      {group.orgs.length > 1 ? <p className="solidarity-joint">{s.jointLabel(group.orgs.length)}</p> : null}
                      <ul>{group.orgs.map((org, i) => <li key={i}>{pick(org, lang)}</li>)}</ul>
                    </div>
                    <div className="solidarity-items">
                      {group.items.map((item) => (
                        <a className="solidarity-item" href={item.url} key={item.url} target="_blank" rel="noopener noreferrer">
                          <span className="solidarity-title">{pick(item.title, lang)}</span>
                          <small>{linkHost(item.url)}</small>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            ))}
            <p className="solidarity-note">{s.sourceNote}</p>
          </article>
          <a className="back-link" href={pageHrefs.statementCd[lang]}><Icon name="arrow-left" size={16} className="back-icon" />{s.backToStatement}</a>
          <SiteFooter lang={lang} />
        </main>
        <MenuSheet lang={lang} page="statementCdSolidarity" />
        <script type="module" src={kinkdomHref}></script>
      </Document>
    )
  }
}
