// 路由定义
import type { RouteRecordRaw } from 'vue-router';
// 布局组件
const Layout = () => import('@layout/layout.vue');

const limitRoutes: RouteRecordRaw[] = [
	{
		path: '/system',
		name: 'system',
		component: Layout,
		redirect: '/system/analysis',
		meta: {
			id: '1',
			title: '系统管理',
			icon: 'system'
		},
		children: [
			{
				path: '/system/analysis',
				name: 'analysis',
				component: () => import('@views/system/analysis.vue'),
				meta: { id: '2', title: '分析台', icon: 'analysis' }
			},
			{
				path: '/system/airplay',
				name: 'airplay',
				component: () => import('@views/system/airplay.vue'),
				meta: { id: '3', title: '投屏器', icon: 'airplay' }
			}
		]
	}
];
export default limitRoutes;
