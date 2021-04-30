<template>
	<div class="app-sidebar">
		<logo></logo>
		<el-scrollbar class="app-scroll-menu">
			<el-menu
				:default-active="activeMenu"
				:collapse="collapse"
				:unique-opened="false"
				:background-color="variables.menuBg"
				:text-color="variables.menuText"
				:active-text-color="variables.menuActiveText"
				router
				class="app-menu-list"
			>
				<menu-item v-for="v in menuListData" :key="v.path" :menu-list="v" />
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script lang="ts" setup>
import store from '@store/index';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { filterMenu } from '@utils/auth';
import { routes } from '@router/index';
// eslint-disable-next-line no-unused-vars
import menuItem from '@layout/components/sidebar/menuItem.vue';
// eslint-disable-next-line no-unused-vars
import variables from '@style/variables.module.scss';
// eslint-disable-next-line no-unused-vars
import logo from './logo/logo.vue';
// 菜单数据
// eslint-disable-next-line no-unused-vars
const menuListData = computed(() => {
	return filterMenu(routes.filter((item) => !(item as any).hidden).concat(store().limitRoutes));
});
// 当前激活的菜单
// eslint-disable-next-line no-unused-vars
const activeMenu = computed(() => {
	const route = useRoute();
	if (route.meta.activeMenu) return route.meta.activeMenu;
	return route.path;
});
// 展开状态标识
// eslint-disable-next-line no-unused-vars
const collapse = computed(() => {
	return store().collapse;
});
</script>

<style lang="scss">
.app-sidebar {
	width: $sideBarWidth;
	background-color: $menuBg;
	.app-scroll-menu {
		height: calc(100% - 60px);
		.app-menu-list {
			border-right: 0 none;
			.el-menu-item.is-active {
				background-color: $menuBgHover !important;
			}
		}
	}
}
</style>
