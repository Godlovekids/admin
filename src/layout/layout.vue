<template>
	<side-bar></side-bar>
	<div class="app-con">
		<head-bar></head-bar>
		<main-bar></main-bar>
	</div>
</template>

<script lang="ts" setup>
// 侧边栏
// eslint-disable-next-line no-unused-vars
import SideBar from './components/sidebar/sidebar.vue';
// 头部
// eslint-disable-next-line no-unused-vars
import HeadBar from './components/headbar/headbar.vue';
// 主体
// eslint-disable-next-line no-unused-vars
import MainBar from './components/mainbar/mainbar.vue';
</script>

<style lang="scss">
.app-con {
	flex: 1;
}
</style>
