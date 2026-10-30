import { execFileSync } from 'node:child_process'

import type { Lang } from '../i18n/index.ts'

/** Timezone the "updated at" footer line is displayed in. */
const displayTimeZone = 'Asia/Taipei'

function latestCommitDate(): Date {
  try {
    const iso = execFileSync('git', ['log', '-1', '--format=%cI'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()
    const date = new Date(iso)
    if (!Number.isNaN(date.getTime())) return date
  } catch {
    // Not a git checkout (or git missing): fall back to the build time below.
  }
  return new Date()
}

/** When the site content was last updated: the latest commit at build time. */
export const siteUpdatedAt: Date = latestCommitDate()

/** Formats the update time to the minute in Taiwan time, e.g. `2026/10/30 16:03`. */
export function formatUpdatedAt(date: Date, lang: Lang): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: displayTimeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(date)
  const get = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? ''
  const separator = lang === 'zh' ? '/' : '-'
  return `${get('year')}${separator}${get('month')}${separator}${get('day')} ${get('hour')}:${get('minute')}`
}
