<template>
	<el-scrollbar>
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
			<menu-item v-for="item in menuListData" :key="item.path" :menu-list="item"></menu-item>
		</el-menu>
	</el-scrollbar>
</template>

<script lang="ts" setup>
import store from '@store/index';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { filterMenu } from '@utils/auth';
import { routes } from '@router/index';
// 展开状态标识
// eslint-disable-next-line no-unused-vars
import collapse from '@utils/data';
// 全局变量
// eslint-disable-next-line no-unused-vars
import variables from '@style/variables.module.scss';
// menuitem
// eslint-disable-next-line no-unused-vars
import MenuItem from './menuItem.vue';
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
</script>
<style lang="scss">
.app-menu-list {
	border-right: 0 none !important;
	.el-menu-item {
		&.is-active,
		&:hover {
			background-color: $menuBgHover !important;
		}
	}
	.app-menu-title {
		padding-left: 10px;
	}
	.el-menu-item-group__title {
		padding-bottom: 0;
		padding-top: 0;
	}
}
.app-menu-submenu {
	.el-menu-item {
		&.is-active,
		&:hover {
			background-color: $menuBgHover !important;
		}
	}
	.app-menu-title {
		padding-left: 10px;
	}
	.el-menu-item-group__title {
		padding-bottom: 0;
		padding-top: 0;
	}
}
</style>
