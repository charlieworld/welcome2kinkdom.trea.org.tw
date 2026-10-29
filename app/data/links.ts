import type { Lang, Localized } from '../i18n/index.ts'
import type { IconName } from '../ui/icons.tsx'
import { pick } from '../i18n/index.ts'

export type LinkCategory = 'events' | 'resources' | 'podcasts' | 'writings' | 'forums'

export interface SiteLink {
  category: LinkCategory
  name: Localized
  url: string
  note?: Localized
}

export interface CategoryInfo {
  key: LinkCategory
  name: Localized
  desc: Localized
  /** Lucide icon shown beside each link in the category. */
  icon: IconName
}

/** Categories in the order they appear on the page (same order as the source spreadsheet). */
export const categories: readonly CategoryInfo[] = [
  { key: 'events', name: { zh: '活動', en: 'Events' }, desc: { zh: '聚會、行事曆，想見到人從這裡開始。', en: 'Munches and calendars. Start here to meet people.' }, icon: 'calendar' },
  { key: 'resources', name: { zh: '工具', en: 'Tools' }, desc: { zh: '學術、助人工作者、自我探索。', en: 'Research, kink-aware professionals, self-discovery.' }, icon: 'file-text' },
  { key: 'podcasts', name: { zh: '節目', en: 'Podcasts' }, desc: { zh: '用聽的認識社群。', en: 'Get to know the community by ear.' }, icon: 'mic' },
  { key: 'writings', name: { zh: '文庫', en: 'Writings' }, desc: { zh: '部落格、日記、繩縛書寫。', en: 'Blogs, diaries and writing on rope.' }, icon: 'book-open' },
  { key: 'forums', name: { zh: '討論', en: 'Forums' }, desc: { zh: '公開討論區。', en: 'Public discussion boards.' }, icon: 'message-square' },
]

/** Every link on the site. Order here does not matter: lists are sorted at render time. */
export const links: readonly SiteLink[] = [
  { category: 'events', name: { zh: 'BDSM 行事曆', en: 'BDSM Calendar' }, url: 'https://todo.smertw.com/' },
  { category: 'events', name: { zh: 'BDSM 小白板', en: 'Taiwan BDSM Munch' }, url: 'https://bdsmer.link/' },
  { category: 'resources', name: { zh: '禁羈友善助人工作者資源網', en: 'Kink-Aware Professionals in Taiwan' }, url: 'https://therapist.smer.today/' },
  { category: 'resources', name: { zh: '中文 BDSM 學術策展', en: 'Kink Reference' }, url: 'https://kinkref.org/' },
  { category: 'resources', name: { zh: 'BDSM 性向測驗', en: 'The Potion' }, url: 'https://the-potion.com/' },
  { category: 'resources', name: { zh: 'Boundary Notes 項目喜好測驗', en: 'Boundary Notes' }, url: 'https://boundarynotes.com' },
  { category: 'podcasts', name: { zh: '好色喔！禁羈相談室｜BDSM 故事集' }, url: 'https://hsokinky.capy.tw/index.html' },
  { category: 'podcasts', name: { zh: 'sub有一種sub味' }, url: 'https://open.firstory.fm/user/subontheway' },
  { category: 'podcasts', name: { zh: 'BDSM蹺蹺板：聊聊你的愉虐人生' }, url: 'https://open.firstory.fm/user/bdsmseesaw/' },
  { category: 'podcasts', name: { zh: '嗨你有性趣嗎?' }, url: 'https://podcasts.apple.com/tw/podcast/%E5%97%A8%E4%BD%A0%E6%9C%89%E6%80%A7%E8%B6%A3%E5%97%8E/id1701954648' },
  { category: 'podcasts', name: { zh: '底層慾望' }, url: 'https://open.firstory.fm/user/masterkenta/' },
  { category: 'podcasts', name: { zh: '汪汪雜貨鋪｜人型犬大小事' }, url: 'https://joy.bio/wangzahuopu' },
  { category: 'podcasts', name: { zh: '無病聲吟' }, url: 'https://open.firstory.fm/user/doublevoice' },
  { category: 'writings', name: { zh: '補上慾望的缺口' }, url: 'http://blog.maizugirl.me/?zx=2b0487a87cf65d83' },
  { category: 'writings', name: { zh: 'Re: Sink 中年情慾交換日記' }, url: 'https://portaly.cc/ReSink' },
  { category: 'writings', name: { zh: 'S.Ink 情慾交換日記' }, url: 'https://sex-ink.blog.bdsmtw.com/' },
  { category: 'writings', name: { zh: '縛.生–關於繩縛的種種，來自愛繩之人。' }, url: 'https://shibaru.life/' },
  { category: 'forums', name: { zh: 'Dcard(BDSM板)', en: 'Dcard BDSM board' }, url: 'https://www.dcard.tw/f/bdsm' },
  { category: 'forums', name: { zh: '批踢踢實業坊(BDSM板)', en: 'PTT BDSM board' }, url: 'https://www.ptt.cc/bbs/BDSM/index.html' },
]

const collators: Record<Lang, Intl.Collator> = {
  // Traditional Chinese collation in ICU orders Han characters by stroke count; Latin names sort after them.
  zh: new Intl.Collator('zh-Hant-TW'),
  en: new Intl.Collator('en'),
}

export function sortLinks(items: readonly SiteLink[], lang: Lang): SiteLink[] {
  const collator = collators[lang]
  return [...items].sort((a, b) => collator.compare(pick(a.name, lang), pick(b.name, lang)))
}

export function linksIn(category: LinkCategory, lang: Lang): SiteLink[] {
  return sortLinks(links.filter((link) => link.category === category), lang)
}

export function categoryInfo(key: LinkCategory): CategoryInfo {
  const info = categories.find((category) => category.key === key)
  if (!info) throw new Error(`Unknown link category: ${key}`)
  return info
}

export function hostOf(url: string): string {
  return new URL(url).hostname.replace(/^www\./, '')
}
