import * as assert from 'remix/assert'
import { describe, it } from 'remix/test'

import { router } from '../router.ts'

describe('Kinkdom routes', () => {
  it('renders the themed home page', async () => {
    const response = await router.fetch(new Request('http://kinkdom.test/'))
    const html = await response.text()
    assert.equal(response.status, 200)
    assert.match(html, /<html lang="zh-Hant" data-phase="day">/)
    assert.match(html, /白天街區/)
    assert.match(html, /城市地圖/)
    assert.match(html, /h>=6&&h<19/)
    assert.doesNotMatch(html, /打開選單，切換時間/)
    assert.doesNotMatch(html, /data-phase-label/)
    assert.doesNotMatch(html, /class="dot"/)
    assert.doesNotMatch(html, /傍晚|data-mode="auto"|data-mode="dusk"/)
    assert.match(html, /src="\/kinkdom-day\.avif"/)
    assert.match(html, /src="\/kinkdom-night\.avif"/)
    assert.doesNotMatch(html, /<canvas/)
    assert.match(html, /made with love/)
    assert.match(html, /台灣情感教育協會 × 皮繩愉虐邦 × FUSION × 犬神高度育造/)
    assert.match(html, /TinaTea 緹/)
    assert.match(html, /property="og:title" content="禁羈街區 Kinkdom"/)
    assert.match(html, /property="og:image" content="https:\/\/welcome2kinkdom\.trea\.org\.tw\/og-day\.jpg"/)
    assert.match(html, /property="og:image" content="https:\/\/welcome2kinkdom\.trea\.org\.tw\/og-night\.jpg"/)
    assert.match(html, /name="twitter:card" content="summary_large_image"/)
  })

  it('renders every content route', async () => {
    const paths = ['/store/about', '/store/web', '/school/growing', '/school/organize', '/cafe/podcast', '/cafe/space', '/market/pride', '/market/fusion']
    for (const path of paths) {
      const response = await router.fetch(new Request(`http://kinkdom.test${path}`))
      assert.equal(response.status, 200, path)
    }
  })

  it('renders a canonical URL for content pages', async () => {
    const response = await router.fetch(new Request('http://kinkdom.test/market/pride'))
    const html = await response.text()
    assert.match(html, /rel="canonical" href="https:\/\/welcome2kinkdom\.trea\.org\.tw\/market\/pride"/)
    assert.match(html, /property="og:url" content="https:\/\/welcome2kinkdom\.trea\.org\.tw\/market\/pride"/)
  })

  it('preserves permanent Wix redirects', async () => {
    const response = await router.fetch(new Request('http://kinkdom.test/blank-2'))
    assert.equal(response.status, 301)
    assert.equal(response.headers.get('location'), '/store/about')
  })

  it('redirects place pages to their first child', async () => {
    const response = await router.fetch(new Request('http://kinkdom.test/store'))
    assert.equal(response.status, 302)
    assert.equal(response.headers.get('location'), '/store/about')
  })
})
