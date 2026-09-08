import { createController } from 'remix/router'
import { redirect } from 'remix/response/redirect'

import { assets } from '../assets.ts'
import { routes } from '../routes.ts'
import { HomePage, ContentPage } from '../ui/pages.tsx'

const pages = {
  storeAbout: ['Store', '禁羈介紹', 'About', routes.storeAbout.href()],
  storeWeb: ['Store', '禁羈友站', 'Web', routes.storeWeb.href()],
  schoolGrowing: ['School', '禁羈發展', 'Growing', routes.schoolGrowing.href()],
  schoolOrganize: ['School', '禁羈團體', 'Organize', routes.schoolOrganize.href()],
  cafePodcast: ['Cafe', '禁羈節目', 'Podcast', routes.cafePodcast.href()],
  cafeSpace: ['Cafe', '禁羈空間', 'Space', routes.cafeSpace.href()],
  marketPride: ['Market', '遊行', 'Pride', routes.marketPride.href()],
  marketFusion: ['Market', '蛻變', 'Fusion', routes.marketFusion.href()],
} as const

export default createController(routes, {
  actions: {
    async assets(context) {
      return (await assets.fetch(context.request)) ?? new Response('Not Found', { status: 404 })
    },
    home(context) {
      return context.render(<HomePage />)
    },
    store() { return redirect(routes.storeAbout.href(), 302) },
    school() { return redirect(routes.schoolGrowing.href(), 302) },
    cafe() { return redirect(routes.cafePodcast.href(), 302) },
    market() { return redirect(routes.marketPride.href(), 302) },
    storeAbout(context) { return context.render(<ContentPage page={pages.storeAbout} />) },
    storeWeb(context) { return context.render(<ContentPage page={pages.storeWeb} />) },
    schoolGrowing(context) { return context.render(<ContentPage page={pages.schoolGrowing} />) },
    schoolOrganize(context) { return context.render(<ContentPage page={pages.schoolOrganize} />) },
    cafePodcast(context) { return context.render(<ContentPage page={pages.cafePodcast} />) },
    cafeSpace(context) { return context.render(<ContentPage page={pages.cafeSpace} />) },
    marketPride(context) { return context.render(<ContentPage page={pages.marketPride} />) },
    marketFusion(context) { return context.render(<ContentPage page={pages.marketFusion} />) },
    legacy1() { return redirect(routes.home.href(), 301) },
    legacy2() { return redirect(routes.storeAbout.href(), 301) },
    legacy3() { return redirect(routes.storeWeb.href(), 301) },
    legacy4() { return redirect(routes.cafePodcast.href(), 301) },
    legacy5() { return redirect(routes.cafeSpace.href(), 301) },
    legacy6() { return redirect(routes.schoolGrowing.href(), 301) },
    legacy7() { return redirect(routes.schoolOrganize.href(), 301) },
    legacy8() { return redirect(routes.marketPride.href(), 301) },
    legacy9() { return redirect(routes.marketFusion.href(), 301) },
  },
})
