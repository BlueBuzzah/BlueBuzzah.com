<script setup lang="ts">
import { useData } from 'vitepress'
import { keepHandy, stages, startHere } from './docs'

// Docs.vue renders this twice: the sticky side nav (900px and up) and inside the Contents disclosure (under 900px).
// idPrefix keeps the group labels' ids unique on the page.
defineProps<{ idPrefix: string }>()
const { page } = useData()
</script>

<template>
	<nav class="docs-nav" aria-label="Docs">
		<!-- Start here sits outside the numbered list so the stages announce as 1 to 7 -->
		<ul class="list-reset docs-nav__list">
			<li>
				<a class="docs-nav__link" :href="startHere.href" :aria-current="startHere.path === page.relativePath ? 'page' : undefined"><span>{{ startHere.title }}</span></a>
				<ul v-if="startHere.path === page.relativePath && page.headers?.length" class="list-reset docs-nav__list docs-nav__sub">
					<li v-for="h in page.headers" :key="h.slug"><a class="docs-nav__link docs-nav__sublink" :href="h.link"><span>{{ h.title }}</span></a></li>
				</ul>
			</li>
		</ul>
		<p class="overline text-muted docs-nav__group" :id="`${idPrefix}-build`">Build a pair</p>
		<ol class="list-reset docs-nav__list" :aria-labelledby="`${idPrefix}-build`">
			<li v-for="(doc, i) in stages" :key="doc.path">
				<a class="docs-nav__link" :href="doc.href" :aria-current="doc.path === page.relativePath ? 'page' : undefined"><span>{{ i + 1 }} <span aria-hidden="true">·</span>{{ ' ' }}{{ doc.title }}</span></a>
				<ul v-if="doc.path === page.relativePath && page.headers?.length" class="list-reset docs-nav__list docs-nav__sub">
					<li v-for="h in page.headers" :key="h.slug"><a class="docs-nav__link docs-nav__sublink" :href="h.link"><span>{{ h.title }}</span></a></li>
				</ul>
			</li>
		</ol>
		<p class="overline text-muted docs-nav__group" :id="`${idPrefix}-handy`">Keep handy</p>
		<ul class="list-reset docs-nav__list" :aria-labelledby="`${idPrefix}-handy`">
			<li v-for="doc in keepHandy" :key="doc.path">
				<a class="docs-nav__link" :href="doc.href" :aria-current="doc.path === page.relativePath ? 'page' : undefined"><span>{{ doc.title }}</span></a>
				<ul v-if="doc.path === page.relativePath && page.headers?.length" class="list-reset docs-nav__list docs-nav__sub">
					<li v-for="h in page.headers" :key="h.slug"><a class="docs-nav__link docs-nav__sublink" :href="h.link"><span>{{ h.title }}</span></a></li>
				</ul>
			</li>
		</ul>
	</nav>
</template>
