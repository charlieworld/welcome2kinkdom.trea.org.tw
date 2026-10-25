import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { router } from '../router.ts'
import { pagePaths } from '../routes.ts'
import { categories, links, linksIn, sortLinks } from '../data/links.ts'
import { dict, en, zh } from '../i18n/index.ts'
import { activePerYear, cities, countsByCity, isOngoing, spaces } from '../data/spaces.ts'
import { HIGHLIGHT_IMPORTANCE, SHOW_THRESHOLD, events, visibleEvents } from '../data/chronicle.ts'

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
    assert.match(html, /src="\/kinkdom-hero-day\.avif"/)
    assert.match(html, /src="\/kinkdom-hero-night\.avif"/)
    assert.match(html, /href="\/statement\/cd"/)
    assert.match(html, /href="\/en"/)
    assert.match(html, /hreflang="en" href="https:\/\/welcome2kinkdom\.trea\.org\.tw\/en"/)
    assert.match(html, /property="og:site_name" content="台灣禁羈資訊導航站"/)
    assert.match(html, /property="og:locale" content="zh_TW"/)
    for (const name of ['社團法人台灣情感教育協會', 'Fusion', '犬神高度育造', 'TinaTea 緹']) assert.ok(html.includes(`>${name}</a>`), name)
    assert.match(html, /<span>統籌規劃<\/span><a href="https:\/\/www\.trea\.org\.tw\/"/)
    assert.ok(!html.includes('皮繩愉虐邦'))
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
    assert.equal(links.length, 18)
  })
})

describe('Navigator content pages', () => {
  it('renders every page path in both languages', async () => {
    const pages = pagePaths.filter((path) => path === '/' || path === '/en' || path.startsWith('/links') || path.startsWith('/en/') || path.startsWith('/statement') || path === '/about' || path === '/kink_space' || path === '/kink_basics' || path === '/chronicle')
    assert.equal(pages.length, 22)
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

describe('Kink space page', () => {
  it('renders the map, chart, timeline and list in both languages', async () => {
    const { response, html } = await fetchHtml('/kink_space')
    assert.equal(response.status, 200)
    assert.match(html, /台灣禁羈空間/)
    assert.match(html, /class="cartogram"/)
    assert.match(html, /class="chart"/)
    assert.match(html, /class="timeline"/)
    assert.match(html, /docs\.google\.com\/spreadsheets\/d\/170L5-ZWf1wuroyfeo79Qk5qmTTqB41K6lS1bv-uSlhM/)
    for (const space of spaces) assert.ok(html.includes(space.name), space.name)
    const { html: enHtml } = await fetchHtml('/en/kink_space')
    assert.match(enHtml, /Kink Spaces in Taiwan/)
    assert.match(enHtml, /New Taipei/)
  })

  it('has consistent space data', () => {
    assert.equal(spaces.length, 62)
    for (const space of spaces) {
      assert.ok(space.start >= 2004 && space.start <= space.end, space.name)
      if (space.city) assert.ok(cities.some((c) => c.key === space.city), `${space.name}: ${space.city}`)
    }
    const perYear = activePerYear()
    assert.equal(perYear[0].year, 2004)
    assert.equal(perYear.at(-1)?.count, spaces.filter(isOngoing).length)
    assert.equal(countsByCity().reduce((sum, c) => sum + c.active + c.closed, 0), spaces.filter((s) => s.city).length)
  })
})

describe('Chronicle page', () => {
  /** The `<li>` element whose text contains the given summary. */
  function eventElement(html: string, summary: string) {
    return (html.match(/<li\b[^>]*>.*?<\/li>/gs) ?? []).find((li) => li.includes(summary))
  }

  it('renders the timeline in both languages with entry points from the home page', async () => {
    const { response, html } = await fetchHtml('/chronicle')
    assert.equal(response.status, 200)
    assert.match(html, /社群大紀事及年表/)
    assert.ok(!html.includes('台灣BDSM社群大紀事'))
    assert.match(html, /rel="canonical" href="https:\/\/welcome2kinkdom\.trea\.org\.tw\/chronicle"/)
    assert.equal((html.match(/class="chron-event/g) ?? []).length, 38)
    assert.match(html, /href="\/kink_space"/)
    const { html: enHtml } = await fetchHtml('/en/chronicle')
    assert.match(enHtml, /Taiwan BDSM Community Chronicle/)
    assert.match(enHtml, /More context coming/)
    assert.match(enHtml, /href="\/en\/kink_space"/)
    const { html: home } = await fetchHtml('/')
    assert.doesNotMatch(home, /chip-link/)
    assert.match(home, /class="topic phase-transition" href="\/chronicle"/)
    assert.match(home, /<nav class="nav nav-topics">.*<a href="\/chronicle"><b>社群大紀事<\/b><span>2000 年至今的重要時刻<\/span><\/a>/)
  })

  it('shows only important events and highlights the key ones', async () => {
    const { html } = await fetchHtml('/chronicle')
    // Importance 3: hidden.
    assert.ok(!html.includes('奇摩推出奇摩家族'))
    // Importance 15: highlighted with the supplementary-info badge.
    const key = eventElement(html, '同志箱屍案')
    assert.ok(key, 'importance-15 event rendered')
    assert.match(key, /class="chron-event group-\w+ is-highlight"/)
    assert.match(key, /補充資訊 整理中/)
    // Importance 9: shown, not highlighted.
    const regular = eventElement(html, 'PTT BDSM版開版')
    assert.ok(regular, 'importance-9 event rendered')
    assert.doesNotMatch(regular, /is-highlight/)
    // Internal editorial notes are never rendered.
    assert.ok(!html.includes('待考據'))
    // Timeline furniture: year strip, decade markers, gap markers, legend and progress rail.
    assert.match(html, /data-chron-strip/)
    assert.match(html, /href="#y2001"/)
    assert.match(html, /class="chron-decade"[^>]*><span>2000s<\/span>/)
    assert.match(html, /class="chron-gap"/)
    assert.match(html, /class="chron-legend"/)
    assert.match(html, /class="chron-progress"/)
  })

  it('has consistent chronicle data', () => {
    assert.equal(events.length, 105)
    const shown = visibleEvents()
    assert.equal(shown.length, events.filter((e) => e.importance >= SHOW_THRESHOLD).length)
    assert.equal(shown.filter((e) => e.importance === HIGHLIGHT_IMPORTANCE).length, 12)
    for (let i = 1; i < shown.length; i++) assert.ok(shown[i - 1].start.year <= shown[i].start.year, shown[i].summary)
    for (const event of events) {
      if (event.end) assert.ok(event.end.year >= event.start.year && event.end.year - event.start.year <= 1, event.summary)
      for (const ref of event.refs) assert.match(ref.url, /^https?:\/\//, event.summary)
    }
  })
})

describe('Social images', () => {
  it('give the chronicle and kink space pages their own og:image', async () => {
    for (const [path, image] of [['/chronicle', 'og-chronicle.jpg'], ['/en/chronicle', 'og-chronicle.jpg'], ['/kink_space', 'og-kink-space.jpg'], ['/en/kink_space', 'og-kink-space.jpg'], ['/kink_basics', 'og-kink-basics.jpg'], ['/en/kink_basics', 'og-kink-basics.jpg']]) {
      const { html } = await fetchHtml(path)
      assert.match(html, new RegExp(`property="og:image" content="https://welcome2kinkdom\\.trea\\.org\\.tw/${image}"`), path)
      assert.match(html, new RegExp(`name="twitter:image" content="https://welcome2kinkdom\\.trea\\.org\\.tw/${image}"`), path)
      assert.doesNotMatch(html, /og-day\.jpg/, path)
    }
    const { html } = await fetchHtml('/')
    assert.match(html, /og-day\.jpg/)
    assert.match(html, /og-night\.jpg/)
  })
})

describe('Kink basics page', () => {
  it('renders the definition, five values and five principles in both languages', async () => {
    const { response, html } = await fetchHtml('/kink_basics')
    assert.equal(response.status, 200)
    assert.match(html, /認識禁羈/)
    assert.match(html, /class="definition"/)
    for (const value of ['多元友善', '風險意識', '探索自己', '尊重他人', '重視安全']) assert.ok(html.includes(value), value)
    for (const short of ['SSC', 'RACK', 'PRICK', 'CCC', '4Cs']) assert.match(html, new RegExp(`<b>${short}</b>`), short)
    assert.match(html, /<p class="source">本頁內容由<a href="https:\/\/www\.facebook\.com\/della\.wang\.2015"[^>]*>千霂<\/a>提供/)
    assert.ok(html.indexOf('願這些文字成為探索的起點') < html.indexOf('class="toc"'), 'opening words before the TOC')
    assert.ok(html.indexOf('走出屬於自己的道路') > html.lastIndexOf('class="acronyms"'), 'closing words after the last section')
    const { html: enHtml } = await fetchHtml('/en/kink_basics')
    assert.match(enHtml, /Understanding Kink/)
    assert.match(enHtml, /Risk-Aware Consensual Kink/)
  })

  it('is linked from the home teaser and the menu', async () => {
    for (const path of ['/', '/en']) {
      const { html } = await fetchHtml(path)
      const href = path === '/' ? '/kink_basics' : '/en/kink_basics'
      assert.doesNotMatch(html, /topic-basics/, path)
      assert.match(html, /class="teaser/, path)
      if (path === '/') assert.ok(html.includes('願這些文字成為探索的起點'))
      assert.ok(html.indexOf('class="teaser') < html.indexOf('class="chips"'), `${path}: teaser sits under the key visual`)
      assert.ok((html.match(new RegExp(`href="${href}"`, 'g')) ?? []).length >= 2, `${path}: teaser and menu`)
    }
  })
})

describe('External links', () => {
  it('open every outbound link in a new tab', async () => {
    for (const path of ['/', '/en', '/statement/cd', '/kink_space', '/chronicle', '/links/forums']) {
      const { html } = await fetchHtml(path)
      const anchors = html.match(/<a\b[^>]*href="https?:[^"]*"[^>]*>/g) ?? []
      assert.ok(anchors.length > 0, path)
      for (const anchor of anchors) {
        if (anchor.includes('fonts.googleapis')) continue
        assert.match(anchor, /target="_blank"/, `${path}: ${anchor}`)
        assert.match(anchor, /rel="noopener noreferrer"/, `${path}: ${anchor}`)
      }
      const internal = (html.match(/<a\b[^>]*href="\/[^"]*"[^>]*>/g) ?? []).filter((a) => a.includes('target='))
      assert.deepEqual(internal, [], `${path}: internal links must not open new tabs`)
    }
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
