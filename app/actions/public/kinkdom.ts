type Phase = 'day' | 'night'

const root = document.documentElement
let phase: Phase = phaseByHour(new Date().getHours())
let manuallySelected = false

function phaseByHour(hour: number): Phase { return hour >= 6 && hour < 19 ? 'day' : 'night' }

function apply() {
  root.dataset.phase = phase
  // Phase-specific copy ships in the HTML as data-day / data-night so it is already localized.
  document.querySelectorAll<HTMLElement>('[data-copy]').forEach((node) => {
    const text = node.dataset[phase]
    if (text) node.textContent = text
  })
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-mode]')
  buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.mode === phase)))
  const note = document.querySelector<HTMLElement>('[data-phase-note]')
  if (note) {
    const label = Array.from(buttons).find((button) => button.dataset.mode === phase)?.firstChild?.textContent ?? phase
    note.textContent = manuallySelected ? (note.dataset.manualNote ?? '').replace('{label}', label) : (note.dataset.autoNote ?? '')
  }
  window.dispatchEvent(new CustomEvent('kinkdom:phase', { detail: phase }))
}

function tick() {
  const date = new Date()
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

// Category chips: highlight the one whose section is in view.
const chips = Array.from(document.querySelectorAll<HTMLAnchorElement>('.chip'))
const sections = Array.from(document.querySelectorAll<HTMLElement>('.link-section'))
if (chips.length && sections.length && 'IntersectionObserver' in window) {
  const setActive = (id: string) => chips.forEach((chip) => chip.classList.toggle('chip-active', chip.getAttribute('href') === `#${id}`))
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
    if (visible) setActive(visible.target.id)
  }, { rootMargin: '-120px 0px -60% 0px' })
  sections.forEach((section) => observer.observe(section))
}

apply(); tick(); setInterval(tick, 30000)
