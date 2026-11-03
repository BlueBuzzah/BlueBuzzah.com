<script setup lang="ts">
import { useData } from 'vitepress'
import DocsNav from './DocsNav.vue'
import { stages, startHere } from './docs'

/* Every docs page (frontmatter page: docs). Rendered once at build time (MPA mode ships no Vue), so everything here is
   static HTML: no client-side state, and it all works with JavaScript off. */
const { page, frontmatter: fm } = useData()

// stage pages (1-7) get the StageRail and Pager; Start here and Keep handy pages don't
const index = stages.findIndex((s) => s.path === page.value.relativePath)
const stage = index >= 0
const previous = index === 0 ? { hint: 'Previous', ...startHere } : index > 0 ? { hint: `Previous: stage ${index}`, ...stages[index - 1] } : null
const next = stage && index < stages.length - 1 ? { hint: `Next: stage ${index + 2}`, ...stages[index + 1] } : null
</script>

<template>
	<div class="container docs">
		<DocsNav class="docs-side" id-prefix="docs-side" />
		<details class="docs-contents">
			<summary class="bb-btn bb-btn--secondary bb-btn--full"><span class="bb-btn__label">Contents</span></summary>
			<DocsNav id-prefix="docs-contents" />
		</details>

		<main class="docs-main">
			<template v-if="stage">
				<!-- mirrors bundle.js StageRail (DS import 1793729877-6a2e) -->
				<nav class="bb-stagerail docs-rail" aria-label="Build stages">
					<ol class="bb-stagerail__list">
						<li v-for="(s, i) in stages" :key="s.path"><a class="bb-stagerail__link" :href="s.href" :aria-current="i === index ? 'step' : undefined"><span class="bb-stagerail__num">{{ i + 1 }}</span><span class="bb-stagerail__label">{{ s.short }}</span></a></li>
					</ol>
					<div class="bb-stagerail__dots" aria-hidden="true"><span v-for="(s, i) in stages" :key="s.path" :class="['bb-stagerail__dot', { 'bb-stagerail__dot--on': i === index }]"></span></div>
				</nav>
				<p class="overline text-muted">Stage {{ index + 1 }} of {{ stages.length }}</p>
			</template>
			<h1 class="headline docs-title">{{ fm.title }}</h1>
			<p v-if="fm.lead" class="body-l docs-lead">{{ fm.lead }}</p>

			<div v-if="fm.need || fm.tools || fm.figure" class="docs-intro">
				<!-- mirrors bundle.js Card (DS import 1793729877-6a2e), holding Checkbox rows -->
				<section v-if="fm.need || fm.tools" class="bb-card bb-card--lg docs-need" aria-labelledby="docs-need-title">
					<header class="bb-card__head"><div><h2 class="bb-card__title" id="docs-need-title">You'll need</h2></div></header>
					<ul v-if="fm.need" class="list-reset docs-need__list">
						<!-- mirrors bundle.js Checkbox (DS import 1793729877-6a2e) -->
						<li v-for="(item, i) in fm.need" :key="i"><label class="bb-check"><input type="checkbox" class="bb-check__input"><span class="bb-check__text"><span class="bb-check__label">{{ item.qty }} {{ item.label }}</span></span></label></li>
					</ul>
					<template v-if="fm.tools">
						<h3 class="overline text-muted docs-need__group">Tools</h3>
						<ul class="list-reset docs-need__list">
							<li v-for="(tool, i) in fm.tools" :key="i"><label class="bb-check"><input type="checkbox" class="bb-check__input"><span class="bb-check__text"><span class="bb-check__label">{{ tool }}</span></span></label></li>
						</ul>
					</template>
				</section>
				<Shot v-if="fm.figure" :src="fm.figure.src" :alt="fm.figure.alt" :caption="fm.figure.caption" />
			</div>

			<Content class="docs-body" />

			<!-- mirrors bundle.js Pager (DS import 1793729877-6a2e) -->
			<nav v-if="previous || next" class="bb-pager docs-pager" aria-label="Pages">
				<a v-if="previous" class="bb-pager__link bb-pager__link--prev" :href="previous.href"><svg class="bb-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/chevron-left.svg#icon"/></svg><span class="bb-pager__text"><span class="bb-pager__hint">{{ previous.hint }}</span><span class="bb-pager__title">{{ previous.title }}</span></span></a>
				<a v-if="next" class="bb-pager__link bb-pager__link--next" :href="next.href"><span class="bb-pager__text"><span class="bb-pager__hint">{{ next.hint }}</span><span class="bb-pager__title">{{ next.title }}</span></span><svg class="bb-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/chevron-right.svg#icon"/></svg></a>
			</nav>
		</main>

		<!-- mirrors bundle.js Lightbox (DS import 1793729877-6a2e): the page's one shared dialog, which site.js fills and opens -->
		<dialog class="bb-lightbox" aria-label="Image">
			<form method="dialog" class="bb-lightbox__bar"><button class="bb-lightbox__close"><svg class="bb-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/x.svg#icon"/></svg><span>Close</span></button></form>
			<img class="bb-lightbox__img" alt=""><p class="bb-lightbox__caption"></p>
		</dialog>
	</div>
</template>
