<script setup lang="ts">
import { useData } from 'vitepress'

// Renders the page's `buy` frontmatter: [{ qty, name, spec, store?, href? }]. A row without href shows `store` as muted text.
// One BuyList per page (the detail ids are numbered by row).
interface Part { qty: string | number; name: string; spec: string; store?: string; href?: string }
const { frontmatter: fm } = useData()
const parts: Part[] = fm.value.buy ?? []

// "2" + "Antenna" -> "2 Antenna"; "24, buy extra" -> "24 Compression springs, buy extra"; "a few" -> "Straps or small zip ties, a few"
function label(p: Part) {
	const qty = String(p.qty)
	if (!/^\d/.test(qty)) return `${p.name}, ${qty}`
	const [count, ...rest] = qty.split(',')
	return rest.length ? `${count} ${p.name},${rest.join(',')}` : `${count} ${p.name}`
}
</script>

<template>
	<ul class="list-reset buy-list">
		<!-- mirrors bundle.js Checkbox (DS import 1793723291-7e67), with the store link beside it -->
		<li v-for="(p, i) in parts" :key="i">
			<label class="bb-check"><input type="checkbox" class="bb-check__input" :aria-describedby="`buy-spec-${i}`"><span class="bb-check__text"><span class="bb-check__label">{{ label(p) }}</span><span class="bb-check__detail" :id="`buy-spec-${i}`" aria-hidden="true">{{ p.spec }}</span></span></label>
			<a v-if="p.href" class="buy-list__shop link-icon" :href="p.href"><span>{{ p.store || 'Buy' }}</span><svg class="bb-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons/external-link.svg#icon"/></svg></a>
			<span v-else-if="p.store" class="buy-list__shop buy-list__shop--none">{{ p.store }}</span>
		</li>
	</ul>
</template>
