<script setup lang="ts">
// Ticks are not remembered after a reload. Each label is the row's whole text, so it is the accessible name.
defineProps<{ items: string[] }>()
</script>

<template>
	<!-- mirrors bundle.js Card (DS import 1793729877-6a2e), holding Checkbox rows -->
	<div class="bb-card bb-card--flat docs-checklist">
		<ul class="list-reset">
			<!-- mirrors bundle.js Checkbox (DS import 1793729877-6a2e) -->
			<li v-for="(item, i) in items" :key="i"><label class="bb-check"><input type="checkbox" class="bb-check__input"><span class="bb-check__text"><span class="bb-check__label">{{ item }}</span></span></label></li>
		</ul>
	</div>
</template>
