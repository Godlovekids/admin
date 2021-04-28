<template>
	<el-menu
		:default-active="activeMenu"
		:collapse="isCollapse"
		:background-color="variables.menuBg"
		:text-color="variables.menuText"
		:active-text-color="variables.menuActiveText"
		router
		class="menu-list"
	>
		<Menu :menuList="menuList"></Menu>
	</el-menu>
</template>

<script lang="ts" setup>
import store from '@store/index';
import router from '@router/index';
// eslint-disable-next-line no-unused-vars
import variables from '@style/variables.module.scss';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
// eslint-disable-next-line no-unused-vars
import Menu from './menu.vue';
// 菜单数据
// eslint-disable-next-line no-unused-vars
const menuList = computed(() => {
	return router.options.routes.filter((item) => !(item as any)?.meta?.hidden);
});
// 当前激活的菜单
// eslint-disable-next-line no-unused-vars
const activeMenu = computed(() => {
	const route = useRoute();
	const { meta, path } = route;
	if (meta.activeMenu) {
		return meta.activeMenu;
	}
	return path;
});
// 展开状态标识
// eslint-disable-next-line no-unused-vars
const isCollapse = computed(() => {
	return store.getters.isCollapse;
});
</script>

<style lang="scss">
.menu-list {
	width: 210px;
}
</style>
