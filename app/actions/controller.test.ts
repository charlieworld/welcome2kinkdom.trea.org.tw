import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { router } from '../router.ts'
import { pagePaths } from '../routes.ts'
import { categories, links, linksIn, sortLinks } from '../data/links.ts'
import { dict, en, zh } from '../i18n/index.ts'

async function fetchHtml(path: string) {
  const response = await router.fetch(new Request(`http://kinkdom.test${path}`))
  return { response, html: await response.text() }
}

describe('Navigator home page', () => {
  it('renders the Chinese home page with every link', async () => {
    const { response, html } = await fetchHtml('/')
    assert.equal(response.status, 200)
    assert.match(html, /<html lang="zh-Hant" data-phase="day" data-lang="zh">/)
    assert.match(html, /台灣禁羈資訊導航站/)
    assert.match(html, /h>=6&&h<19/)
    assert.match(html, /src="\/kinkdom-day\.avif"/)
    assert.match(html, /src="\/kinkdom-night\.avif"/)
    assert.match(html, /href="\/statement\/cd"/)
    assert.match(html, /href="\/en"/)
    assert.match(html, /hreflang="en" href="https:\/\/welcome2kinkdom\.trea\.org\.tw\/en"/)
    assert.match(html, /property="og:site_name" content="台灣禁羈資訊導航站"/)
    assert.match(html, /property="og:locale" content="zh_TW"/)
    assert.match(html, /台灣情感教育協會 × 皮繩愉虐邦 × FUSION × 犬神高度育造/)
    assert.match(html, /TinaTea 緹/)
    for (const link of links) {
      assert.match(html, new RegExp(`href="${link.url.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')}"`), link.url)
      assert.ok(html.includes(link.name.zh), link.name.zh)
    }
  })

  it('renders the English home page with English names where available', async () => {
    const { response, html } = await fetchHtml('/en')
    assert.equal(response.status, 200)
    assert.match(html, /<html lang="en" data-phase="day" data-lang="en">/)
    assert.match(html, /Taiwan Kink Navigator/)
    assert.match(html, /Kink-Aware Professionals in Taiwan/)
    assert.match(html, /property="og:locale" content="en_US"/)
    assert.match(html, /hreflang="zh-Hant" href="https:\/\/welcome2kinkdom\.trea\.org\.tw\/"/)
    // Links without an English name fall back to the Chinese original.
    assert.ok(html.includes('底層慾望'))
  })

  it('sorts Chinese names by stroke order and keeps Latin names after them', () => {
    assert.deepEqual(linksIn('events', 'zh').map((link) => link.name.zh), ['BDSM 小白板', 'BDSM 行事曆'])
    assert.deepEqual(linksIn('resources', 'zh').map((link) => link.name.zh), ['中文 BDSM 學術策展', '禁羈友善助人工作者資源網', 'BDSM 性向測驗'])
    assert.deepEqual(linksIn('forums', 'zh').map((link) => link.name.zh), ['批踢踢實業坊(BDSM板)', 'Dcard(BDSM板)'])
    assert.equal(sortLinks(links, 'en').length, links.length)
  })

  it('has every category represented and no duplicate URLs', () => {
    for (const category of categories) assert.ok(linksIn(category.key, 'zh').length > 0, category.key)
    assert.equal(new Set(links.map((link) => link.url)).size, links.length)
    assert.equal(links.length, 16)
  })
})

describe('Navigator content pages', () => {
  it('renders every page path in both languages', async () => {
    const pages = pagePaths.filter((path) => path === '/' || path === '/en' || path.startsWith('/links') || path.startsWith('/en/') || path.startsWith('/statement') || path === '/about')
    assert.equal(pages.length, 16)
    for (const path of pages) {
      const { response, html } = await fetchHtml(path)
      assert.equal(response.status, 200, path)
      assert.match(html, path.startsWith('/en') ? /<html lang="en"/ : /<html lang="zh-Hant"/, path)
    }
  })

  it('renders the statement page with our statement and the quoted source', async () => {
    const { html } = await fetchHtml('/statement/cd')
    assert.match(html, /CD 事件聲明/)
    assert.match(html, /臺灣同志遊行/)
    assert.match(html, /https:\/\/www\.facebook\.com\/100067198980712\/posts\/1445435101039776\//)
    assert.match(html, /rel="canonical" href="https:\/\/welcome2kinkdom\.trea\.org\.tw\/statement\/cd"/)
    const { html: enHtml } = await fetchHtml('/en/statement/cd')
    assert.match(enHtml, /Statement on the Oct 3 Raid/)
    assert.match(enHtml, /2026-theme-statement-en/)
  })

  it('renders a category page with only its own links', async () => {
    const { html } = await fetchHtml('/links/forums')
    assert.match(html, /批踢踢實業坊/)
    assert.doesNotMatch(html, /href="https:\/\/kinkref\.org\/"/)
    assert.match(html, /rel="canonical" href="https:\/\/welcome2kinkdom\.trea\.org\.tw\/links\/forums"/)
  })
})

describe('i18n dictionaries', () => {
  it('has the same keys in every language', () => {
    const keys = (value: object): string[] => Object.entries(value).flatMap(([key, child]) =>
      child && typeof child === 'object' && !Array.isArray(child) ? keys(child).map((sub) => `${key}.${sub}`) : [key])
    assert.deepEqual(keys(en), keys(zh))
    assert.deepEqual(Object.keys(dict), ['zh', 'en'])
  })
})

describe('Legacy redirects', () => {
  it('preserves permanent Wix redirects', async () => {
    const response = await router.fetch(new Request('http://kinkdom.test/blank-2'))
    assert.equal(response.status, 301)
    assert.equal(response.headers.get('location'), '/about')
  })

  it('redirects former Kinkdom section pages to the nearest category', async () => {
    const response = await router.fetch(new Request('http://kinkdom.test/cafe/podcast'))
    assert.equal(response.status, 301)
    assert.equal(response.headers.get('location'), '/links/podcasts')
  })
})
