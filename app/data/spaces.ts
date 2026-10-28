import type { Lang, Localized } from '../i18n/index.ts'
import { pick } from '../i18n/index.ts'

export type SpaceKind = 'space' | 'munch' | 'party' | 'rope' | 'club'

export interface KinkSpace {
  name: string
  kind: SpaceKind
  /** First year of activity. */
  start: number
  /** Last year of activity; equal to CURRENT_YEAR means still running. */
  end: number
  host?: string
  venue?: string
  city?: string
  district?: string
  url?: string
}

/** Data as of this year: an `end` equal to it means the space is still running. */
export const CURRENT_YEAR = 2026
export const FIRST_YEAR = 2004

export const kindNames: Record<SpaceKind, Localized> = {
  space: { zh: '空間', en: 'Space' },
  munch: { zh: '聊天會・Munch', en: 'Munch' },
  party: { zh: '派對・主題活動', en: 'Parties & events' },
  rope: { zh: '繩會', en: 'Rope jam' },
  club: { zh: '學生社團', en: 'Student club' },
}

// Source: 台灣禁羈空間列表＆時間軸 by 虎斑 (Google Sheet, 禁羈空間列表及起始結束時間). Order follows the sheet.
export const spaces: readonly KinkSpace[] = [
  { name: '皮繩愉虐邦Munch', kind: 'munch', start: 2004, end: 2011, host: '皮繩愉虐邦', venue: '不固定', city: '台北市', district: '大安區', url: 'https://www.bdsmtw.com/2004/06/munch-0406-ning/' },
  { name: '脫殼日', kind: 'munch', start: 2011, end: 2012, host: '皮繩愉虐邦', venue: '直走咖啡', city: '台北市', district: '中正區' },
  { name: '皮繩脫殼日', kind: 'munch', start: 2012, end: 2015, host: '皮繩愉虐邦', venue: 'Commander D', city: '台北市', district: '萬華區' },
  { name: '香草脫殼日', kind: 'munch', start: 2016, end: 2021, host: '皮繩愉虐邦', venue: '半路咖啡', city: '台北市', district: '大安區' },
  { name: 'Commander 41', kind: 'space', start: 2011, end: 2025, venue: 'Commander 41', city: '台北市', district: '萬華區' },
  { name: 'Commander D', kind: 'party', start: 2012, end: 2026, host: 'Commander D', venue: 'Commander D', city: '台北市', district: '萬華區' },
  { name: '真繩會', kind: 'rope', start: 2013, end: 2020, host: 'Maya Mai', venue: '民權西路站附近', city: '台北市', district: '中山區' },
  { name: 'MySpace', kind: 'rope', start: 2017, end: 2023, host: 'Maya Mai', venue: 'MySpace', city: '台北市', district: '中山區', url: 'https://www.facebook.com/photo/?fbid=1693201827647798&set=a.474026168092840' },
  { name: 'BDSM同樂會', kind: 'space', start: 2017, end: 2026, venue: '南京復興站附近', city: '台北市', district: '中山區' },
  { name: '虐狐', kind: 'munch', start: 2013, end: 2026, venue: '雜貓窩', city: '台中市', district: '北區' },
  { name: '縛宵 ShibariVespers', kind: 'party', start: 2017, end: 2026, host: '縛.生', venue: 'ChoraStudio', city: '台北市', district: '松山區' },
  { name: '未命名.bnb', kind: 'party', start: 2017, end: 2026, venue: '未命名.bnb', city: '新北市', district: '中和區' },
  { name: '未命名(2).dio', kind: 'space', start: 2018, end: 2026, venue: '未命名(2).dio', city: '台北市', district: '文山區', url: 'https://www.facebook.com/unnamed1.dio/posts/pfbid08LWPNEHfNMByf3CDcQVYTAUj4uhQnUtog5pt3VxQycg4TLms1gsX1p9rCrQVPby6l' },
  { name: '未命名（3）.oh', kind: 'space', start: 2022, end: 2026, venue: '未命名（3）.oh', city: '新北市', district: '板橋區' },
  { name: '大立未命名', kind: 'space', start: 2021, end: 2026, city: '高雄市', district: '前金區' },
  { name: 'Tribo安全屋', kind: 'space', start: 2024, end: 2025, city: '台南市', district: '北區' },
  { name: '府城未命名', kind: 'space', start: 2025, end: 2026, city: '台南市', district: '北區' },
  { name: '沿山未命名', kind: 'space', start: 2024, end: 2026, city: '屏東縣', district: '新埤鄉' },
  { name: '台大BDSM社', kind: 'club', start: 2014, end: 2026, host: '台大BDSM社', city: '台北市', district: '大安區', url: 'https://www.ptt.cc/bbs/NTU/M.1410779495.A.329.html' },
  { name: '台師大多元性慾友善社', kind: 'club', start: 2016, end: 2026, host: '師大性善社', city: '台北市', district: '大安區', url: 'https://www.facebook.com/photo?fbid=652636338256893&set=a.459029776238722' },
  { name: '成大禁羈社', kind: 'club', start: 2019, end: 2026, host: '成大禁羈社', city: '台南市', district: '東區', url: 'https://x.com/nckukink/status/1186562774517735424' },
  { name: '清大愛慾實務社', kind: 'club', start: 2020, end: 2026, host: '清大愛慾實務社', city: '新竹市', district: '東區', url: 'https://nthuaiyu.medium.com/1091-%E5%AD%B8%E6%9C%9F%E5%9B%9E%E9%A1%A7-%E6%96%B0%E7%AB%B9%E5%94%AF%E4%B8%80%E4%B8%BB%E6%89%93%E6%83%85%E6%85%BE%E8%88%87%E6%80%A7%E7%9A%84%E7%A4%BE%E5%9C%98-%E5%9C%A8%E9%80%99%E5%80%8B%E5%AD%B8%E6%9C%9F%E5%81%9A%E4%BA%86%E4%BB%80%E9%BA%BC-2ae44ee0f4c' },
  { name: '東吳大學多元性愉悅研究社', kind: 'club', start: 2025, end: 2026, city: '台北市', district: '中正區', url: 'https://x.com/scubdsmclub/status/1904717761324204209' },
  { name: '貓樓上繩語沙龍', kind: 'space', start: 2018, end: 2026, city: '台北市', district: '大同區', url: 'https://www.catsdownstairs.com/about' },
  { name: 'BDSM康樂玩', kind: 'space', start: 2019, end: 2026, city: '新北市', district: '板橋區' },
  { name: '束室', kind: 'space', start: 2018, end: 2026, city: '新北市', district: '板橋區' },
  { name: '參拾捌號', kind: 'space', start: 2018, end: 2021, city: '新北市', district: '淡水區', url: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02P8F2Sm5RMREtgnNfLDG7eJg5dhc5nmnRhmsNdfLLE8jQ994H8bEmDyi4ReQf4Fyvl&id=100064907551471' },
  { name: '沐慾', kind: 'space', start: 2024, end: 2025, city: '台北市', district: '中山區' },
  { name: '光角LIMER', kind: 'space', start: 2022, end: 2026, city: '台北市', district: '中山區' },
  { name: 'SB玩具間', kind: 'space', start: 2020, end: 2026, city: '台中市', district: '西屯區' },
  { name: '月耍廢', kind: 'space', start: 2021, end: 2026, city: '新北市', district: '新莊區', url: 'https://www.facebook.com/photo/?fbid=409752387484986&set=a.163508079681018&__tn__=%2CO*F' },
  { name: '動物方程式', kind: 'space', start: 2023, end: 2026, city: '台中市', district: '西區' },
  { name: '伍拾玖', kind: 'space', start: 2022, end: 2026, city: '台北市', district: '北投區' },
  { name: '言葉の窩', kind: 'space', start: 2022, end: 2022, city: '台北市', district: '中正區' },
  { name: '䋚境', kind: 'space', start: 2023, end: 2026, city: '台北市', district: '中正區', url: 'https://x.com/ripple900202/status/1674437086483726343' },
  { name: '踏踏福神', kind: 'space', start: 2024, end: 2026, city: '台北市', district: '北投區' },
  { name: '吊點', kind: 'space', start: 2019, end: 2021, city: '台南市', district: '中西區' },
  { name: '縛室', kind: 'space', start: 2021, end: 2025, city: '台南市', district: '中西區' },
  { name: '底家', kind: 'space', start: 2022, end: 2026, city: '台南市', district: '東區' },
  { name: '童心園', kind: 'space', start: 2024, end: 2026, city: '高雄市', district: '左營區' },
  { name: '羈人方舟', kind: 'space', start: 2021, end: 2026, city: '新北市', district: '新莊區' },
  { name: '弗蕊雅莊園', kind: 'space', start: 2020, end: 2026, city: '新竹縣', url: 'https://x.com/freyjasmanor/status/1309763972518653952' },
  { name: '魔女的蜜室', kind: 'space', start: 2021, end: 2026, city: '台北市', district: '中山區' },
  { name: '遠足', kind: 'space', start: 2018, end: 2026, city: '高雄市', district: '新興區' },
  { name: '一紫苑', kind: 'space', start: 2024, end: 2026, city: '台北市', district: '中山區' },
  { name: '如繩坊', kind: 'space', start: 2025, end: 2026, city: '高雄市', district: '新興區' },
  { name: '喇勞 La Loud', kind: 'space', start: 2025, end: 2026, city: '新北市', district: '蘆洲區' },
  { name: '拘久屋', kind: 'space', start: 2025, end: 2026, city: '台中市', district: '大里區' },
  { name: "H'S BDSM學堂", kind: 'space', start: 2022, end: 2026, city: '新北市', district: '板橋區' },
  { name: '隨心部屋', kind: 'space', start: 2021, end: 2026, city: '高雄市', district: '左營區', url: 'https://www.instagram.com/p/CRwb7S4JX24/?img_index=1' },
  { name: '晝縛夜畜', kind: 'space', start: 2024, end: 2026, city: '台南市', district: '永康區' },
  { name: '禁羈會社', kind: 'space', start: 2025, end: 2026, city: '新北市', district: '板橋區' },
  { name: '史萊姆巢穴 StickySlime', kind: 'space', start: 2025, end: 2026, city: '台北市', district: '大安區' },
  { name: '赤巢', kind: 'space', start: 2026, end: 2026, city: '新北市', district: '三重區' },
  { name: '玩壞bar', kind: 'space', start: 2025, end: 2026, city: '桃園市', district: '桃園區' },
  { name: '打結拍', kind: 'space', start: 2026, end: 2026, city: '新竹市', district: '東區' },
  { name: '微慾MIYOKU', kind: 'space', start: 2026, end: 2026, city: '新北市', district: '板橋區' },
  { name: '努比之家', kind: 'space', start: 2025, end: 2026, city: '桃園市', district: '中壢區' },
  { name: '更衣間', kind: 'space', start: 2024, end: 2026, city: '台中市', district: '北區' },
  { name: '亞界色台北', kind: 'space', start: 2024, end: 2025, city: '台北市', district: '中山區' },
  { name: '亞界色台南', kind: 'space', start: 2024, end: 2025, city: '台南市', district: '安平區' },
  { name: '情趣紅酒坊', kind: 'space', start: 2023, end: 2026, city: '高雄市', district: '三民區', url: 'https://x.com/winepleasure_kh/status/1739246850736341313' },
  { name: '禁忌糖果屋', kind: 'space', start: 2026, end: 2026, city: '新竹市', district: '東區', url: 'https://x.com/SweetLocked_hsc/status/2066935997825466748' },
  { name: '祕密羈地', kind: 'space', start: 2026, end: 2026, city: '新北市', district: '中和區', url: 'https://x.com/secretkinkbase/status/2097017430375862566' },
  { name: '繩獸閣', kind: 'space', start: 2026, end: 2026, city: '新北市', district: '三重區', url: 'https://x.com/RopebeastHouse/status/2113579057036279812' },
]

export interface CityInfo {
  key: string
  name: Localized
  /** Column and row on the tile cartogram (west to east, north to south). */
  col: number
  row: number
}

/** Tile cartogram of Taiwan's counties and cities, roughly placed; not to scale. */
export const cities: readonly CityInfo[] = [
  { key: '台北市', name: { zh: '台北市', en: 'Taipei' }, col: 1, row: 0 },
  { key: '基隆市', name: { zh: '基隆市', en: 'Keelung' }, col: 2, row: 0 },
  { key: '桃園市', name: { zh: '桃園市', en: 'Taoyuan' }, col: 0, row: 1 },
  { key: '新北市', name: { zh: '新北市', en: 'New Taipei' }, col: 1, row: 1 },
  { key: '宜蘭縣', name: { zh: '宜蘭縣', en: 'Yilan' }, col: 2, row: 1 },
  { key: '新竹市', name: { zh: '新竹市', en: 'Hsinchu City' }, col: 0, row: 2 },
  { key: '新竹縣', name: { zh: '新竹縣', en: 'Hsinchu County' }, col: 1, row: 2 },
  { key: '苗栗縣', name: { zh: '苗栗縣', en: 'Miaoli' }, col: 0, row: 3 },
  { key: '台中市', name: { zh: '台中市', en: 'Taichung' }, col: 1, row: 3 },
  { key: '花蓮縣', name: { zh: '花蓮縣', en: 'Hualien' }, col: 2, row: 3 },
  { key: '彰化縣', name: { zh: '彰化縣', en: 'Changhua' }, col: 0, row: 4 },
  { key: '南投縣', name: { zh: '南投縣', en: 'Nantou' }, col: 1, row: 4 },
  { key: '雲林縣', name: { zh: '雲林縣', en: 'Yunlin' }, col: 0, row: 5 },
  { key: '嘉義市', name: { zh: '嘉義市', en: 'Chiayi City' }, col: 1, row: 5 },
  { key: '台東縣', name: { zh: '台東縣', en: 'Taitung' }, col: 2, row: 5 },
  { key: '嘉義縣', name: { zh: '嘉義縣', en: 'Chiayi County' }, col: 0, row: 6 },
  { key: '台南市', name: { zh: '台南市', en: 'Tainan' }, col: 1, row: 6 },
  { key: '高雄市', name: { zh: '高雄市', en: 'Kaohsiung' }, col: 0, row: 7 },
  { key: '屏東縣', name: { zh: '屏東縣', en: 'Pingtung' }, col: 1, row: 7 },
]

export function cityName(key: string | undefined, lang: Lang): string {
  if (!key) return lang === 'zh' ? '地點未填' : 'Location unknown'
  const city = cities.find((c) => c.key === key)
  return city ? pick(city.name, lang) : key
}

export function isOngoing(space: KinkSpace): boolean {
  return space.end >= CURRENT_YEAR
}

export interface CityCount { key: string; name: Localized; col: number; row: number; active: number; closed: number }

export function countsByCity(): CityCount[] {
  return cities.map((city) => ({
    ...city,
    active: spaces.filter((s) => s.city === city.key && isOngoing(s)).length,
    closed: spaces.filter((s) => s.city === city.key && !isOngoing(s)).length,
  }))
}

/** Number of spaces running in each year from FIRST_YEAR to CURRENT_YEAR. */
export function activePerYear(): { year: number; count: number }[] {
  const years: { year: number; count: number }[] = []
  for (let year = FIRST_YEAR; year <= CURRENT_YEAR; year++) {
    years.push({ year, count: spaces.filter((s) => s.start <= year && s.end >= year).length })
  }
  return years
}

/** Spaces ordered for the timeline: by start year, then by name (stroke order). */
export function timelineOrder(lang: Lang): KinkSpace[] {
  const collator = new Intl.Collator(lang === 'zh' ? 'zh-Hant-TW' : 'en')
  return [...spaces].sort((a, b) => a.start - b.start || collator.compare(a.name, b.name))
}

/** Spaces grouped by city, cities in cartogram order (north to south), unknown city last. */
export function spacesByCity(lang: Lang): { key: string | undefined; name: string; items: KinkSpace[] }[] {
  const collator = new Intl.Collator(lang === 'zh' ? 'zh-Hant-TW' : 'en')
  const groups = cities
    .map((city) => ({ key: city.key as string | undefined, name: pick(city.name, lang), items: spaces.filter((s) => s.city === city.key) }))
    .filter((group) => group.items.length > 0)
  const unknown = spaces.filter((s) => !s.city)
  if (unknown.length) groups.push({ key: undefined, name: cityName(undefined, lang), items: unknown })
  for (const group of groups) group.items.sort((a, b) => Number(isOngoing(b)) - Number(isOngoing(a)) || b.start - a.start || collator.compare(a.name, b.name))
  return groups
}
