import type { Handle, RemixNode } from 'remix/ui'
import { css } from 'remix/ui'

import { entryHref, entryPreloads } from '../assets.ts'

export interface DocumentProps {
  children?: RemixNode
  head?: RemixNode
  title?: string
  description?: string
  urlPath?: string
  bodyClass?: string
}

const DEFAULT_TITLE = '禁羈街區 Kinkdom'
const DEFAULT_DESCRIPTION = '走進白天與夜晚各有樣貌的禁羈街區，認識台灣 kink 社群的故事、團體、節目、空間與活動。'
const SITE_URL = 'https://welcome2kinkdom.trea.org.tw'
const OG_IMAGES = [
  { src: '/og-day.jpg', alt: '禁羈街區白天主視覺，彩虹道路通往基地樂園' },
  { src: '/og-night.jpg', alt: '禁羈街區夜晚主視覺，霓虹街景與彩虹道路' },
] as const

export function Document(handle: Handle<DocumentProps>) {
  return () => {
    let { children, head, title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION, urlPath = '/', bodyClass } = handle.props
    const canonicalUrl = new URL(urlPath, SITE_URL).href

    return (
      <html lang="zh-Hant" data-phase="day">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <meta name="description" content={description} />
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:site_name" content="禁羈街區 Kinkdom" />
          <meta property="og:locale" content="zh_TW" />
          {OG_IMAGES.map((image) => <>
            <meta property="og:image" content={`${SITE_URL}${image.src}`} />
            <meta property="og:image:secure_url" content={`${SITE_URL}${image.src}`} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={image.alt} />
          </>)}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={`${SITE_URL}${OG_IMAGES[0].src}`} />
          <meta name="twitter:image:alt" content={OG_IMAGES[0].alt} />
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
