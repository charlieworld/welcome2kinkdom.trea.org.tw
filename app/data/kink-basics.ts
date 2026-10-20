import type { Lang } from '../i18n/index.ts'

// Source: 禁羈專頁內容 (Google Doc), chapter 二、基礎知識. The page is chapter-based so later
// chapters from the same document can be appended to `chapters` without touching the UI.

export interface BasicsSection {
  id: string
  heading: string
  /** Optional intro paragraph under the heading. */
  intro?: string
  /** One of three section shapes: a definition card, numbered principles, or acronym tiles. */
  body:
    | { kind: 'definition'; term: string; text: string }
    | { kind: 'principles'; items: { title: string; text: string }[] }
    | { kind: 'acronyms'; items: { short: string; name: string; full: string }[] }
}

export interface BasicsChapter {
  id: string
  /** Chapter number as shown in the source document, e.g. "二". */
  number: string
  title: string
  sections: BasicsSection[]
}

export interface BasicsContent {
  eyebrow: string
  title: string
  sub: string
  lede: string
  /** Opening words before the first chapter. */
  opening: string
  chapters: BasicsChapter[]
  /** Closing words after the last chapter. */
  closing: string
}

export const kinkBasics: Record<Lang, BasicsContent> = {
  zh: {
    eyebrow: '基礎知識 Basics',
    title: '認識禁羈',
    sub: '涵義 · 核心精神 · 互動原則',
    lede: '第一次接觸的人從這裡開始：禁羈是什麼、社群看重什麼、互動前要先知道的事。',
    opening: '關於禁羈，每個人都可能有不同的理解與感受。我們在這裡分享自己的想法，也珍惜每一種不同的聲音。願這些文字成為探索的起點，陪伴你慢慢尋找屬於自己的答案。',
    closing: '禁羈不該由任何人替你定義，你的感受、經驗與思考，同樣珍貴。願我們的分享帶來一些啟發，也願你始終保有自由，走出屬於自己的道路。',
    chapters: [
      {
        id: 'basics',
        number: '二',
        title: '基礎知識',
        sections: [
          {
            id: 'meaning',
            heading: '禁羈的涵義',
            body: {
              kind: 'definition',
              term: '禁羈（Kink）',
              text: '是涵蓋「皮繩愉虐（BDSM）」在內的一種更廣泛的統稱，意指在平等溝通和自主同意的基礎上，共同滿足彼此可能與主流想像不同的親密情感或慾望。',
            },
          },
          {
            id: 'spirit',
            heading: '禁羈文化的核心精神',
            intro: '禁羈文化鼓勵人在具備多元友善及風險意識的前提下，探索自身的親密需求與界線，也尊重他人的親密需求與界線，並在互動時盡力照護彼此的身心安全。',
            body: {
              kind: 'principles',
              items: [
                { title: '多元友善', text: '理解每個人的親密需求與界線都可能不同，並用開放與好奇的態度看待彼此的差異。' },
                { title: '風險意識', text: '明白所有的親密互動都有風險，互動前應先了解可能的負面後果，並確認彼此都有能力認知並自主決定承擔風險。' },
                { title: '探索自己', text: '願意透過感受、提問與嘗試，發現並擁抱自己獨特的情感和慾望偏好，進而認識自己的親密需求與界線。' },
                { title: '尊重他人', text: '尊重每個人說「要」或「不要」的權利，邀約互動時宜創造讓對方容易說「不」的氛圍；互動前應確認彼此的身心界線，並取得積極同意；互動中彼此都應持續確認對方的狀態與意願，即使約定了停止互動的安全詞，也要留意對方是否進入難以表達的狀態。' },
                { title: '重視安全', text: '在互動前，彼此都應具備相關安全知識，誠實告知對方自身的能力限制和此刻的身心狀態；互動時彼此都應留意自己的身心感受，在感覺不舒服時即時告知對方並共同處理；互動後應關懷彼此的感受，並對負面後果彼此支持、共同面對。' },
              ],
            },
          },
          {
            id: 'principles',
            heading: '國際上常見的禁羈互動原則',
            body: {
              kind: 'acronyms',
              items: [
                { short: 'SSC', name: '安全、理智、合意', full: 'Safe, Sane, Consensual' },
                { short: 'RACK', name: '有風險意識的合意禁羈', full: 'Risk-Aware Consensual Kink' },
                { short: 'PRICK', name: '個人責任、知情合意的禁羈', full: 'Personal Responsibility, Informed Consensual Kink' },
                { short: 'CCC', name: '承諾、關懷、合意', full: 'Committed, Compassionate, Consensual' },
                { short: '4Cs', name: '關懷、溝通、合意、謹慎', full: 'Caring, Communication, Consent, Caution' },
              ],
            },
          },
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Basics',
    title: 'Understanding Kink',
    sub: 'Meaning · core values · principles of play',
    lede: 'Start here if you are new: what kink is, what the community cares about, and what to know before you play.',
    opening: 'Everyone may understand and feel kink differently. Here we share our own thoughts and treasure every different voice. May these words be a starting point for exploration, keeping you company as you slowly find answers of your own.',
    closing: 'No one should define kink for you; your feelings, experiences and thinking are just as precious. May what we share bring some inspiration, and may you always keep your freedom and walk a path that is your own.',
    chapters: [
      {
        id: 'basics',
        number: '2',
        title: 'Basics',
        sections: [
          {
            id: 'meaning',
            heading: 'What kink means',
            body: {
              kind: 'definition',
              term: 'Kink (禁羈)',
              text: 'is a broad umbrella term that includes BDSM. It refers to meeting each other\'s intimate feelings or desires, which may differ from mainstream expectations, on the basis of equal communication and freely given consent.',
            },
          },
          {
            id: 'spirit',
            heading: 'The core values of kink culture',
            intro: 'Kink culture encourages people, with openness to diversity and awareness of risk, to explore their own intimate needs and limits, to respect those of others, and to look after each other\'s physical and mental safety when they play.',
            body: {
              kind: 'principles',
              items: [
                { title: 'Openness to diversity', text: 'Understand that everyone\'s intimate needs and limits can differ, and meet those differences with openness and curiosity.' },
                { title: 'Risk awareness', text: 'Every intimate interaction carries risk. Learn the possible negative outcomes beforehand, and make sure each person is able to recognise the risk and decide for themselves whether to take it.' },
                { title: 'Exploring yourself', text: 'Be willing to discover and embrace your own feelings and desires through sensing, asking and trying, and so come to know your own intimate needs and limits.' },
                { title: 'Respecting others', text: 'Respect everyone\'s right to say yes or no. When inviting someone to play, make it easy for them to decline. Confirm each other\'s physical and mental limits beforehand and obtain active consent; keep checking in on the other person\'s state and willingness during play, and even with a safeword agreed, watch for them slipping into a state where they cannot express themselves.' },
                { title: 'Valuing safety', text: 'Before play, both should have the relevant safety knowledge and be honest about their limits and how they are feeling right now. During play, pay attention to your own body and mind, and say so at once if something feels wrong so you can handle it together. Afterwards, check in on each other and face any negative consequences together.' },
              ],
            },
          },
          {
            id: 'principles',
            heading: 'Common international principles of play',
            body: {
              kind: 'acronyms',
              items: [
                { short: 'SSC', name: 'Safe, Sane, Consensual', full: '安全、理智、合意' },
                { short: 'RACK', name: 'Risk-Aware Consensual Kink', full: '有風險意識的合意禁羈' },
                { short: 'PRICK', name: 'Personal Responsibility, Informed Consensual Kink', full: '個人責任、知情合意的禁羈' },
                { short: 'CCC', name: 'Committed, Compassionate, Consensual', full: '承諾、關懷、合意' },
                { short: '4Cs', name: 'Caring, Communication, Consent, Caution', full: '關懷、溝通、合意、謹慎' },
              ],
            },
          },
        ],
      },
    ],
  },
}

/** The five core values, for the home teaser chips. */
export function coreValues(lang: Lang): string[] {
  for (const chapter of kinkBasics[lang].chapters) for (const section of chapter.sections) if (section.body.kind === 'principles') return section.body.items.map((item) => item.title)
  return []
}

/** The definition sentence, for the home teaser. */
export function definition(lang: Lang): { term: string; text: string } {
  for (const chapter of kinkBasics[lang].chapters) for (const section of chapter.sections) if (section.body.kind === 'definition') return section.body
  throw new Error('kink basics: no definition section')
}
