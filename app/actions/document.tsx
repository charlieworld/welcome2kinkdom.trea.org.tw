import type { Handle, RemixNode } from 'remix/ui'
import { css } from 'remix/ui'

import { entryHref, entryPreloads } from '../assets.ts'

export interface DocumentProps {
  children?: RemixNode
  head?: RemixNode
  title?: string
  description?: string
  bodyClass?: string
}

const DEFAULT_TITLE = '禁羈街區 Kinkdom'

export function Document(handle: Handle<DocumentProps>) {
  return () => {
    let { children, head, title = DEFAULT_TITLE, description, bodyClass } = handle.props

    return (
      <html lang="zh-Hant" data-phase="day">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          {description ? <meta name="description" content={description} /> : null}
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
