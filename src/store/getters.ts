// 路由定义
import type { RouteRecordRaw } from 'vue-router';

const getters = {
	isCollapse: (state: { user: { isCollapse: boolean } }) => state.user.isCollapse,
	token: (state: { user: { token: string } }) => state.user.token,
	name: (state: { user: { name: string } }) => state.user.name,
	limitRoutes: (state: { user: { limitRoutes: RouteRecordRaw[] } }) => state.user.limitRoutes
};
export default getters;
