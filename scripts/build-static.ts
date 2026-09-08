import { cp, mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'

import { router } from '../app/router.ts'

const outputDir = path.resolve('dist')
const pagePaths = [
  '/',
  '/store',
  '/school',
  '/cafe',
  '/market',
  '/store/about',
  '/store/web',
  '/school/growing',
  '/school/organize',
  '/cafe/podcast',
  '/cafe/space',
  '/market/pride',
  '/market/fusion',
  '/blank-1',
  '/blank-2',
  '/blank-3',
  '/blank-4',
  '/blank-5',
  '/blank-6',
  '/blank-7',
  '/blank-8',
  '/blank-9',
] as const

const assetPattern = /\/assets\/[A-Za-z0-9._~!$&'()*+,;=:@%/-]+/g
const assetQueue = new Set<string>()

function publishedAssetPath(assetPath: string) {
  return assetPath.endsWith('.ts') ? `${assetPath.slice(0, -3)}.js` : assetPath
}

function rewriteAssetPaths(source: string) {
  return source.replace(assetPattern, publishedAssetPath)
}

function pageFile(urlPath: string) {
  return urlPath === '/'
    ? path.join(outputDir, 'index.html')
    : path.join(outputDir, urlPath.slice(1), 'index.html')
}

function redirectDocument(location: string) {
  const target = JSON.stringify(location)
  return `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=${location}"><link rel="canonical" href="${location}"><title>重新導向</title></head><body><script>location.replace(${target})</script><a href="${location}">前往頁面</a></body></html>`
}

async function writePage(urlPath: string) {
  const response = await router.fetch(new Request(`https://welcome2kinkdom.trea.org.tw${urlPath}`))
  const location = response.headers.get('location')
  const sourceHtml = location ? redirectDocument(location) : await response.text()

  if (!location && !response.ok) {
    throw new Error(`${urlPath} returned ${response.status}`)
  }

  for (const match of sourceHtml.matchAll(assetPattern)) assetQueue.add(match[0])
  const html = rewriteAssetPaths(sourceHtml)
  const destination = pageFile(urlPath)
  await mkdir(path.dirname(destination), { recursive: true })
  await writeFile(destination, html)
}

async function writeAssets() {
  for (const assetPath of assetQueue) {
    const response = await router.fetch(new Request(`https://welcome2kinkdom.trea.org.tw${assetPath}`))
    if (!response.ok) throw new Error(`${assetPath} returned ${response.status}`)

    let source = new Uint8Array(await response.arrayBuffer())
    const destination = path.join(outputDir, publishedAssetPath(assetPath).slice(1))
    await mkdir(path.dirname(destination), { recursive: true })

    if (response.headers.get('content-type')?.includes('javascript')) {
      const text = new TextDecoder().decode(source)
      for (const match of text.matchAll(assetPattern)) assetQueue.add(match[0])
      source = new TextEncoder().encode(rewriteAssetPaths(text))
    }

    await writeFile(destination, source)
  }
}

await rm(outputDir, { recursive: true, force: true })
await mkdir(outputDir, { recursive: true })
await cp('public', outputDir, { recursive: true })
await Promise.all(pagePaths.map(writePage))
await writeAssets()
await writeFile(path.join(outputDir, '.nojekyll'), '')
await writeFile(path.join(outputDir, 'CNAME'), 'welcome2kinkdom.trea.org.tw\n')
await cp(path.join(outputDir, 'index.html'), path.join(outputDir, '404.html'))

console.log(`Static site generated in ${outputDir}`)
