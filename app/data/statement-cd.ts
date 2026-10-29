import type { Lang } from '../i18n/index.ts'

export interface StatementContent {
  /** Publication date shown on the page (YYYY.MM.DD). */
  date: string
  /** Our own statement, one paragraph per entry. */
  paragraphs: string[]
  /** Quoted source: Taiwan LGBT+ Pride's 2026 theme statement supplement. */
  quote: { title: string; summary: string; url: string }
  /** `url` is either an external https URL or a site-internal path starting with `/`. */
  related: { label: string; url: string; meta: string }[]
}

// 草稿：導航站自己的聲明段落，待發起團體定稿後更新。
// 引用區只放摘要與原文連結；全文轉載須先取得臺灣同志遊行同意。
export const statementCd: Record<Lang, StatementContent> = {
  zh: {
    date: '2026.10.20',
    paragraphs: [
      '2026 年 10 月 3 日，臺北市政府警察局萬華分局進入西門町一間男同志 BDSM 主題酒吧執行搜索。作為台灣 kink 社群的資源入口，我們對執法過程中對社群、障礙者與性健康措施的對待，表達嚴正關切。',
      '我們認同並支持臺灣同志遊行在 2026 主題說明增補中的立場：所有多元的性實踐都值得被尊重；性多樣社群需要能平等交流、不必擔心公權力不當介入的空間。',
      '導航站會持續整理相關資源，包括友善的助人工作者與協助管道，陪伴受影響的社群成員。',
    ],
    quote: {
      title: '#2026 主題說明增補',
      summary: '針對 10/3 萬華分局搜索事件的增補說明：回顧 1997 年常德街至 2025 年臺中會館的歷史、指出媒體獵奇視角與將保險套列為證物的問題、警方對障礙者情慾的陌生，並以「性階層」說明禁羈實踐者至今仍被視為「壞的性」。全文請見原貼文。',
      url: 'https://www.facebook.com/100067198980712/posts/1445435101039776/',
    },
    related: [
      { label: '各界聲援聲明與行動整理', url: '/statement/cd/solidarity', meta: '持續更新' },
      { label: '2026 同志遊行紫色大隊：聲援單位與宣講', url: '/statement/cd/purple', meta: '持續更新' },
      { label: '【聯合聲明】北市府應徹查萬華分局搜索同志店家爭議', url: 'https://www.taiwanpride.lgbt/announcement/2026104', meta: '2026/10/4' },
      { label: '台北市政府新聞稿：回應萬華同志酒吧搜索爭議，說明調查進度、研訂執法指引及社群支持措施', url: 'https://www.gov.taipei/News_Content.aspx?n=F0DDAF49B89E9413&sms=72544237BBE4C5F6&s=CF00CDC3FDA247BA', meta: '2026/10/29' },
      { label: '2026 主題說明｜華文版', url: 'https://www.taiwanpride.lgbt/2026-theme-statement-zh', meta: 'taiwanpride.lgbt' },
      { label: '2026 主題說明｜臺文版', url: 'https://www.taiwanpride.lgbt/2026-theme-statement-taigi', meta: 'taiwanpride.lgbt' },
      { label: '禁羈友善助人工作者資源網', url: 'https://therapist.smer.today/', meta: '資源' },
    ],
  },
  en: {
    date: '2026.10.20',
    paragraphs: [
      'On 3 October 2026, officers of the Wanhua Precinct, Taipei City Police, entered and searched a gay BDSM-themed bar in Ximending. As the entry point to Taiwan\'s kink community, we are gravely concerned by how the community, disabled patrons and safer-sex measures were treated during that operation.',
      'We stand with the position Taiwan LGBT+ Pride set out in its 2026 theme statement supplement: every form of consensual sexual practice deserves respect, and sexually diverse communities need spaces where they can gather without fear of improper state intervention.',
      'We will keep collecting relevant resources, including kink-aware professionals and support channels, for community members affected by the raid.',
    ],
    quote: {
      title: '2026 Theme Statement — Supplement',
      summary: 'A supplement responding to the Oct 3 raid: it recalls police actions against queer venues from Changde Street (1997) to Taichung (2025), criticises sensational coverage and the treatment of condoms as evidence, notes officers\' unfamiliarity with disabled people\'s sexuality, and uses the "sex hierarchy" to explain why kink is still cast as "bad sex".',
      url: 'https://www.taiwanpride.lgbt/2026-theme-statement-en',
    },
    related: [
      { label: 'Solidarity statements and actions', url: '/en/statement/cd/solidarity', meta: 'Updated' },
      { label: 'Purple Contingent: supporting groups and speeches', url: '/en/statement/cd/purple', meta: 'Updated' },
      { label: 'Joint statement: Taipei must investigate the Wanhua raid (Chinese)', url: 'https://www.taiwanpride.lgbt/announcement/2026104', meta: '2026/10/4' },
      { label: 'Taipei City Government press release: investigation progress, enforcement guidelines and community support (Chinese)', url: 'https://www.gov.taipei/News_Content.aspx?n=F0DDAF49B89E9413&sms=72544237BBE4C5F6&s=CF00CDC3FDA247BA', meta: '2026/10/29' },
      { label: 'Original post on Facebook (Chinese)', url: 'https://www.facebook.com/100067198980712/posts/1445435101039776/', meta: 'facebook.com' },
      { label: 'Kink-Aware Professionals in Taiwan', url: 'https://therapist.smer.today/', meta: 'Resources' },
    ],
  },
}
