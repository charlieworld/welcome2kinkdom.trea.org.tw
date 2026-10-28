import type { Localized } from '../i18n/index.ts'

/** Which kind of support a group of organisations offered. */
export type SolidarityCategory = 'action' | 'statement'

export interface SolidarityItem {
  /** Title of the statement, post or event, as published by the organisation. */
  title: Localized
  url: string
}

export interface SolidarityGroup {
  category: SolidarityCategory
  /** Organisations that issued the items together; joint statements list every signatory. */
  orgs: Localized[]
  items: SolidarityItem[]
}

/** Date of the sheet this file was synced from (YYYY.MM.DD). */
export const solidarityUpdated = '2026.10.28'

// 同步來源：「CD事件聲明_各界聲援（持續更新）」試算表 V2。
// 順序與分組依試算表；英文名稱以各團體官方英文名為準，無官方譯名者為本站翻譯。
export const solidarity: SolidarityGroup[] = [
  {
    category: 'action',
    orgs: [
      { zh: '台灣情感教育協會', en: 'Taiwan Affective Education Association' },
      { zh: '皮繩愉虐邦', en: 'BDSM Company' },
    ],
    items: [
      {
        title: { zh: '2026 年第 24 屆臺灣同志遊行紫色大隊頭車行動聲明', en: 'Purple Contingent lead-float action statement, 24th Taiwan LGBT+ Pride 2026' },
        url: 'https://www.trea.org.tw/post/%E7%9C%9F%E8%AA%A0%E6%84%9B%EF%BC%8C%E5%8B%87%E6%95%A2%E6%B4%BB-%E9%9D%A2%E5%B0%8D%E5%85%AC%E6%AC%8A%E5%8A%9B%E4%B8%8D%E7%95%B6%E5%B0%8D%E5%BE%85%EF%BC%8C%E6%88%91%E5%80%91%E5%BD%BC%E6%AD%A4%E5%90%8C%E5%9C%A8',
      },
    ],
  },
  {
    category: 'action',
    orgs: [
      { zh: '台灣伴侶權益推動聯盟', en: 'Taiwan Alliance to Promote Civil Partnership Rights' },
      { zh: '高雄醫學大學性別研究所', en: 'Graduate Institute of Gender Studies, Kaohsiung Medical University' },
    ],
    items: [
      {
        title: { zh: '【分享與共創工作坊】化恐懼為結盟力量：看見國家的性治理，畫出我們的遊行標語', en: 'Workshop: Turning Fear into Alliance — Seeing the State\'s Sexual Governance, Drawing Our Pride Slogans' },
        url: 'https://www.facebook.com/share/p/1AQVXjhQ1X/',
      },
    ],
  },
  {
    category: 'statement',
    orgs: [
      { zh: '台灣同志諮詢熱線協會', en: 'Taiwan Tongzhi (LGBTQ+) Hotline Association' },
      { zh: '台灣基地協會', en: 'Taiwan GDi Association' },
      { zh: '高雄市同志遊行聯盟協會', en: 'Kaohsiung Pride' },
      { zh: '台灣性別平等教育協會', en: 'Taiwan Gender Equity Education Association' },
      { zh: '臺灣彩虹公民行動協會', en: 'Taiwan Rainbow Civil Action Association' },
      { zh: '臺灣感染誌協會', en: 'Taiwan HIV Story Association' },
      { zh: '中華民國愛滋感染者權益促進會', en: 'Persons with HIV/AIDS Rights Advocacy Association of Taiwan' },
      { zh: '台灣同志家庭權益促進會', en: 'Taiwan LGBT Family Rights Advocacy' },
      { zh: '台灣彩虹平權大平台協會', en: 'Taiwan Equality Campaign' },
      { zh: '人權公約施行監督聯盟', en: 'Covenants Watch' },
    ],
    items: [
      {
        title: { zh: '聯合聲明：絕不容許重演歷史的壓迫，北市府應徹查萬華分局搜索同志店家爭議', en: 'Joint statement: Never again — Taipei City must fully investigate the Wanhua precinct raid on an LGBTQ+ venue' },
        url: 'https://www.amnesty.tw/node/25033',
      },
      {
        title: { zh: '已連署團體（持續更新）', en: 'Co-signing organisations (updated continuously)' },
        url: 'https://reurl.cc/OQngRy',
      },
    ],
  },
  {
    category: 'statement',
    orgs: [
      { zh: '民間司法改革基金會', en: 'Judicial Reform Foundation' },
      { zh: '台灣刑事辯護律師協會', en: 'Taiwan Criminal Defense Attorneys Association' },
      { zh: '人權公約施行監督聯盟', en: 'Covenants Watch' },
      { zh: '中華民國身心障礙聯盟', en: 'League for Persons with Disabilities, R.O.C.' },
      { zh: '台灣廢除死刑推動聯盟', en: 'Taiwan Alliance to End the Death Penalty' },
      { zh: '台灣勞工陣線', en: 'Taiwan Labour Front' },
      { zh: '國際特赦組織台灣分會', en: 'Amnesty International Taiwan' },
      { zh: '婦女新知基金會', en: 'Awakening Foundation' },
      { zh: '台灣伴侶權益推動聯盟', en: 'Taiwan Alliance to Promote Civil Partnership Rights' },
    ],
    items: [
      {
        title: { zh: '聲明｜萬華酒吧執法爭議　北市府勿以「言詞不當」掩蓋濫權　內政部、監察院應介入調查', en: 'Statement: Taipei must not hide abuse of power behind "inappropriate remarks" — the Ministry of the Interior and Control Yuan should investigate the Wanhua bar raid' },
        url: 'https://www.facebook.com/covenantswatch/posts/pfbid02GBDhcDpBnYL9zZDFxUXWz8Pq9jZV29m4qxma2NXSS5YJM5aiKfsrLBFZB3PFWaQql',
      },
    ],
  },
  {
    category: 'statement',
    orgs: [{ zh: '台灣性產業勞動者權益推動協會', en: 'Taiwan Sex Industry & Workers\' Rights Association' }],
    items: [
      {
        title: { zh: '情慾不是犯罪，抗議北市警方迫害同志——回應 Commander D 遭搜索與執法過當爭議', en: 'Desire is not a crime: protesting Taipei police persecution of LGBTQ+ people — on the Commander D raid and excessive enforcement' },
        url: 'https://tsiwra.org.tw/%e6%83%85%e6%85%be%e4%b8%8d%e6%98%af%e7%8a%af%e7%bd%aa%ef%bc%8c%e6%8a%97%e8%ad%b0%e5%8c%97%e5%b8%82%e8%ad%a6%e6%96%b9%e8%bf%ab%e5%ae%b3%e5%90%8c%e5%bf%97-%e5%9b%9e%e6%87%89commander-d/',
      },
      {
        title: { zh: '農安街事件重演？性勞推參與 10/4 緊急公民行動，反對警方騷擾同志場所', en: 'Nong\'an Street all over again? TSIWRA joins the Oct 4 emergency civic action against police harassment of LGBTQ+ venues' },
        url: 'https://tsiwra.org.tw/%e8%be%b2%e5%ae%89%e8%a1%97%e4%ba%8b%e4%bb%b6%e9%87%8d%e6%bc%94%ef%bc%9f%e6%80%a7%e5%8b%9e%e6%8e%a8%e5%8f%83%e8%88%87-10-4-%e7%b7%8a%e6%80%a5%e5%85%ac%e6%b0%91%e8%a1%8c%e5%8b%95%ef%bc%8c%e5%8f%8d/',
      },
      {
        title: { zh: '情慾不是犯罪｜性勞推呼籲停止以「善良風俗」之名侵害情慾工作者與多元性別群體', en: 'Desire is not a crime: stop invoking "public morals" to harm sex workers and gender-diverse communities' },
        url: 'https://tsiwra.org.tw/%e5%81%9c%e6%ad%a2%e4%bb%a5%e5%96%84%e8%89%af%e9%a2%a8%e4%bf%97%e4%b9%8b%e5%90%8d%e4%be%b5%e5%ae%b3%e5%a4%9a%e5%85%83%e6%80%a7%e5%88%a5%e7%be%a4%e9%ab%94/',
      },
    ],
  },
  {
    category: 'statement',
    orgs: [{ zh: '台灣伴侶權益推動聯盟', en: 'Taiwan Alliance to Promote Civil Partnership Rights' }],
    items: [
      {
        title: { zh: '【伴盟聲明】針對台北市萬華分局不當執法與歧視，伴盟呼籲蔣萬安市長誠摯道歉並啟動調查', en: 'TAPCPR statement: on the Wanhua precinct\'s improper enforcement and discrimination, Mayor Chiang Wan-an should sincerely apologise and open an investigation' },
        url: 'https://tapcpr.org/hot-news/press-release/2026/10/04/%E4%BC%B4%E7%9B%9F%E8%81%B2%E6%98%8E-%E9%87%9D%E5%B0%8D%E5%8F%B0%E5%8C%97%E5%B8%82%E8%90%AC%E8%8F%AF%E5%88%86%E5%B1%80%E4%B8%8D%E7%95%B6%E5%9F%B7%E6%B3%95%E8%88%87%E6%AD%A7%E8%A6%96-%E4%BC%B4%E7%9B%9F%E5%91%BC%E7%B1%B2%E8%94%A3%E8%90%AC%E5%AE%89%E5%B8%82%E9%95%B7%E8%AA%A0%E6%91%AF%E9%81%93%E6%AD%89%E4%B8%A6%E5%95%9F%E5%8B%95%E8%AA%BF%E6%9F%A5',
      },
      {
        title: { zh: '【伴盟聲明】西門同志酒吧搜索爭議不應止步於道歉：伴盟要求北市府啟動獨立調查並建立改善機制', en: 'TAPCPR statement: an apology is not enough — Taipei must launch an independent inquiry into the Ximen gay bar raid and build safeguards' },
        url: 'https://tapcpr.org/hot-news/press-release/2026/10/06/%E4%BC%B4%E7%9B%9F%E8%81%B2%E6%98%8E-%E8%A5%BF%E9%96%80%E5%90%8C%E5%BF%97%E9%85%92%E5%90%A7%E6%90%9C%E7%B4%A2%E7%88%AD%E8%AD%B0%E4%B8%8D%E6%87%89%E6%AD%A2%E6%AD%A5%E6%96%BC%E9%81%93%E6%AD%89%EF%BC%9A%E4%BC%B4%E7%9B%9F%E8%A6%81%E6%B1%82%E5%8C%97%E5%B8%82%E5%BA%9C%E5%95%93%E5%8B%95%E7%8D%A8%E7%AB%8B%E8%AA%BF%E6%9F%A5%E4%B8%A6%E5%BB%BA%E7%AB%8B%E6%94%B9%E5%96%84%E6%A9%9F%E5%88%B6',
      },
    ],
  },
  {
    category: 'statement',
    orgs: [{ zh: '台灣警察工作權益推動協會', en: 'Taiwan Police Labour Rights Association' }],
    items: [
      {
        title: { zh: '警察不能只停留在進步與保守的夾縫間——台灣警察工作權益推動協會就近期 BDSM 酒吧執法爭議事件聲明', en: 'Police cannot stay wedged between progress and conservatism — statement on the recent BDSM bar enforcement controversy' },
        url: 'https://www.facebook.com/policeright.tw/posts/pfbid02p9HCv9b8ZK5TEGDSwDi2dXAYLwMDKWjk6sXFmD7ZxtnbcZQ3pk1cWANvrSkEcEAJl',
      },
    ],
  },
  {
    category: 'statement',
    orgs: [{ zh: '臺灣師範大學學生會', en: 'National Taiwan Normal University Student Association' }],
    items: [
      {
        title: { zh: '臺師大學生會針對北市同志酒吧遭警方不當執法聲明', en: 'NTNU Student Association statement on the improper police action against a Taipei gay bar' },
        url: 'https://www.facebook.com/ntnustu/posts/pfbid06cDT6ino5m1Xia2JsXQ2wGSkG118L79EvN9u6HHccfcEZNRAjLioVP7Z4fb4G2sHl',
      },
    ],
  },
]

/** Distinct organisations across every group, in first-appearance order. */
export function solidarityOrgs(groups: SolidarityGroup[] = solidarity): Localized[] {
  const seen = new Set<string>()
  const result: Localized[] = []
  for (const group of groups) {
    for (const org of group.orgs) {
      if (seen.has(org.zh)) continue
      seen.add(org.zh)
      result.push(org)
    }
  }
  return result
}

/** Hostname shown as the link's meta label, e.g. "tapcpr.org". */
export function linkHost(url: string): string {
  return new URL(url).hostname.replace(/^www\./, '')
}
