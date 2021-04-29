// 路由定义
import type { RouteRecordRaw } from 'vue-router';
// 布局组件
const Layout = () => import('@layout/layout.vue');

const limitRoutes: RouteRecordRaw[] = [
	{
		path: '/work',
		name: 'work',
		component: Layout,
		redirect: '/work/analysis',
		meta: {
			id: '1',
			title: '系统管理',
			icon: 'config'
		},
		children: [
			{
				path: '/work/analysis',
				name: 'analysis',
				component: () => import('@views/work/analysis.vue'),
				meta: { id: '2', title: '分析台', icon: 'aiming' }
			},
			{
				path: '/work/analysis2',
				name: 'analysis2',
				component: () => import('@views/work/analysis2.vue'),
				meta: { id: '3', title: '分析台2', icon: 'aiming' }
			}
		]
	}
];
export default limitRoutes;
