// 路由定义
import type { RouteRecordRaw } from 'vue-router';
// 布局组件
const Layout = () => import('@layout/layout.vue');
// 权限路由数据
const limitRoutes: RouteRecordRaw[] = [
	{
		name: 'system',
		path: '/system',
		component: Layout,
		redirect: '/system/analysis',
		meta: {
			id: '1',
			title: '系统管理',
			icon: 'system'
		},
		children: [
			{
				name: 'analysis',
				path: '/system/analysis',
				component: () => import('@views/system/analysis.vue'),
				meta: { id: '2', title: '分析台', icon: 'analysis' }
			},
			{
				name: 'airplay',
				path: '/system/airplay',
				component: () => import('@views/system/airplay.vue'),
				meta: { id: '3', title: '投屏器', icon: 'airplay' }
			}
		]
	}
];
export default limitRoutes;
