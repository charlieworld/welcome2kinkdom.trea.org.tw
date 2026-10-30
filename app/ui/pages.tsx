import type { Handle, RemixNode } from 'remix/ui'

import { kinkdomHref } from '../assets.ts'
import { routes } from '../routes.ts'
import { Document } from '../actions/document.tsx'
import type { Lang } from '../i18n/index.ts'
import { pick, t } from '../i18n/index.ts'
import { categories, categoryInfo, hostOf, links, linksIn, type LinkCategory, type SiteLink } from '../data/links.ts'
import type { IconName } from './icons.tsx'
import { Icon } from './icons.tsx'
import { formatUpdatedAt, siteUpdatedAt } from '../data/updated-at.ts'
import { statementCd } from '../data/statement-cd.ts'
import { liveStream } from '../data/live.ts'

/** Localized hrefs for every page, so the language switch can point at the same page in the other language. */
export const pageHrefs = {
  home: { zh: routes.home.href(), en: routes.homeEn.href() },
  events: { zh: routes.linksEvents.href(), en: routes.linksEventsEn.href() },
  resources: { zh: routes.linksResources.href(), en: routes.linksResourcesEn.href() },
  podcasts: { zh: routes.linksPodcasts.href(), en: routes.linksPodcastsEn.href() },
  writings: { zh: routes.linksWritings.href(), en: routes.linksWritingsEn.href() },
  forums: { zh: routes.linksForums.href(), en: routes.linksForumsEn.href() },
  statementCd: { zh: routes.statementCd.href(), en: routes.statementCdEn.href() },
  statementCdSolidarity: { zh: routes.statementCdSolidarity.href(), en: routes.statementCdSolidarityEn.href() },
  statementCdPurple: { zh: routes.statementCdPurple.href(), en: routes.statementCdPurpleEn.href() },
  about: { zh: routes.about.href(), en: routes.aboutEn.href() },
  kinkSpace: { zh: routes.kinkSpace.href(), en: routes.kinkSpaceEn.href() },
  kinkBasics: { zh: routes.kinkBasics.href(), en: routes.kinkBasicsEn.href() },
  chronicle: { zh: routes.chronicle.href(), en: routes.chronicleEn.href() },
} as const

export type PageKey = keyof typeof pageHrefs

interface PageProps { lang: Lang }

export function otherLang(lang: Lang): Lang { return lang === 'zh' ? 'en' : 'zh' }

// Google Form for corrections, link suggestions and other feedback (linked from the about page).
export const FEEDBACK_FORM = 'https://forms.gle/zQkMLY4XzwjhyDU27'

// Footer credits: the label comes from the dictionary; the name and link are the same in every language.
const CREDITS = [
  { key: 'planning', name: '社團法人台灣情感教育協會', url: 'https://www.trea.org.tw/' },
  { key: 'initiated', name: 'Fusion', url: 'https://www.instagram.com/fusion.taiwan/' },
  { key: 'design', name: '犬神高度育造', url: 'https://inukoiku.github.io/kotogako/age-gate?redirect=/' },
  { key: 'site', name: 'TinaTea 緹', url: 'https://x.com/TinaTeaTW' },
] as const

export function HomePage(handle: Handle<PageProps>) {
  return () => {
    const { lang } = handle.props
    const dict = t(lang)
    return (
      <Document lang={lang} urlPath={pageHrefs.home[lang]} altPath={pageHrefs.home[otherLang(lang)]} bodyClass="home">
        <TopBar lang={lang} page="home" />
        <main id="top" className="wrap">
          <h1 className="sr-only">{dict.siteName}</h1>
          <div className="kv phase-transition">
            <img className="kv-image kv-image-day" src="/kinkdom-hero-day.avif" alt={dict.kvDayAlt} width="1440" height="2560" />
            <img className="kv-image kv-image-night" src="/kinkdom-hero-night.avif" alt={dict.kvNightAlt} width="1440" height="2560" />
            <a className="scroll-hint" href="#statement-notice" aria-label={dict.scrollHint}>
              <span aria-hidden="true">{dict.scrollHintLabel}</span>
              <Icon name="chevron-down" size={28} strokeWidth={2} />
            </a>
          </div>
          <a className="notice phase-transition" id="statement-notice" href={pageHrefs.statementCd[lang]}>
            <i aria-hidden="true"></i>
            <span><b>{dict.statementNotice.tag}</b>{dict.statementNotice.text}<Icon name="arrow-right" size={14} className="icon-inline" /></span>
          </a>
          <BasicsTeaser lang={lang} />
          <section className="section topics-section" id="topics">
            <h2><em>{dict.topics.heading}</em><span>{dict.topics.sub}</span></h2>
            <div className="topics">
              <a className="topic phase-transition" href={pageHrefs.kinkSpace[lang]}>
                <b>{dict.kinkSpace.homeCard.title}</b><span>{dict.kinkSpace.homeCard.text}</span><i aria-hidden="true"><Icon name="arrow-right" size={14} /></i>
              </a>
              <a className="topic phase-transition" href={pageHrefs.chronicle[lang]}>
                <b>{dict.chronicle.homeCard.title}</b><span>{dict.chronicle.homeCard.text}</span><i aria-hidden="true"><Icon name="arrow-right" size={14} /></i>
              </a>
            </div>
          </section>
          <div className="links-block" id="links">
            <h2 className="links-heading"><em>{dict.linksTitle}</em><span>{dict.linksCount(links.length)}</span></h2>
            <nav className="chips" aria-label={dict.linksHeading}>
              <a className="chip" href="#links">{dict.all}</a>
              {categories.map((category) => <a className="chip" key={category.key} href={`#${category.key}`}>{pick(category.name, lang)}</a>)}
            </nav>
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
        {liveStream
          ? (
            <aside className="live-pop phase-transition" data-live={liveStream.url} aria-label={dict.live.title}>
              <a className="live-link" href={liveStream.url} target="_blank" rel="noopener noreferrer">
                <b><i aria-hidden="true"></i>{dict.live.tag}</b>
                <span>{dict.live.title}</span>
                <small>{dict.live.cta}<Icon name="arrow-up-right" size={12} className="icon-inline" /></small>
              </a>
              <button className="live-close" type="button" data-live-close aria-label={dict.live.close}><Icon name="x" size={16} /></button>
            </aside>
          )
          : null}
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
          <a className="back-link" href={pageHrefs.home[lang]}><Icon name="arrow-left" size={16} className="back-icon" />{dict.backToLinks}</a>
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
              <a href={content.quote.url} target="_blank" rel="noopener noreferrer">{dict.readOriginal}<Icon name="arrow-up-right" size={14} className="icon-inline" /></a>
            </blockquote>
            <h2 className="eyebrow related-heading"><i></i><span>{dict.related}</span></h2>
            <div className="related">
              {content.related.map((item) => item.url.startsWith('/')
                ? <a href={item.url} key={item.url}><span>{item.label}</span><small>{item.meta}</small></a>
                : <a href={item.url} key={item.url} target="_blank" rel="noopener noreferrer"><span>{item.label}</span><small>{item.meta}</small></a>)}
            </div>
          </article>
          <a className="back-link" href={pageHrefs.home[lang]}><Icon name="arrow-left" size={16} className="back-icon" />{dict.backToLinks}</a>
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
          <article>
            {dict.aboutBody.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <p>{dict.feedbackNote.before}<a href={FEEDBACK_FORM} target="_blank" rel="noopener noreferrer">{dict.feedbackNote.link}</a>{dict.feedbackNote.after}</p>
          </article>
          <a className="back-link" href={pageHrefs.home[lang]}><Icon name="arrow-left" size={16} className="back-icon" />{dict.backToLinks}</a>
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
        <a href={pageHrefs.kinkBasics[handle.props.lang]}>{dict.kinkBasics.teaser.link}<Icon name="arrow-right" size={14} className="icon-inline" /></a>
      </aside>
    )
  }
}

function LinkList(handle: Handle<{ items: SiteLink[]; icon: IconName; lang: Lang }>) {
  return () => {
    const { items, icon, lang } = handle.props
    return (
      <div className="rows">
        {items.map((link) => (
          <a className="row link-row phase-transition" href={link.url} key={link.url} target="_blank" rel="noopener noreferrer">
            <span className="ico"><Icon name={icon} size={22} /></span>
            <span className="t"><b>{pick(link.name, lang)}</b><span>{hostOf(link.url)}{link.note ? ` · ${pick(link.note, lang)}` : ''}</span></span>
            <span className="ext" aria-hidden="true"><Icon name="arrow-up-right" size={14} /></span>
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
            <Icon name="menu" size={16} />
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
            {CREDITS.map((credit) => <p key={credit.key}><span>{dict.credits[credit.key]}</span><a href={credit.url} target="_blank" rel="noopener noreferrer">{credit.name}</a></p>)}
            <p className="footer-feedback">{dict.feedbackNote.before}<a href={FEEDBACK_FORM} target="_blank" rel="noopener noreferrer">{dict.feedbackNote.link}</a>{dict.feedbackNote.after}</p>
          </div>
          <p className="footer-signature"><em>made with love</em><i aria-hidden="true"><Icon name="sparkle" size={11} /></i><span>2026</span></p>
          <p className="footer-updated"><span>{dict.updatedAt}</span><time dateTime={siteUpdatedAt.toISOString()}>{formatUpdatedAt(siteUpdatedAt, handle.props.lang)}</time></p>
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
    const navArrow = <Icon name="arrow-right" size={12} />
    const navLink = (href: string, label: RemixNode, sub: RemixNode) => <a href={href} key={href}><b>{label}</b><span>{sub}</span></a>
    return (<>
      <div className="scrim" data-scrim></div>
      <aside className="sheet phase-transition" id="menu-sheet" data-sheet aria-label={dict.menuLabel} aria-hidden="true" tabIndex={-1}>
        <div className="grab"></div>
        <h3>{dict.siteHeading}</h3>
        <nav className="nav">
          {navLink(pageHrefs.kinkBasics[lang], dict.kinkBasics.nav, dict.kinkBasics.navSub)}
          {navLink(pageHrefs.statementCd[lang], dict.statementNav, <i className="dot" aria-hidden="true"></i>)}
          {navLink(pageHrefs.statementCdSolidarity[lang], dict.solidarity.nav, navArrow)}
          {navLink(pageHrefs.statementCdPurple[lang], dict.purple.nav, navArrow)}
          {navLink(pageHrefs.about[lang], dict.aboutNav, navArrow)}
          {navLink(pageHrefs[page][other], t(other).siteName, dict.switchLangLabel)}
        </nav>
        <h3>{dict.linksHeading}</h3>
        <nav className="nav">
          {categories.map((category) => navLink(pageHrefs[category.key][lang], pick(category.name, lang), `${lang === 'zh' ? category.name.en : category.name.zh} · ${linksIn(category.key, lang).length}`))}
        </nav>
        <h3>{dict.topics.menu}</h3>
        <nav className="nav nav-topics">
          {navLink(pageHrefs.kinkSpace[lang], dict.kinkSpace.homeCard.title, dict.kinkSpace.homeCard.text)}
          {navLink(pageHrefs.chronicle[lang], dict.chronicle.homeCard.title, dict.chronicle.homeCard.text)}
        </nav>
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
        <button className="close" type="button" data-close-menu>{dict.menuClose}</button>
      </aside>
    </>)
  }
}
