// 控制首頁右下角的直播浮動卡片（紫色頭車宣講）。預設 false，卡片不會出現。
// 要重新顯示：把 SHOW_LIVE_POPUP 改成 true。網址留在下面的 liveStream，不用改。
export const SHOW_LIVE_POPUP: boolean = false

/** Stream URL for that card. Set to null to keep it hidden even when SHOW_LIVE_POPUP is true. */
export const liveStream: { url: string } | null = {
  url: 'https://youtube.com/live/T3ukxtoU0uE?feature=share',
}
