<script setup lang="ts">
import FileButton from './FileButton.vue'

// A row of download buttons that wraps, with target-gap between them. Use it where a step offers several files.
defineProps<{ files: { href: string; label: string }[] }>()
</script>

<template>
	<div class="docs-files">
		<FileButton v-for="f in files" :key="f.href" :href="f.href" :label="f.label" />
	</div>
</template>
