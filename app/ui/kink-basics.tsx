import type { Handle } from 'remix/ui'

import { kinkdomHref } from '../assets.ts'
import { Document } from '../actions/document.tsx'
import type { Lang } from '../i18n/index.ts'
import { t } from '../i18n/index.ts'
import { kinkBasics, type BasicsSection } from '../data/kink-basics.ts'
import { MenuSheet, SiteFooter, TopBar, otherLang, pageHrefs } from './pages.tsx'

const OG_IMAGE = { src: '/og-kink-basics.jpg', alt: { zh: '認識禁羈：涵義、核心精神與互動原則', en: 'Understanding Kink: meaning, core values and principles of play' } }

export function KinkBasicsPage(handle: Handle<{ lang: Lang }>) {
  return () => {
    const { lang } = handle.props
    const dict = t(lang)
    const b = dict.kinkBasics
    const content = kinkBasics[lang]
    const sections = content.chapters.flatMap((chapter) => chapter.sections)
    const multiChapter = content.chapters.length > 1
    let index = 0
    return (
      <Document lang={lang} title={`${content.title} · ${dict.siteName}`} description={content.lede} urlPath={pageHrefs.kinkBasics[lang]} altPath={pageHrefs.kinkBasics[otherLang(lang)]} ogImage={OG_IMAGE}>
        <TopBar lang={lang} page="kinkBasics" />
        <main className="wrap content-page kink-basics">
          <section className="hero">
            <div className="eyebrow"><i></i><span>{content.eyebrow}</span></div>
            <h1>{content.title}<small>{content.sub}</small></h1>
            <p className="lede">{content.lede}</p>
          </section>
          <p className="basics-words basics-opening">{content.opening}</p>
          <nav className="toc" aria-label={b.toc}>
            {sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
          </nav>
          {content.chapters.map((chapter) => (
            <div className="chapter" key={chapter.id} id={chapter.id}>
              {multiChapter ? <h2 className="chapter-title"><span>{chapter.number}</span>{chapter.title}</h2> : null}
              {chapter.sections.map((section) => {
                index += 1
                return <BasicsSectionView section={section} index={index} key={section.id} />
              })}
            </div>
          ))}
          <p className="basics-words basics-closing">{content.closing}</p>
          <h2 className="eyebrow related-heading"><i></i><span>{b.nextHeading}</span></h2>
          <div className="related">
            <a href={pageHrefs.kinkSpace[lang]}><span>{dict.kinkSpace.nav}</span><small>{dict.kinkSpace.eyebrow} →</small></a>
            <a href={pageHrefs.chronicle[lang]}><span>{dict.chronicle.nav}</span><small>{dict.chronicle.navSub} →</small></a>
          </div>
          <p className="source">{b.sourceNote}</p>
          <a className="back-link" href={pageHrefs.home[lang]}>{dict.backToLinks}</a>
          <SiteFooter lang={lang} />
        </main>
        <MenuSheet lang={lang} page="kinkBasics" />
        <script type="module" src={kinkdomHref}></script>
      </Document>
    )
  }
}

function BasicsSectionView(handle: Handle<{ section: BasicsSection; index: number }>) {
  return () => {
    const { section, index } = handle.props
    const body = section.body
    return (
      <section className={`section basics-section kind-${body.kind}`} id={section.id}>
        <h2><em>{section.heading}</em><span>{String(index).padStart(2, '0')}</span></h2>
        {section.intro ? <p className="sub">{section.intro}</p> : null}
        {body.kind === 'definition' ? (
          <div className="definition"><b>{body.term}</b><p>{body.text}</p></div>
        ) : body.kind === 'principles' ? (
          <ol className="principles">
            {body.items.map((item, i) => <li key={item.title}><span className="num" aria-hidden="true">{i + 1}</span><div><b>{item.title}</b><p>{item.text}</p></div></li>)}
          </ol>
        ) : (
          <div className="acronyms">
            {body.items.map((item) => <div key={item.short}><b>{item.short}</b><span>{item.name}</span><em>{item.full}</em></div>)}
          </div>
        )}
      </section>
    )
  }
}
