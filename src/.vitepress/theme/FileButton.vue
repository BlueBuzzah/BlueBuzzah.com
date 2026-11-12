<script setup lang="ts">
defineProps<{ href: string; label: string; earlyAccess?: boolean }>()
</script>

<template>
	<!-- mirrors bundle.js Button (DS import 1793729877-6a2e) -->
	<a v-if="!earlyAccess" class="bb-btn bb-btn--secondary" :href="href"><svg class="bb-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/download.svg#icon"/></svg><span class="bb-btn__label">{{ label }}</span></a>
	<div v-else class="docs-files">
		<a class="bb-btn bb-btn--secondary" :href="href"><svg class="bb-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/download.svg#icon"/></svg><span class="bb-btn__label">{{ label }}</span></a>
		<!-- mirrors bundle.js StatusBadge tone="brand" icon="flask-conical" (DS import 1793729877-6a2e) -->
		<span class="bb-badge bb-badge--brand"><svg class="bb-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/flask-conical.svg#icon"/></svg><span>Early Access</span></span>
	</div>
</template>
