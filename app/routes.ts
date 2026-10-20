import { get, route } from 'remix/routes'

export const routes = route({
  assets: get('/assets/*path'),
  home: '/',
  linksEvents: '/links/events',
  linksResources: '/links/resources',
  linksPodcasts: '/links/podcasts',
  linksWritings: '/links/writings',
  linksForums: '/links/forums',
  statementCd: '/statement/cd',
  about: '/about',
  kinkSpace: '/kink_space',
  homeEn: '/en',
  linksEventsEn: '/en/links/events',
  linksResourcesEn: '/en/links/resources',
  linksPodcastsEn: '/en/links/podcasts',
  linksWritingsEn: '/en/links/writings',
  linksForumsEn: '/en/links/forums',
  statementCdEn: '/en/statement/cd',
  aboutEn: '/en/about',
  kinkSpaceEn: '/en/kink_space',
  // Former Kinkdom section pages and Wix-era URLs, kept as permanent redirects.
  store: '/store',
  school: '/school',
  cafe: '/cafe',
  market: '/market',
  storeAbout: '/store/about',
  storeWeb: '/store/web',
  schoolGrowing: '/school/growing',
  schoolOrganize: '/school/organize',
  cafePodcast: '/cafe/podcast',
  cafeSpace: '/cafe/space',
  marketPride: '/market/pride',
  marketFusion: '/market/fusion',
  legacy1: '/blank-1',
  legacy2: '/blank-2',
  legacy3: '/blank-3',
  legacy4: '/blank-4',
  legacy5: '/blank-5',
  legacy6: '/blank-6',
  legacy7: '/blank-7',
  legacy8: '/blank-8',
  legacy9: '/blank-9',
})

/** Every page path the static build must render, derived from the route table. */
export const pagePaths = Object.entries(routes)
  .filter(([key]) => key !== 'assets')
  .map(([, r]) => (r as { href(): string }).href())
