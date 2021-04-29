// 创建router方法  history模式
import { createRouter, createWebHistory } from 'vue-router';
// 路由定义
import type { RouteRecordRaw } from 'vue-router';
// 布局组件
import Layout from '@layout/layout.vue';
// 基础路由数据
export const routes: RouteRecordRaw[] = [
	{
		name: 'login',
		path: '/login',
		meta: {
			title: '登录',
			hidden: true
		},
		component: () => import('@views/login/login.vue')
	},
	{
		path: '/',
		redirect: '/dashboard',
		meta: {
			hidden: true
		}
	},
	{
		name: 'dashboard',
		path: '/dashboard',
		component: Layout,
		redirect: '/dashboard/workbench',
		meta: { title: '仪表盘', icon: 'aiming' },
		children: [
			{
				name: 'workbench',
				path: '/dashboard/workbench',
				meta: { title: '工作台', icon: 'config' },
				component: () => import('@views/system/workbench.vue')
			}
		]
	},
	{
		name: 'error',
		path: '/error',
		meta: { title: '错误页面', hidden: true },
		component: Layout,
		redirect: '/error/404',
		children: [
			{
				name: '404',
				path: '/error/404',
				component: import('@views/error/404.vue'),
				meta: { title: '404', hidden: true }
			}
		]
	}
];

export const asyncRouter: RouteRecordRaw[] = [
	{
		path: '/:pathMatch(.*)*',
		meta: {
			title: 'NotFound',
			hidden: true
		},
		redirect: {
			name: '404'
		}
	}
];
// 创建router
const router = createRouter({
	history: createWebHistory(),
	routes
});
export default router;
