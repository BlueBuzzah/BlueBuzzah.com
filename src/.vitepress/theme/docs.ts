/* The docs pages, in order: the one list the docs nav, StageRail and Pager all read (Docs.vue). */

// path = the page's VitePress relativePath; href = its clean URL; short = its StageRail label
export interface DocPage { path: string; href: string; title: string; short?: string }

export const startHere: DocPage = { path: 'docs/index.md', href: '/docs/', title: 'Start here' }

// Build a pair: the guided track, numbered stages 1-7
export const stages: DocPage[] = [
	{ path: 'docs/parts.md', href: '/docs/parts', title: 'Get the parts', short: 'Parts' },
	{ path: 'docs/boards.md', href: '/docs/boards', title: 'Set up the boards', short: 'Boards' },
	{ path: 'docs/tactors.md', href: '/docs/tactors', title: 'Build the tactors', short: 'Tactors' },
	{ path: 'docs/gloves.md', href: '/docs/gloves', title: 'Fit the tactors in the gloves', short: 'Gloves' },
	{ path: 'docs/wiring.md', href: '/docs/wiring', title: 'Wire and test', short: 'Wiring' },
	{ path: 'docs/case.md', href: '/docs/case', title: 'Close the case', short: 'Case' },
	{ path: 'docs/first-session.md', href: '/docs/first-session', title: 'Your first session', short: 'First session' }
]

// Keep handy: reference pages, not in the StageRail or Pager
export const keepHandy: DocPage[] = [
	{ path: 'docs/lights.md', href: '/docs/lights', title: 'What the lights mean' },
	{ path: 'docs/troubleshooting.md', href: '/docs/troubleshooting', title: 'Troubleshooting' },
	{ path: 'docs/firmware.md', href: '/docs/firmware', title: 'Firmware and glove roles' },
	{ path: 'docs/safety.md', href: '/docs/safety', title: 'Safety and disclaimers' },
	{ path: 'docs/acknowledgements.md', href: '/docs/acknowledgements', title: 'Acknowledgements' }
]
