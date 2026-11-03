<script setup lang="ts">
import { stages } from './docs'

// Start here's list of the seven stages and its one primary button. Rendered from docs.ts, so it can't drift from the
// nav, StageRail and Pager. The root is a div: a top-level <ol> in the Markdown would be styled as steps.
</script>

<template>
	<div class="docs-stages">
		<ol class="list-reset docs-stages__list">
			<li v-for="(s, i) in stages" :key="s.path"><a class="docs-stages__link" :href="s.href"><span class="title-l docs-stages__num">{{ i + 1 }}</span><span>{{ s.title }}</span></a></li>
		</ol>
		<!-- mirrors bundle.js Button (DS import 1793729877-6a2e) -->
		<a class="bb-btn bb-btn--primary bb-btn--lg docs-stages__start" :href="stages[0].href"><span class="bb-btn__label">Start: {{ stages[0].title }}</span></a>
	</div>
</template>
