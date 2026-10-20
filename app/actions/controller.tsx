import { createController } from 'remix/router'
import { redirect } from 'remix/response/redirect'

import { assets } from '../assets.ts'
import { routes } from '../routes.ts'
import { AboutPage, CategoryPage, HomePage, StatementPage } from '../ui/pages.tsx'

export default createController(routes, {
  actions: {
    async assets(context) {
      return (await assets.fetch(context.request)) ?? new Response('Not Found', { status: 404 })
    },
    home(context) { return context.render(<HomePage lang="zh" />) },
    linksEvents(context) { return context.render(<CategoryPage lang="zh" category="events" />) },
    linksResources(context) { return context.render(<CategoryPage lang="zh" category="resources" />) },
    linksPodcasts(context) { return context.render(<CategoryPage lang="zh" category="podcasts" />) },
    linksWritings(context) { return context.render(<CategoryPage lang="zh" category="writings" />) },
    linksForums(context) { return context.render(<CategoryPage lang="zh" category="forums" />) },
    statementCd(context) { return context.render(<StatementPage lang="zh" />) },
    about(context) { return context.render(<AboutPage lang="zh" />) },
    homeEn(context) { return context.render(<HomePage lang="en" />) },
    linksEventsEn(context) { return context.render(<CategoryPage lang="en" category="events" />) },
    linksResourcesEn(context) { return context.render(<CategoryPage lang="en" category="resources" />) },
    linksPodcastsEn(context) { return context.render(<CategoryPage lang="en" category="podcasts" />) },
    linksWritingsEn(context) { return context.render(<CategoryPage lang="en" category="writings" />) },
    linksForumsEn(context) { return context.render(<CategoryPage lang="en" category="forums" />) },
    statementCdEn(context) { return context.render(<StatementPage lang="en" />) },
    aboutEn(context) { return context.render(<AboutPage lang="en" />) },
    // Former Kinkdom section pages → the closest category.
    store() { return redirect(routes.about.href(), 301) },
    school() { return redirect(routes.linksResources.href(), 301) },
    cafe() { return redirect(routes.linksPodcasts.href(), 301) },
    market() { return redirect(routes.linksEvents.href(), 301) },
    storeAbout() { return redirect(routes.about.href(), 301) },
    storeWeb() { return redirect(routes.home.href(), 301) },
    schoolGrowing() { return redirect(routes.linksResources.href(), 301) },
    schoolOrganize() { return redirect(routes.linksForums.href(), 301) },
    cafePodcast() { return redirect(routes.linksPodcasts.href(), 301) },
    cafeSpace() { return redirect(routes.linksEvents.href(), 301) },
    marketPride() { return redirect(routes.linksEvents.href(), 301) },
    marketFusion() { return redirect(routes.linksEvents.href(), 301) },
    // Wix-era URLs.
    legacy1() { return redirect(routes.home.href(), 301) },
    legacy2() { return redirect(routes.about.href(), 301) },
    legacy3() { return redirect(routes.home.href(), 301) },
    legacy4() { return redirect(routes.linksPodcasts.href(), 301) },
    legacy5() { return redirect(routes.linksEvents.href(), 301) },
    legacy6() { return redirect(routes.linksResources.href(), 301) },
    legacy7() { return redirect(routes.linksForums.href(), 301) },
    legacy8() { return redirect(routes.linksEvents.href(), 301) },
    legacy9() { return redirect(routes.linksEvents.href(), 301) },
  },
})
