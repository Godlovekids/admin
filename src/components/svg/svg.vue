<template>
	<svg aria-hidden="true" class="svg-icon">
		<use :xlink:href="symbolId" :fill="props.color" />
	</svg>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
	// 前缀
	prefix: {
		type: String,
		default: 'icon'
	},
	// 标识
	name: {
		type: String,
		required: true
	},
	// 颜色
	color: {
		type: String,
		default: '#333'
	}
});
// eslint-disable-next-line no-unused-vars
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style lang="scss">
.svg-icon {
	width: 1.6em;
	height: 1.6em;
	margin: 0 10px;
	vertical-align: middle;
}
</style>
