<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
		<el-breadcrumb-item v-for="item in breadcrumbList" :key="item.name" :to="{ name: item.name }">{{
			item?.title
		}}</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

interface BreadcrumbList {
	name: string;
	title: string;
}
// eslint-disable-next-line no-unused-vars
const breadcrumbList = ref<BreadcrumbList[]>([]);
// 不显示面包屑的导航
const notShowBreadcrumbList = ['404'];
const route = useRoute();
// 监听路有变化并处理，面包屑数据
watch(
	route,
	() => {
		breadcrumbList.value = [];
		if (!(route.matched[0] && notShowBreadcrumbList.includes(route.matched[0].name as string))) {
			route.matched.forEach((item) => {
				const obj: BreadcrumbList = {
					title: item.meta.title as string,
					name: item.name as string
				};
				breadcrumbList.value.push(obj);
			});
		}
	},
	{
		immediate: true
	}
);
</script>
