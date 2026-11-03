<script setup lang="ts">
defineProps<{ href: string; label: string }>()
</script>

<template>
	<!-- mirrors bundle.js Button (DS import 1793729877-6a2e) -->
	<a class="bb-btn bb-btn--secondary" :href="href"><svg class="bb-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/download.svg#icon"/></svg><span class="bb-btn__label">{{ label }}</span></a>
</template>
