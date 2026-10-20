import type { Handle, RemixNode } from 'remix/ui'

import { kinkdomHref } from '../assets.ts'
import { routes } from '../routes.ts'
import { Document } from '../actions/document.tsx'
import type { Lang } from '../i18n/index.ts'
import { pick, t } from '../i18n/index.ts'
import { categories, categoryInfo, hostOf, linksIn, type LinkCategory, type SiteLink } from '../data/links.ts'
import { statementCd } from '../data/statement-cd.ts'

/** Localized hrefs for every page, so the language switch can point at the same page in the other language. */
export const pageHrefs = {
  home: { zh: routes.home.href(), en: routes.homeEn.href() },
  events: { zh: routes.linksEvents.href(), en: routes.linksEventsEn.href() },
  resources: { zh: routes.linksResources.href(), en: routes.linksResourcesEn.href() },
  podcasts: { zh: routes.linksPodcasts.href(), en: routes.linksPodcastsEn.href() },
  writings: { zh: routes.linksWritings.href(), en: routes.linksWritingsEn.href() },
  forums: { zh: routes.linksForums.href(), en: routes.linksForumsEn.href() },
  statementCd: { zh: routes.statementCd.href(), en: routes.statementCdEn.href() },
  about: { zh: routes.about.href(), en: routes.aboutEn.href() },
  kinkSpace: { zh: routes.kinkSpace.href(), en: routes.kinkSpaceEn.href() },
  kinkBasics: { zh: routes.kinkBasics.href(), en: routes.kinkBasicsEn.href() },
  chronicle: { zh: routes.chronicle.href(), en: routes.chronicleEn.href() },
} as const

export type PageKey = keyof typeof pageHrefs

interface PageProps { lang: Lang }

export function otherLang(lang: Lang): Lang { return lang === 'zh' ? 'en' : 'zh' }

export function HomePage(handle: Handle<PageProps>) {
  return () => {
    const { lang } = handle.props
    const dict = t(lang)
    return (
      <Document lang={lang} urlPath={pageHrefs.home[lang]} altPath={pageHrefs.home[otherLang(lang)]}>
        <TopBar lang={lang} page="home" />
        <main id="top" className="wrap">
          <a className="notice phase-transition" href={pageHrefs.statementCd[lang]}>
            <i aria-hidden="true"></i>
            <span><b>{dict.statementNotice.tag}</b>{dict.statementNotice.text}</span>
          </a>
          <section className="hero phase-transition">
            <div className="eyebrow"><i></i><span data-copy="eyebrow" data-day={dict.phase.day.eyebrow} data-night={dict.phase.night.eyebrow}>{dict.phase.day.eyebrow}</span></div>
            <h1><span data-copy="h1" data-day={dict.phase.day.h1} data-night={dict.phase.night.h1}>{dict.phase.day.h1}</span><small>{dict.h1Sub}</small></h1>
            <p className="lede" data-copy="lede" data-day={dict.phase.day.lede} data-night={dict.phase.night.lede}>{dict.phase.day.lede}</p>
          </section>
          <div className="kv phase-transition">
            <img className="kv-image kv-image-day" src="/kinkdom-day.avif" alt={dict.kvDayAlt} width="2742" height="3840" />
            <img className="kv-image kv-image-night" src="/kinkdom-night.avif" alt={dict.kvNightAlt} width="1371" height="1920" />
          </div>
          <BasicsTeaser lang={lang} />
          <nav className="chips" aria-label={dict.linksHeading}>
            <a className="chip" href="#top">{dict.all}</a>
            {categories.map((category) => <a className="chip" key={category.key} href={`#${category.key}`}>{pick(category.name, lang)}</a>)}
          </nav>
          <div className="topics">
            <a className="topic phase-transition" href={pageHrefs.kinkSpace[lang]}>
              <i>{dict.kinkSpace.homeCard.tag}</i><b>{dict.kinkSpace.homeCard.title}</b><span>{dict.kinkSpace.homeCard.text}</span>
            </a>
            <a className="topic phase-transition" href={pageHrefs.chronicle[lang]}>
              <i>{dict.chronicle.homeCard.tag}</i><b>{dict.chronicle.homeCard.title}</b><span>{dict.chronicle.homeCard.text}</span>
            </a>
          </div>
          {categories.map((category) => {
            const items = linksIn(category.key, lang)
            return (<>
              <section className="section link-section" id={category.key} key={category.key}>
                <h2><em>{pick(category.name, lang)}</em><span>{lang === 'zh' ? category.name.en : category.name.zh} · {items.length}</span></h2>
                <p className="sub">{pick(category.desc, lang)}</p>
                <LinkList items={items} icon={category.icon} lang={lang} />
              </section>
            </>)
          })}
          <SiteFooter lang={lang} />
        </main>
        <MenuSheet lang={lang} page="home" />
        <script type="module" src={kinkdomHref}></script>
      </Document>
    )
  }
}

export function CategoryPage(handle: Handle<PageProps & { category: LinkCategory }>) {
  return () => {
    const { lang, category } = handle.props
    const dict = t(lang)
    const info = categoryInfo(category)
    const items = linksIn(category, lang)
    const name = pick(info.name, lang)
    return (
      <Document lang={lang} title={`${name} · ${dict.siteName}`} description={pick(info.desc, lang)} urlPath={pageHrefs[category][lang]} altPath={pageHrefs[category][otherLang(lang)]}>
        <TopBar lang={lang} page={category} />
        <main className="wrap content-page">
          <section className="hero">
            <div className="eyebrow"><i></i><span>{dict.categoryEyebrow} · {lang === 'zh' ? info.name.en : info.name.zh}</span></div>
            <h1>{name}<small>{dict.linksCount(items.length)}</small></h1>
            <p className="lede">{pick(info.desc, lang)} {dict.sortedNote}</p>
          </section>
          <LinkList items={items} icon={info.icon} lang={lang} />
          <a className="back-link" href={pageHrefs.home[lang]}>{dict.backToLinks}</a>
          <SiteFooter lang={lang} />
        </main>
        <MenuSheet lang={lang} page={category} />
        <script type="module" src={kinkdomHref}></script>
      </Document>
    )
  }
}

export function StatementPage(handle: Handle<PageProps>) {
  return () => {
    const { lang } = handle.props
    const dict = t(lang)
    const content = statementCd[lang]
    return (
      <Document lang={lang} title={`${dict.statementTitle} · ${dict.siteName}`} description={content.paragraphs[0]} urlPath={pageHrefs.statementCd[lang]} altPath={pageHrefs.statementCd[otherLang(lang)]}>
        <TopBar lang={lang} page="statementCd" />
        <main className="wrap content-page statement">
          <section className="hero">
            <div className="eyebrow"><i></i><span>{dict.statementEyebrow}</span></div>
            <h1>{dict.statementTitle}<small>{dict.statementSub}</small></h1>
            <p className="meta"><span>{dict.published(content.date)}</span><span aria-hidden="true">·</span><span>{dict.siteName}</span></p>
          </section>
          <article>
            {content.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <blockquote className="quote">
              <p className="src">{dict.quotedFrom}</p>
              <h3>{content.quote.title}</h3>
              <p>{content.quote.summary}</p>
              <a href={content.quote.url} target="_blank" rel="noopener noreferrer">{dict.readOriginal}</a>
            </blockquote>
            <h2 className="eyebrow related-heading"><i></i><span>{dict.related}</span></h2>
            <div className="related">
              {content.related.map((item) => <a href={item.url} key={item.url} target="_blank" rel="noopener noreferrer"><span>{item.label}</span><small>{item.meta}</small></a>)}
            </div>
          </article>
          <a className="back-link" href={pageHrefs.home[lang]}>{dict.backToLinks}</a>
          <SiteFooter lang={lang} />
        </main>
        <MenuSheet lang={lang} page="statementCd" />
        <script type="module" src={kinkdomHref}></script>
      </Document>
    )
  }
}

export function AboutPage(handle: Handle<PageProps>) {
  return () => {
    const { lang } = handle.props
    const dict = t(lang)
    return (
      <Document lang={lang} title={`${dict.aboutTitle} · ${dict.siteName}`} description={dict.aboutLede} urlPath={pageHrefs.about[lang]} altPath={pageHrefs.about[otherLang(lang)]}>
        <TopBar lang={lang} page="about" />
        <main className="wrap content-page">
          <section className="hero">
            <div className="eyebrow"><i></i><span>{dict.aboutEyebrow}</span></div>
            <h1>{dict.aboutTitle}</h1>
            <p className="lede">{dict.aboutLede}</p>
          </section>
          <article>{dict.aboutBody.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</article>
          <a className="back-link" href={pageHrefs.home[lang]}>{dict.backToLinks}</a>
          <SiteFooter lang={lang} />
        </main>
        <MenuSheet lang={lang} page="about" />
        <script type="module" src={kinkdomHref}></script>
      </Document>
    )
  }
}

function BasicsTeaser(handle: Handle<{ lang: Lang }>) {
  return () => {
    const dict = t(handle.props.lang)
    return (
      <aside className="teaser phase-transition" aria-labelledby="teaser-title">
        <div className="eyebrow"><i></i><span id="teaser-title">{dict.kinkBasics.teaser.eyebrow}</span></div>
        <p>{dict.kinkBasics.teaser.text}</p>
        <a href={pageHrefs.kinkBasics[handle.props.lang]}>{dict.kinkBasics.teaser.link}</a>
      </aside>
    )
  }
}

function LinkList(handle: Handle<{ items: SiteLink[]; icon: string; lang: Lang }>) {
  return () => {
    const { items, icon, lang } = handle.props
    return (
      <div className="rows">
        {items.map((link) => (
          <a className="row link-row phase-transition" href={link.url} key={link.url} target="_blank" rel="noopener noreferrer">
            <span className="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon} /></svg></span>
            <span className="t"><b>{pick(link.name, lang)}</b><span>{hostOf(link.url)}{link.note ? ` · ${pick(link.note, lang)}` : ''}</span></span>
            <span className="ext" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    )
  }
}

export function TopBar(handle: Handle<{ lang: Lang; page: PageKey }>) {
  return () => {
    const { lang, page } = handle.props
    const dict = t(lang)
    const other = otherLang(lang)
    return (
      <header className="bar phase-transition"><div className="wrap">
        <a className="brand" href={pageHrefs.home[lang]}><b>{dict.siteName}</b><span>{dict.siteShort}</span></a>
        <div className="bar-actions">
          <a className="lang-switch phase-transition" href={pageHrefs[page][other]} hrefLang={t(other).htmlLang} lang={t(other).htmlLang} aria-label={dict.switchLangLabel}>{dict.switchLang}</a>
          <button className="menu-btn phase-transition" type="button" data-menu-button aria-label={dict.menuOpen} aria-expanded="false" aria-controls="menu-sheet">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div></header>
    )
  }
}

export function SiteFooter(handle: Handle<{ lang: Lang }>) {
  return () => {
    const dict = t(handle.props.lang)
    return (
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-credits">
            <p><span>{dict.credits.initiated}</span>台灣情感教育協會 × 皮繩愉虐邦 × FUSION × 犬神高度育造</p>
            <p><span>{dict.credits.site}</span>TinaTea 緹</p>
            <p><span>{dict.credits.suggest}</span>{dict.credits.suggestText}</p>
          </div>
          <p className="footer-signature"><em>made with love</em><i aria-hidden="true">✦</i><span>2026</span></p>
        </div>
      </footer>
    )
  }
}

export function MenuSheet(handle: Handle<{ lang: Lang; page: PageKey }>) {
  return () => {
    const { lang, page } = handle.props
    const dict = t(lang)
    const other = otherLang(lang)
    const navLink = (href: string, label: RemixNode, sub: RemixNode) => <a href={href} key={href}><b>{label}</b><span>{sub}</span></a>
    return (<>
      <div className="scrim" data-scrim></div>
      <aside className="sheet phase-transition" id="menu-sheet" data-sheet aria-label={dict.menuLabel} aria-hidden="true" tabIndex={-1}>
        <div className="grab"></div>
        <h3>{dict.timeOfDay}</h3>
        <div className="seg" role="group" aria-label={dict.timeOfDay}>
          {([['day', dict.day, 'Day'], ['night', dict.night, 'Night']] as const).map(([mode, label, sub]) =>
            <button type="button" data-mode={mode} aria-pressed="false" key={mode}>{label}<small>{sub}</small></button>)}
        </div>
        <p className="auto-note" data-phase-note data-auto-note={dict.autoNote} data-manual-note={dict.manualNote('{label}')}>{dict.autoNote}</p>
        <h3>{dict.language}</h3>
        <div className="seg" role="group" aria-label={dict.language}>
          <a aria-current={lang === 'zh' ? 'page' : undefined} href={pageHrefs[page].zh} hrefLang="zh-Hant" lang="zh-Hant">中文<small>ZH</small></a>
          <a aria-current={lang === 'en' ? 'page' : undefined} href={pageHrefs[page].en} hrefLang="en" lang="en">English<small>EN</small></a>
        </div>
        <h3>{dict.linksHeading}</h3>
        <nav className="nav">
          {categories.map((category) => navLink(pageHrefs[category.key][lang], pick(category.name, lang), `${lang === 'zh' ? category.name.en : category.name.zh} · ${linksIn(category.key, lang).length}`))}
        </nav>
        <h3>{dict.siteHeading}</h3>
        <nav className="nav">
          {navLink(pageHrefs.kinkBasics[lang], dict.kinkBasics.nav, dict.kinkBasics.navSub)}
          {navLink(pageHrefs.statementCd[lang], dict.statementNav, <i className="dot" aria-hidden="true"></i>)}
          {navLink(pageHrefs.kinkSpace[lang], dict.kinkSpace.nav, dict.kinkSpace.eyebrow)}
          {navLink(pageHrefs.chronicle[lang], dict.chronicle.nav, dict.chronicle.navSub)}
          {navLink(pageHrefs.about[lang], dict.aboutNav, '→')}
          {navLink(pageHrefs[page][other], t(other).siteName, dict.switchLangLabel)}
        </nav>
        <button className="close" type="button" data-close-menu>{dict.menuClose}</button>
      </aside>
    </>)
  }
}
