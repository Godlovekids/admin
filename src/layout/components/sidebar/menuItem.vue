<template>
	<!-- 多级 -->
	<el-submenu v-if="menuList.children && menuList.children.length > 0" :index="menuList.path">
		<template #title>
			<svg-icon :name="menuList.meta?.icon" color="#ffffff"></svg-icon>
			<span>{{ menuList.meta.title }}</span>
		</template>
		<el-menu-item-group>
			<menu-item v-for="v in menuList.children" :key="v.path" :menu-list="v" />
		</el-menu-item-group>
	</el-submenu>
	<!-- 一级 -->
	<el-menu-item v-else :index="menuList.path">
		<svg-icon :name="menuList.meta?.icon" color="#ffffff"></svg-icon>
		<template #title>
			{{ menuList.meta?.title }}
		</template>
	</el-menu-item>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
// 菜单数据
defineProps(['menuList']);
</script>
