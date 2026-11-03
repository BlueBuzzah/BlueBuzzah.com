<script setup lang="ts">
/* What the lights mean: each row shows the glove's status light beside the words for its color and pattern, then what
   it means. Rows come from the firmware (src/main.cpp applyLed() and setup()), in the GloveLight design note's order:
   starting up and connecting, during a session, battery, problems. One LightsTable per page. */
type Light = [color: string, pattern: string]
interface Row {
	lights: Light[]
	then?: boolean // two lights in sequence ("then"), not side by side
	words: string // names the color and the pattern; the lights are decorative
	meaning: (string | { text: string; href: string })[]
}

const rows: Row[] = [
	{ lights: [['blue', 'blink'], ['cyan', 'blink']], then: true, words: 'Blue, flashing, then cyan, flashing', meaning: ['The glove is starting up.'] },
	{ lights: [['orange', 'blink-slow']], words: 'Orange, slow blink', meaning: ['The glove has no role yet, so set one with the Updater. See ', { text: 'Install the firmware', href: '/docs/boards#install-the-firmware' }, ' in stage 2.'] },
	{ lights: [['blue', 'breathe']], words: 'Blue, breathing', meaning: ["The glove is on but hasn't found the other glove."] },
	{ lights: [['green', 'solid']], words: 'Green, solid', meaning: ['The gloves have found each other and are ready.'] },
	{ lights: [['green', 'pulse']], words: 'Green, pulsing', meaning: ['A session is running.'] },
	{ lights: [['yellow', 'solid']], words: 'Yellow, solid', meaning: ['The session is paused.'] },
	{ lights: [['yellow', 'blink-fast']], words: 'Yellow, fast blink', meaning: ['The session is stopping.'] },
	{ lights: [['purple', 'blink']], words: 'Purple, flashing', meaning: ['The gloves lost their link. The light flashes for 30 seconds, then returns to breathing blue while they keep looking.'] },
	{ lights: [['orange', 'breathe'], ['orange', 'solid'], ['orange', 'pulse']], words: 'Orange, breathing, solid or pulsing', meaning: ['The battery is too low for a 2-hour session.'] },
	{ lights: [['red', 'blink-urgent']], words: 'Red, rapid blink', meaning: ['The battery is critical. The motors are off and a running session stops.'] },
	{ lights: [['red', 'double-blink'], ['red', 'blink-slow']], then: true, words: 'Red, double blink, then red, slow blink', meaning: ['At power-on, the glove found fewer than 4 tactors. The double blink lasts 5 seconds.'] },
	{ lights: [['red', 'blink-slow']], words: 'Red, slow blink', meaning: ["The glove found a fault at power-on, so sessions won't start until you fix it and switch the glove off and on."] },
]

const light = ([color, pattern]: Light) => `bb-light bb-light--${color} bb-light--${pattern}`
</script>

<template>
	<!-- mirrors bundle.js Checkbox (DS import 1793729877-6a2e): the GloveLight README's "Pause the lights" control. Ticked, it
	     holds every light on the page steady and lit, in CSS alone (bundle.css :root:has(input.bb-lights-pause:checked)). -->
	<label class="bb-check lights-pause"><input type="checkbox" class="bb-check__input bb-lights-pause"><span class="bb-check__text"><span class="bb-check__label">Pause the lights</span></span></label>
	<!-- The lights mirror bundle.js GloveLight (DS import 1793729877-6a2e). The explicit roles keep it a table for screen
	     readers when narrow columns restyle the rows as stacked blocks (docs.css). -->
	<table class="lights-table" role="table">
		<thead role="rowgroup">
			<tr role="row"><th role="columnheader" scope="col">Light</th><th role="columnheader" scope="col">What it means</th></tr>
		</thead>
		<tbody role="rowgroup">
			<tr v-for="(row, i) in rows" :key="i" role="row">
				<th role="rowheader" scope="row">
					<span class="lights-table__light">
						<span v-if="row.then" class="lights-table__lamps bb-light-seq" aria-hidden="true"><span :class="light(row.lights[0])" aria-hidden="true"></span>then<span :class="light(row.lights[1])" aria-hidden="true"></span></span>
						<span v-else class="lights-table__lamps" aria-hidden="true"><span v-for="(l, j) in row.lights" :key="j" :class="light(l)" aria-hidden="true"></span></span>
						<span>{{ row.words }}</span>
					</span>
				</th>
				<td role="cell"><template v-for="(part, j) in row.meaning" :key="j"><a v-if="typeof part !== 'string'" :href="part.href">{{ part.text }}</a><template v-else>{{ part }}</template></template></td>
			</tr>
		</tbody>
	</table>
</template>
