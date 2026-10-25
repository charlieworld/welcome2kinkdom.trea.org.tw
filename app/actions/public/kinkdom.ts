type Phase = 'day' | 'night'

const root = document.documentElement
let phase: Phase = phaseByHour(new Date().getHours())
let manuallySelected = false

function phaseByHour(hour: number): Phase { return hour >= 6 && hour < 19 ? 'day' : 'night' }

function apply() {
  root.dataset.phase = phase
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

// Home: the top bar floats transparent over the key visual and turns solid once page content scrolls under it.
const keyVisual = document.querySelector<HTMLElement>('.home .kv')
if (keyVisual && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => document.body.classList.toggle('bar-solid', !entry.isIntersecting), { rootMargin: '-57px 0px 0px 0px' }).observe(keyVisual)
}

apply(); tick(); setInterval(tick, 30000)

// Kink space page: filter the timeline and list by running / closed.
const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-filter]'))
if (filterButtons.length) {
  const rows = Array.from(document.querySelectorAll<HTMLElement>('[data-status]'))
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.filter
    filterButtons.forEach((other) => { const on = other === button; other.setAttribute('aria-pressed', String(on)); other.classList.toggle('chip-active', on) })
    rows.forEach((row) => { row.hidden = filter !== 'all' && row.dataset.status !== filter })
  }))
  // Year labels that would overflow the track move inside the bar's end when the
  // bar is wide enough to hold them; otherwise they sit just before the bar so
  // the text never lands on the dark track background in the bar's ink colour.
  document.querySelectorAll<HTMLElement>('.tl-row').forEach((row) => {
    const label = row.querySelector<HTMLElement>('.tl-years')
    const track = row.querySelector<HTMLElement>('.tl-track')
    const bar = row.querySelector<HTMLElement>('.tl-bar')
    if (!label || !track || !bar) return
    if (label.offsetLeft + label.offsetWidth <= track.offsetWidth) return
    if (bar.offsetWidth >= label.offsetWidth + 12) { row.classList.add('near-end'); return }
    row.classList.add('label-before')
    label.style.left = 'auto'
    label.style.right = `${track.offsetWidth - bar.offsetLeft + 5}px`
  })
}

// Chronicle: the rail fills as you scroll, year nodes light up once passed, events fade in, and the year strip tracks the year in view.
const chron = document.querySelector<HTMLElement>('[data-chron]')
if (chron) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const yearSections = Array.from(chron.querySelectorAll<HTMLElement>('.chron-year'))
  const stripYears = Array.from(document.querySelectorAll<HTMLElement>('[data-strip-year]'))
  const strip = document.querySelector<HTMLElement>('[data-chron-strip]')
  if (!reduced) chron.classList.add('is-animated')

  const update = () => {
    const rect = chron.getBoundingClientRect()
    const focus = window.innerHeight * 0.45
    const progress = Math.min(rect.height, Math.max(0, focus - rect.top))
    chron.style.setProperty('--progress', `${progress}px`)
    let current: HTMLElement | undefined
    for (const section of yearSections) {
      const top = section.getBoundingClientRect().top
      const past = top < focus
      section.classList.toggle('is-past', past)
      if (past) current = section
    }
    const year = current?.id.slice(1)
    stripYears.forEach((item) => {
      const on = item.dataset.stripYear === year
      item.classList.toggle('is-current', on)
      if (on && strip) {
        const left = item.offsetLeft - strip.clientWidth / 2 + item.offsetWidth / 2
        if (Math.abs(strip.scrollLeft - left) > 40) strip.scrollTo({ left, behavior: reduced ? 'auto' : 'smooth' })
      }
    })
  }
  let ticking = false
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { update(); ticking = false }) } }
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  update()

  if (!reduced && 'IntersectionObserver' in window) {
    const seen = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('is-seen'); seen.unobserve(entry.target) }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.15 })
    chron.querySelectorAll('[data-chron-event]').forEach((event) => seen.observe(event))
  } else {
    chron.querySelectorAll('[data-chron-event]').forEach((event) => event.classList.add('is-seen'))
  }
}
