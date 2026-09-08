type Phase = 'day' | 'night'

const copy = {
  day: { label:'白天', eyebrow:'Day District', h1:'白天街區', h1en:'• Day', lede:'一座白天與夜晚各有樣貌的城市。走進便利商店、學校、咖啡廳與市集，認識禁羈社群。' },
  night: { label:'夜晚', eyebrow:'Night District', h1:'夜晚街區', h1en:'• Night', lede:'夜裡的城市有另一種樣貌。同一條街，不同的人、不同的故事。' },
} as const

const root = document.documentElement
let phase: Phase = phaseByHour(new Date().getHours())
let manuallySelected = false

function phaseByHour(hour: number): Phase { return hour >= 6 && hour < 19 ? 'day' : 'night' }
function currentPhase(): Phase { return phase }
function setText(selector: string, value: string) { const node = document.querySelector(selector); if (node) node.textContent = value }

function apply() {
  const current = copy[phase]
  root.dataset.phase = phase
  for (const key of ['eyebrow', 'h1', 'h1en', 'lede'] as const) setText(`[data-copy="${key}"]`, current[key])
  setText('[data-clock-note]', manuallySelected ? `已暫時切換為${current.label}` : '依你的手機時間自動切換')
  setText('[data-phase-note]', manuallySelected ? `已暫時切換為「${current.label}」，重新進入頁面時會再次偵測時間。` : '每次進入頁面會依手機時間顯示，也可以暫時切換。')
  document.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.mode === phase)))
  window.dispatchEvent(new CustomEvent('kinkdom:phase', { detail: phase }))
}

function tick() {
  const date = new Date()
  setText('[data-clock]', `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`)
  if (!manuallySelected && phase !== phaseByHour(date.getHours())) { phase = phaseByHour(date.getHours()); apply() }
}

const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-button]')
const sheet = document.querySelector<HTMLElement>('[data-sheet]')
let lastFocused: HTMLElement | null = null
function openMenu(open: boolean) {
  document.body.classList.toggle('menu-open', open)
  document.body.style.overflow = open ? 'hidden' : ''
  menuButton?.setAttribute('aria-expanded', String(open))
  sheet?.setAttribute('aria-hidden', String(!open))
  if (open) { lastFocused = document.activeElement as HTMLElement; sheet?.focus() } else { lastFocused?.focus() }
}

menuButton?.addEventListener('click', () => openMenu(!document.body.classList.contains('menu-open')))
document.querySelector('[data-close-menu]')?.addEventListener('click', () => openMenu(false))
document.querySelector('[data-scrim]')?.addEventListener('click', () => openMenu(false))
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') openMenu(false) })
document.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach((button) => button.addEventListener('click', () => {
  phase = button.dataset.mode as Phase
  manuallySelected = true
  apply()
}))

apply(); tick(); setInterval(tick,30000)
