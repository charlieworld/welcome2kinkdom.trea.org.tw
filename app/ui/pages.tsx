import type { Handle } from 'remix/ui'

import { kinkdomHref } from '../assets.ts'
import { routes } from '../routes.ts'
import { Document } from '../actions/document.tsx'

const places = [
  { key: 'store', name: '便利商店', en: 'Store', desc: '24 小時，先從這裡認識我們', paths: ['M3 9l1.5-4h15L21 9M4 9h16v11H4zM9 20v-6h6v6'], pills: [['介紹 About', routes.storeAbout.href()], ['友站 Web', routes.storeWeb.href()]] },
  { key: 'school', name: '學校', en: 'School', desc: '社群如何長大、如何組織', paths: ['M3 10l9-5 9 5-9 5-9-5zM7 12v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5M21 10v6'], pills: [['發展 Growing', routes.schoolGrowing.href()], ['團體 Organize', routes.schoolOrganize.href()]] },
  { key: 'cafe', name: '咖啡廳', en: 'Cafe', desc: '坐下來聽節目、找空間', paths: ['M4 9h12v6a4 4 0 01-4 4H8a4 4 0 01-4-4zM16 10h2a2 2 0 010 4h-2M7 4v2M10 3v3M13 4v2'], pills: [['節目 Podcast', routes.cafePodcast.href()], ['空間 Space', routes.cafeSpace.href()]] },
  { key: 'market', name: '市集', en: 'Market', desc: '遊行與蛻變，最熱鬧的角落', paths: ['M3 8l2-4h14l2 4M3 8c0 1.5 1 3 3 3s3-1.5 3-3c0 1.5 1 3 3 3s3-1.5 3-3c0 1.5 1 3 3 3s3-1.5 3-3M5 11v9h14v-9'], pills: [['遊行 Pride', routes.marketPride.href()], ['蛻變 Fusion', routes.marketFusion.href()]] },
] as const

const navGroups = [
  ['便利商店', 'Store', [['禁羈介紹', 'About', routes.storeAbout.href()], ['禁羈友站', 'Web', routes.storeWeb.href()]]],
  ['學校', 'School', [['禁羈發展', 'Growing', routes.schoolGrowing.href()], ['禁羈團體', 'Organize', routes.schoolOrganize.href()]]],
  ['咖啡廳', 'Cafe', [['禁羈節目', 'Podcast', routes.cafePodcast.href()], ['禁羈空間', 'Space', routes.cafeSpace.href()]]],
  ['市集', 'Market', [['遊行', 'Pride', routes.marketPride.href()], ['蛻變', 'Fusion', routes.marketFusion.href()]]],
] as const

export function HomePage() {
  return () => (
    <Document description="走進白天與夜晚各有樣貌的禁羈街區，認識台灣 kink 社群的故事、團體、節目、空間與活動。">
      <TopBar />
      <main id="top" className="wrap">
        <section className="hero phase-transition">
          <div className="eyebrow"><i></i><span data-copy="eyebrow">Day District</span></div>
          <h1><span data-copy="h1">白天街區</span><small data-copy="h1en">• Day</small></h1>
          <p className="lede" data-copy="lede">一座白天與夜晚各有樣貌的城市。走進便利商店、學校、咖啡廳與市集，認識禁羈社群。</p>
        </section>
        <div className="kv phase-transition">
          <img className="kv-image kv-image-day" src="/kinkdom-day.avif" alt="歡迎入境基地樂園，白天街區主視覺" width="2742" height="3840" />
          <img className="kv-image kv-image-night" src="/kinkdom-night.avif" alt="歡迎入禁，騷地樂園，夜晚街區主視覺" width="1371" height="1920" />
        </div>
        <section className="section">
          <h2>城市地圖 · City Map</h2>
          <p className="sub">每個地點都是一個入口。點進去看看。</p>
          <div className="rows">{places.map((place) => <PlaceRow key={place.key} place={place} />)}</div>
        </section>
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-credits">
              <p><span>發起、規劃</span>台灣情感教育協會 × 皮繩愉虐邦 × FUSION × 犬神高度育造</p>
              <p><span>網頁工程 ・ 維護</span>TinaTea 緹</p>
            </div>
            <p className="footer-signature"><em>made with love</em><i aria-hidden="true">✦</i><span>2026</span></p>
          </div>
        </footer>
      </main>
      <MenuSheet />
      <script type="module" src={kinkdomHref}></script>
    </Document>
  )
}

export function ContentPage(handle: Handle<{ page: readonly [string, string, string, string] }>) {
  return () => {
    const [place, title, english, urlPath] = handle.props.page
    return (
      <Document title={`${title} · 禁羈街區`} description={`${title}，禁羈街區 ${place}。`} urlPath={urlPath}>
        <TopBar />
        <main className="wrap content-page">
          <section className="hero">
            <div className="eyebrow"><i></i><span>{place}</span></div>
            <h1>{title}<small>• {english}</small></h1>
            <p className="lede">這裡將收錄禁羈社群整理的{title}內容。</p>
          </section>
          <article>
            <p>內容正在整理中。這個頁面已經備妥 Markdown 內容檔，後續可由社群直接更新。</p>
            <p>在正式內容上線前，可以先從城市地圖前往其他地點，認識不同面向的禁羈社群。</p>
          </article>
          <a className="back-link" href={routes.home.href()}>← 回到城市地圖</a>
        </main>
        <MenuSheet />
        <script type="module" src={kinkdomHref}></script>
      </Document>
    )
  }
}

function TopBar() {
  return () => (
    <header className="bar phase-transition"><div className="wrap">
      <a className="brand" href={routes.home.href()}><b>禁羈街區</b><span>KINKDOM</span></a>
      <button className="menu-btn phase-transition" style={{ padding: '0 10px' }} type="button" data-menu-button aria-label="開啟選單" aria-expanded="false" aria-controls="menu-sheet">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
      </button>
    </div></header>
  )
}

function PlaceRow(handle: Handle<{ place: typeof places[number] }>) {
  return () => {
    const place = handle.props.place
    return <div className="row phase-transition">
      <a className="place-main" href={`/${place.key}`} aria-label={place.name}></a>
      <span className="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={place.paths[0]} /></svg></span>
      <span className="t"><b>{place.name}</b><span>{place.en} · {place.desc}</span></span>
      <span className="pills">{place.pills.map(([label, href]) => <a className="pill" key={href} href={href}>{label}</a>)}</span>
    </div>
  }
}

function MenuSheet() {
  return () => (<>
    <div className="scrim" data-scrim></div>
    <aside className="sheet phase-transition" id="menu-sheet" data-sheet aria-label="選單" aria-hidden="true" tabIndex={-1}>
      <div className="grab"></div>
      <h3>時間樣式 · Time of day</h3>
      <div className="seg" role="group" aria-label="時間樣式">
        {[['day','白天','Day'],['night','夜晚','Night']].map(([mode, zh, en]) =>
          <button type="button" data-mode={mode} aria-pressed="false" key={mode}>{zh}<small>{en}</small></button>)}
      </div>
      <p className="auto-note" data-phase-note>每次進入頁面會依手機時間顯示，也可以暫時切換。</p>
      {navGroups.map(([zh, en, links]) => <div key={en}><h3>{zh} · {en}</h3><nav className="nav">{links.map(([label, sub, href]) => <a href={href} key={href}><b>{label}</b><span>{sub}</span></a>)}</nav></div>)}
      <button className="close" type="button" data-close-menu>關閉</button>
    </aside>
  </>)
}
