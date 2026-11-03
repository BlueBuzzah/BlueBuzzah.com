<script setup lang="ts">
// icon names are bundle.js TONE_ICON.
// The slot takes Markdown: leave a blank line before and after it, so it renders as paragraphs.
withDefaults(defineProps<{ tone?: 'info' | 'success' | 'warning' | 'danger'; title?: string }>(), { tone: 'info' })
const icons = { info: 'info', success: 'circle-check', warning: 'triangle-alert', danger: 'octagon-alert' }
</script>

<template>
	<!-- mirrors bundle.js Banner (DS import 1793723291-7e67) -->
	<div :class="['bb-banner', `bb-banner--${tone}`, { 'bb-banner--untitled': !title }]">
		<svg class="bb-icon bb-banner__icon" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use :href="`/assets/icons/${icons[tone]}.svg#icon`"/></svg>
		<div class="bb-banner__body">
			<p v-if="title" class="bb-banner__title">{{ title }}</p>
			<div class="bb-banner__text"><slot /></div>
		</div>
	</div>
</template>
