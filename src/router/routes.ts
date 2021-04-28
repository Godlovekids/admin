// 路由定义
import type { RouteRecordRaw } from 'vue-router';
// 布局组件
import Layout from '@layout/layout.vue';
// 路由数据
const routes: RouteRecordRaw[] = [
	{
		path: '/login',
		name: 'login',
		meta: {
			hidden: true,
			title: '登录'
		},
		component: () => import('@views/login/login.vue')
	},
	{
		path: '/',
		component: Layout,
		redirect: '/home',
		children: [
			{
				path: 'home',
				name: 'home',
				component: () => import('@views/home/home.vue'),
				meta: { title: '首页', icon: 'dashboard' }
			}
		]
	}
	// {
	// 	path: '*',
	// 	name: '404',
	// 	component: () => import('@views/home/home.vue')
	// }
];
export default routes;
