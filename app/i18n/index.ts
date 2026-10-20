export type Lang = 'zh' | 'en'

export const LANGS = ['zh', 'en'] as const

export interface Localized {
  zh: string
  en?: string
}

/** Pick a localized string; English falls back to the Chinese original when no translation exists. */
export function pick(value: Localized | string, lang: Lang): string {
  if (typeof value === 'string') return value
  return (lang === 'en' && value.en) || value.zh
}

export const zh = {
  htmlLang: 'zh-Hant',
  ogLocale: 'zh_TW',
  siteName: '台灣禁羈資訊導航站',
  siteShort: 'KINK NAV',
  siteDescription: '台灣 BDSM／kink 社群的資源入口。活動、資源、節目、文庫、討論區，一頁找齊。',
  switchLang: 'EN',
  switchLangLabel: '切換到英文 / English',
  menuOpen: '開啟選單',
  menuClose: '關閉',
  menuLabel: '選單',
  timeOfDay: '時間樣式 · Time of day',
  day: '白天',
  night: '夜晚',
  autoNote: '每次進入頁面會依手機時間顯示，也可以暫時切換。',
  manualNote: (label: string) => `已暫時切換為「${label}」，重新進入頁面時會再次偵測時間。`,
  language: '語言 · Language',
  linksHeading: '資源分類 · Links',
  siteHeading: '網站 · Site',
  phase: {
    day: { eyebrow: 'Day District', h1: '白天街區', lede: '台灣 BDSM／kink 社群的入口。活動、資源、節目、文庫、討論區，一頁找齊。' },
    night: { eyebrow: 'Night District', h1: '夜晚街區', lede: '夜裡的城市有另一種樣貌。同一條街，不同的人、不同的故事。資源一樣在這裡。' },
  },
  h1Sub: '資源導航 • Links',
  kvDayAlt: '歡迎入境基地樂園，白天街區主視覺',
  kvNightAlt: '歡迎入禁，騷地樂園，夜晚街區主視覺',
  all: '全部',
  linksCount: (n: number) => `${n} 個連結`,
  sortedNote: '依中文名稱筆畫排序。',
  categoryEyebrow: '分類頁',
  backToLinks: '← 回到資源導航',
  statementNotice: { tag: '聲明 · 2026.10', text: '關於 10/3 萬華分局搜索事件，導航站聲明 →' },
  statementNav: 'CD 事件聲明',
  statementEyebrow: '聲明 Statement',
  statementTitle: 'CD 事件聲明',
  statementSub: '2026 · 10 · 03 萬華分局搜索事件',
  published: (date: string) => `發布 ${date}`,
  quotedFrom: '引用 · 臺灣同志遊行 Taiwan LGBT+ Pride',
  readOriginal: '閱讀原文 ↗',
  related: '相關連結',
  aboutNav: '關於導航站',
  aboutTitle: '關於導航站',
  aboutEyebrow: '關於 About',
  aboutLede: '台灣禁羈資訊導航站把散落各處的社群資源整理成一頁，方便新朋友與老朋友快速找到入口。',
  aboutBody: [
    '這裡不自產長文，只收錄連結。每個連結都是社群成員經營的活動、資源、節目、文庫或討論區；內容與立場由各站自行負責。',
    '想推薦新連結、修正資訊，或認為某個連結不該出現在這裡，歡迎透過發起團體的社群帳號聯絡我們。',
  ],
  credits: { initiated: '發起、規劃', site: '網頁工程 ・ 維護', suggest: '推薦連結', suggestText: '想加入新連結？透過發起團體的社群帳號聯絡我們' },
  redirectTitle: '重新導向',
  redirectGo: '前往頁面',
}

export type Dict = typeof zh

export const en: Dict = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  siteName: 'Taiwan Kink Navigator',
  siteShort: '台灣禁羈',
  siteDescription: "The front door to Taiwan's BDSM / kink community: events, resources, podcasts, writing and forums on one page.",
  switchLang: '中',
  switchLangLabel: 'Switch to Chinese / 中文',
  menuOpen: 'Open menu',
  menuClose: 'Close',
  menuLabel: 'Menu',
  timeOfDay: 'Time of day',
  day: 'Day',
  night: 'Night',
  autoNote: 'The theme follows your phone clock each visit. You can switch it for now.',
  manualNote: (label: string) => `Switched to ${label} for now. The next visit follows your clock again.`,
  language: 'Language',
  linksHeading: 'Links',
  siteHeading: 'Site',
  phase: {
    day: { eyebrow: 'Day District', h1: 'Daytime District', lede: "The front door to Taiwan's BDSM / kink community: events, resources, podcasts, writing and forums on one page." },
    night: { eyebrow: 'Night District', h1: 'Night District', lede: 'The same street looks different after dark. Different people, different stories. The links are still here.' },
  },
  h1Sub: 'Resource links',
  kvDayAlt: 'Daytime district key visual',
  kvNightAlt: 'Night district key visual',
  all: 'All',
  linksCount: (n: number) => `${n} link${n === 1 ? '' : 's'}`,
  sortedNote: 'Sorted by name.',
  categoryEyebrow: 'Category',
  backToLinks: '← Back to links',
  statementNotice: { tag: 'Statement · Oct 2026', text: 'Our statement on the Oct 3 Wanhua precinct raid →' },
  statementNav: 'Statement',
  statementEyebrow: 'Statement',
  statementTitle: 'Statement on the Oct 3 Raid',
  statementSub: 'Wanhua precinct raid, Ximending',
  published: (date: string) => `Published ${date}`,
  quotedFrom: 'Quoted · Taiwan LGBT+ Pride',
  readOriginal: 'Read the English version ↗',
  related: 'Related',
  aboutNav: 'About',
  aboutTitle: 'About this site',
  aboutEyebrow: 'About',
  aboutLede: "Taiwan Kink Navigator gathers the community's scattered resources on one page, so newcomers and regulars alike can find the way in.",
  aboutBody: [
    'We publish links, not articles. Every link is an event, resource, podcast, blog or forum run by community members; each site is responsible for its own content and views.',
    'To suggest a link, fix a detail, or ask for a link to be removed, reach us through the social accounts of the founding groups.',
  ],
  credits: { initiated: 'Initiated by', site: 'Site', suggest: 'Suggest a link', suggestText: 'Reach us through the social accounts of the founding groups' },
  redirectTitle: 'Redirecting',
  redirectGo: 'Continue',
}

export const dict: Record<Lang, Dict> = { zh, en }

export function t(lang: Lang): Dict {
  return dict[lang]
}
