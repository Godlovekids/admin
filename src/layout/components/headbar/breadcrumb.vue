<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
		<el-breadcrumb-item
			v-for="item in breadcrumbList"
			:key="'b' + item.name"
			:to="{ name: item.name }"
			>{{ item?.title }}</el-breadcrumb-item
		>
	</el-breadcrumb>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
// 面包屑数据限制
interface BreadcrumbList {
	name: string;
	title: string;
}
// 面包屑数据
// eslint-disable-next-line no-unused-vars
const breadcrumbList = ref<BreadcrumbList[]>([]);
// 不显示面包屑的导航
const notShowBreadcrumbList = ['error'];
// 当前路由
const route = useRoute();
// 监听路有变化并处理，面包屑数据
watch(
	() => route.path,
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
