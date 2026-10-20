import type { Handle, RemixNode } from 'remix/ui'
import { css } from 'remix/ui'

import { entryHref, entryPreloads } from '../assets.ts'
import type { Lang } from '../i18n/index.ts'
import { t } from '../i18n/index.ts'

export interface DocumentProps {
  children?: RemixNode
  head?: RemixNode
  lang: Lang
  title?: string
  description?: string
  /** Path of this page in its own language. */
  urlPath?: string
  /** Path of the same page in the other language, for hreflang alternates. */
  altPath?: string
  bodyClass?: string
}

export const SITE_URL = 'https://welcome2kinkdom.trea.org.tw'
const OG_IMAGES = [
  { src: '/og-day.jpg', alt: { zh: '台灣禁羈資訊導航站白天主視覺，彩虹道路通往基地樂園', en: 'Taiwan Kink Navigator daytime key visual' } },
  { src: '/og-night.jpg', alt: { zh: '台灣禁羈資訊導航站夜晚主視覺，霓虹街景與彩虹道路', en: 'Taiwan Kink Navigator night key visual' } },
] as const

export function Document(handle: Handle<DocumentProps>) {
  return () => {
    const { children, head, lang, urlPath = '/', altPath, bodyClass } = handle.props
    const dict = t(lang)
    const title = handle.props.title ?? dict.siteName
    const description = handle.props.description ?? dict.siteDescription
    const canonicalUrl = new URL(urlPath, SITE_URL).href
    const otherLang: Lang = lang === 'zh' ? 'en' : 'zh'

    return (
      <html lang={dict.htmlLang} data-phase="day" data-lang={lang}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <meta name="description" content={description} />
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <link rel="canonical" href={canonicalUrl} />
          {altPath ? <>
            <link rel="alternate" hrefLang={dict.htmlLang} href={canonicalUrl} />
            <link rel="alternate" hrefLang={t(otherLang).htmlLang} href={new URL(altPath, SITE_URL).href} />
            <link rel="alternate" hrefLang="x-default" href={new URL(lang === 'zh' ? urlPath : altPath, SITE_URL).href} />
          </> : null}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:site_name" content={dict.siteName} />
          <meta property="og:locale" content={dict.ogLocale} />
          {OG_IMAGES.map((image) => <>
            <meta property="og:image" content={`${SITE_URL}${image.src}`} />
            <meta property="og:image:secure_url" content={`${SITE_URL}${image.src}`} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={image.alt[lang]} />
          </>)}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={`${SITE_URL}${OG_IMAGES[0].src}`} />
          <meta name="twitter:image:alt" content={OG_IMAGES[0].alt[lang]} />
          <meta name="theme-color" content="#f4efe6" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700&family=Noto+Sans+TC:wght@400;500;700&family=Syne:wght@500;700;800&display=swap" />
          <link rel="stylesheet" href="/kinkdom.css" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <title>{title}</title>
          <script>{`(function(){var h=new Date().getHours();document.documentElement.setAttribute('data-phase',h>=6&&h<19?'day':'night')})();`}</script>
          {head}
          {entryPreloads.map((href) => (
            <link key={href} rel="modulepreload" href={href} />
          ))}
          <script type="module" src={entryHref}></script>
        </head>
        <body className={bodyClass} mix={css({ margin: 0 })}>{children}</body>
      </html>
    )
  }
}
