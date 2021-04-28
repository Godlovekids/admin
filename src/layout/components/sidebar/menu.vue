<template>
	<template v-for="item in menuList">
		<el-submenu
			v-if="item.children && item.children.length > 1"
			:key="item.path"
			:index="item.path"
		>
			<template slot="title" style="padding-left: 10px">
				<svg-icon :name="item?.meta?.icon ?? 'dashboard'"></svg-icon>
				<span>{{ item?.meta?.title ?? '未命名' }}</span>
			</template>
			<Menu :menuList="item.children"></Menu>
		</el-submenu>
		<el-menu-item
			v-else
			:index="item.path ?? item.children[0]?.path"
			:key="item.name ?? item.children[0]?.name"
		>
			<svg-icon :name="item?.meta?.icon ?? item.children[0]?.meta?.icon ?? 'dashboard'"></svg-icon>
			<span>{{ item?.meta?.title ?? item.children[0]?.meta?.title ?? '未命名' }}</span>
		</el-menu-item>
	</template>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
// 菜单数据
// eslint-disable-next-line no-unused-vars
const props = defineProps(['menuList']);
</script>

<style lang="scss"></style>
