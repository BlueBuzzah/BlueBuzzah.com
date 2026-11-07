import { existsSync } from 'node:fs'
import { rm } from 'node:fs/promises'
import { join } from 'node:path'
import { defineConfig } from 'vitepress'
import { updater } from './theme/docs'

const site = 'https://bluebuzzah.com'
const organization = {
	'@type': 'Organization',
	'@id': `${site}/#organization`,
	name: 'BlueBuzzah Partners',
	alternateName: 'BlueBuzzah',
	url: `${site}/`,
	logo: `${site}/assets/icon-512.png`,
	sameAs: ['https://github.com/BlueBuzzah']
}
const website = {
	'@type': 'WebSite',
	'@id': `${site}/#website`,
	name: 'BlueBuzzah',
	url: `${site}/`,
	inLanguage: 'en-US',
	publisher: { '@id': organization['@id'] }
}
const updaterApp = {
	'@type': 'SoftwareApplication',
	'@id': `${site}/docs/updater/#app`,
	name: 'BlueBuzzah Updater',
	description: 'A free desktop app that installs the firmware on BlueBuzzah gloves and sets how they buzz, over USB.',
	url: `${site}/docs/updater/`,
	applicationCategory: 'UtilitiesApplication',
	operatingSystem: 'macOS 10.15 or later, Windows 10 (64-bit) or later',
	offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
	license: 'https://github.com/BlueBuzzah/BlueBuzzah-Updater/blob/main/LICENSE',
	publisher: { '@id': organization['@id'] }
}

// page.md -> /page, docs/index.md -> /docs/ (cleanUrls)
const urlOf = (relativePath: string) => `${site}/${relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')}`

// Home > Docs > [Get the Updater >] page, each crumb [name, url]
function breadcrumb(relativePath: string, name: string, url: string) {
	const crumbs = [['BlueBuzzah', `${site}/`]]
	if (relativePath !== 'privacy.md' && relativePath !== 'terms.md') crumbs.push(['Docs', `${site}/docs/`])
	if (relativePath.startsWith('docs/updater/') && relativePath !== updater[0].path) crumbs.push([updater[0].title, `${site}${updater[0].href}`])
	if (relativePath !== 'docs/index.md') crumbs.push([name, url])
	return {
		'@type': 'BreadcrumbList',
		itemListElement: crumbs.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item }))
	}
}

/* The JSON-LD @graph of one page. No Medical* types, on purpose: BlueBuzzah is not a medical device (legal notices). */
function structuredData(relativePath: string, title: string, description: string, url: string, image: string, dateModified?: number) {
	const isHome = relativePath === 'index.md'
	const isDocs = relativePath.startsWith('docs/')
	const shared = { '@id': `${url}#page`, url, name: title, headline: title, description, image, inLanguage: 'en-US', isPartOf: { '@id': website['@id'] } }
	const page = isDocs
		? { '@type': 'TechArticle', ...shared, author: { '@id': organization['@id'] }, publisher: { '@id': organization['@id'] }, dateModified: dateModified && new Date(dateModified).toISOString() }
		: { '@type': 'WebPage', ...shared }
	return {
		'@context': 'https://schema.org',
		'@graph': [
			organization,
			website,
			page,
			...(isHome ? [] : [breadcrumb(relativePath, title, url)]),
			...(isHome || relativePath === updater[0].path ? [updaterApp] : [])
		]
	}
}

/* MPA mode ships no framework JavaScript: every page is static HTML, and src/public/js/theme.js and site.js do the
   rest, as before the move to VitePress. appearance: false stops VitePress's own dark-mode script, which would fight
   theme.js. Everything the pages link lives unchanged in src/public/. */
export default defineConfig({
	lang: 'en',
	mpa: true,
	appearance: false,
	titleTemplate: false,
	scrollOffset: 0,
	// links omit .html; the files keep it, so GitHub Pages serves both /privacy and /privacy.html
	cleanUrls: true,
	// git dates for dateModified and the sitemap; deploy.yml checks out full history so these stay real
	lastUpdated: true,
	// home, privacy and terms keep their bodies in .vue files, so their .md dates say nothing: no lastmod for them
	sitemap: { hostname: site, transformItems: (items) => items.map((item) => (item.url.startsWith('docs') ? item : { ...item, lastmod: undefined })) },
	markdown: {
		// no "#" permalink inside each heading: without VitePress's default theme it's a stray, empty focusable link
		anchor: { permalink: false }
	},
	head: [
		// sets data-theme before first paint, so it blocks and comes before the stylesheets (web.md Technical)
		['script', { src: '/js/theme.js' }],
		['link', { rel: 'preload', href: '/css/fonts/lexend-latin-wght-normal.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
		['link', { rel: 'preload', href: '/css/fonts/atkinson-hyperlegible-next-latin-wght-normal.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
		['link', { rel: 'stylesheet', href: '/css/tokens.css' }],
		['link', { rel: 'stylesheet', href: '/css/bundle.css' }],
		['link', { rel: 'stylesheet', href: '/css/site.css' }],
		['link', { rel: 'stylesheet', href: '/css/docs.css' }],
		['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicon-32.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicon-16.png' }],
		['link', { rel: 'apple-touch-icon', href: '/assets/apple-touch-icon-180.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['meta', { name: 'apple-mobile-web-app-title', content: 'BlueBuzzah' }],
		['meta', { name: 'theme-color', content: '#080c1b' }],
		['script', { src: '/js/site.js', defer: '' }]
	],
	// docs pages: the <title> names the docs; the <h1> (Docs.vue) keeps the plain frontmatter title
	transformPageData(pageData) {
		const { page, title, shareTitle } = pageData.frontmatter
		if (page === 'docs') pageData.title = `${shareTitle ?? title} - BlueBuzzah docs`
	},
	// canonical URL, Open Graph, Twitter card and JSON-LD for every page, from its frontmatter
	transformHead({ siteConfig, pageData, description }) {
		const { relativePath, frontmatter: fm, lastUpdated } = pageData
		if (!fm.page) return // the 404 page, which buildEnd deletes
		const title = fm.shareTitle ?? fm.title
		const url = urlOf(relativePath)
		const card = `assets/og/${relativePath.replace(/\.md$/, '').replace(/\//g, '-')}.png`
		const image = `${site}/${existsSync(join(siteConfig.srcDir, 'public', card)) ? card : 'assets/og-image.png'}`
		const jsonLd = JSON.stringify(structuredData(relativePath, title, description, url, image, lastUpdated)).replace(/</g, '\\u003c')
		return [
			['link', { rel: 'canonical', href: url }],
			['meta', { property: 'og:type', content: relativePath.startsWith('docs/') ? 'article' : 'website' }],
			['meta', { property: 'og:url', content: url }],
			['meta', { property: 'og:site_name', content: 'BlueBuzzah' }],
			['meta', { property: 'og:locale', content: 'en_US' }],
			['meta', { property: 'og:title', content: title }],
			['meta', { property: 'og:description', content: description }],
			['meta', { property: 'og:image', content: image }],
			['meta', { property: 'og:image:width', content: '1200' }],
			['meta', { property: 'og:image:height', content: '630' }],
			['meta', { property: 'og:image:alt', content: `The BlueBuzzah logo beside the words ${relativePath === 'index.md' ? 'Open vCR Stimulation System' : title}, on a navy background.` }],
			['meta', { name: 'twitter:card', content: 'summary_large_image' }],
			['script', { type: 'application/ld+json' }, jsonLd]
		]
	},
	// MPA mode writes a blank 404.html; without it GitHub Pages serves its own 404, as before
	buildEnd: (site) => rm(join(site.outDir, '404.html'), { force: true })
})
