<template>
	<div class="app-sidebar" :class="{ collapse: collapse }">
		<logo></logo>
		<menu-list></menu-list>
	</div>
</template>

<script lang="ts" setup>
// 展开状态标识
// eslint-disable-next-line no-unused-vars
import collapse from '@utils/data';
// logo
// eslint-disable-next-line no-unused-vars
import logo from './logo/logo.vue';
// menu
// eslint-disable-next-line no-unused-vars
import MenuList from './menulist/menulist.vue';
</script>

<style lang="scss">
.app-sidebar {
	width: $sideBarWidth;
	background-color: $menuBg;
}
.app-sidebar.collapse {
	width: auto;
}
</style>
