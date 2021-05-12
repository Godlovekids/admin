<template>
	<router-view></router-view>
</template>

<script lang="ts" setup>
// store
import store from '@store/index';
import { onMounted } from 'vue';
// 宽度改变时控制菜单折叠
onMounted(() => {
	window.onresize = () => {
		const collapse = document.body.clientWidth < 768;
		store().setCollapse(collapse);
	};
});
</script>
<style lang="scss">
#app {
	width: 100vw;
	height: 100vh;
	display: flex;
}
</style>
