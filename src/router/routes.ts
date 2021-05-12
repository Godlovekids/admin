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
		redirect: '/system/editor',
		meta: {
			id: '1',
			title: '功能管理',
			icon: 'system'
		},
		children: [
			{
				name: 'editor',
				path: '/system/editor',
				component: () => import('@views/system/editor.vue'),
				meta: { id: '2', title: '富文本', icon: 'editor' }
			},
			{
				name: 'excel',
				path: '/system/excel',
				component: () => import('@views/system/excel.vue'),
				meta: { id: '3', title: 'Excel', icon: 'excel' }
			}
		]
	}
];
export default limitRoutes;
