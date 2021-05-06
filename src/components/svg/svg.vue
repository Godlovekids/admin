<template>
	<svg aria-hidden="true" class="svg-icon" :style="{ width: size, height: size }">
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
	},
	size: {
		type: String,
		default: '1.6em'
	}
});
// eslint-disable-next-line no-unused-vars
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style lang="scss">
.svg-icon {
	vertical-align: middle;
}
</style>
