// 定义store
import { defineStore } from 'pinia';
// 引入权限路由
import limitRoutes from '@router/routes';
// 路由定义
import type { RouteRecordRaw } from 'vue-router';
// 过滤路由方法 设置token
import { filterAsyncRoutes, setToken } from '@utils/auth';
// State接口限制
export interface State {
	collapse: boolean;
	token: string;
	name: string;
	limitRoutes: RouteRecordRaw[];
}
const store = defineStore({
	id: 'main',
	state: (): State => {
		return {
			// 展开状态
			collapse: false,
			// 身份标识
			token: '',
			// 用户
			name: '',
			// 权限路由
			limitRoutes: []
		};
	},
	actions: {
		login(loginData: { value: { username: string } }): Promise<void> {
			this.name = loginData.value.username;
			// 存储token
			setToken(loginData.value.username);
			return Promise.resolve();
		},
		setToken(token: string): void {
			this.token = token;
		},
		setRoutes(token: string): Promise<Array<RouteRecordRaw>> {
			const idList: string[] = [];
			if (token === 'admin') {
				idList.push('1', '2', '3');
			} else {
				idList.push('1', '2');
			}
			const routes = filterAsyncRoutes(limitRoutes, idList);
			this.limitRoutes = routes;
			return Promise.resolve(routes);
		},
		changeCollapsed(): void {
			this.collapse = !this.collapse;
		},
		reset(): void {
			this.name = '';
			this.token = '';
			this.limitRoutes = [];
		}
	}
});
export default store;
