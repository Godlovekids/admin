<template>
	<div class="sidebar">
		<logo></logo>
		<el-scrollbar>
			<el-menu
				:default-active="activeMenu"
				:collapse="isCollapse"
				:unique-opened="false"
				:background-color="variables.menuBg"
				:text-color="variables.menuText"
				:active-text-color="variables.menuActiveText"
				router
				class="menu-list"
			>
				<menu-item v-for="v in menuListData" :key="v.path" :index="v.path" :menu-list="v" />
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script lang="ts" setup>
import store from '@store/index';
// eslint-disable-next-line no-unused-vars
import variables from '@style/variables.module.scss';
// eslint-disable-next-line no-unused-vars
import menuItem from '@layout/components/sidebar/menuItem.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { filterMenu } from '@utils/auth';
import { routes } from '@router/index';
// eslint-disable-next-line no-unused-vars
import logo from './logo/logo.vue';
// 菜单数据
// eslint-disable-next-line no-unused-vars
const menuListData = computed(() => {
	return filterMenu(
		routes.filter((item) => !(item as any).hidden).concat(store.getters.limitRoutes)
	);
});
// 当前激活的菜单
const route = useRoute();
// eslint-disable-next-line no-unused-vars
const activeMenu = computed(() => {
	if (route.meta.activeMenu) return route.meta.activeMenu;
	return route.path;
});
// 展开状态标识
// eslint-disable-next-line no-unused-vars
const isCollapse = computed(() => {
	return store.getters.isCollapse;
});
</script>

<style lang="scss">
.sidebar {
	width: $sideBarWidth;
	background-color: $menuBg;
	.el-menu-item.is-active {
		background-color: $menuBgHover !important;
	}
}
</style>
