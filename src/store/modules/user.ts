// 路由定义
import type { RouteRecordRaw } from 'vue-router';
import limitRoutes from '@router/routes';
import { filterAsyncRoutes } from '@utils/auth';
// userSate接口限制
export interface UserState {
	isCollapse: boolean;
	token: string;
	name: string;
	limitRoutes: RouteRecordRaw[];
}
// state
const userSate: UserState = {
	isCollapse: false,
	token: '',
	name: '',
	limitRoutes: []
};
// getter
const getter = {
	isCollapse(state: UserState) {
		return state.isCollapse;
	},
	token(state: UserState) {
		return state.token;
	},
	name(state: UserState) {
		return state.name;
	}
};
// 同步
const mutations = {
	SET_LOGIN(
		state: { name: string; token: string; limitRoutes: RouteRecordRaw[] },
		loginData: { value: { username: string } }
	) {
		// eslint-disable-next-line no-param-reassign
		state.name = loginData.value.username;
		// eslint-disable-next-line no-param-reassign
		state.token = loginData.value.username;
	},
	SET_ROUTE(state: { limitRoutes: RouteRecordRaw[] }, routes: RouteRecordRaw[]) {
		// eslint-disable-next-line no-param-reassign
		state.limitRoutes = routes;
	},
	SET_RESET(state: { name: string; token: string; limitRoutes: RouteRecordRaw[] }) {
		// eslint-disable-next-line no-param-reassign
		state.name = '';
		// eslint-disable-next-line no-param-reassign
		state.token = '';
		// eslint-disable-next-line no-param-reassign
		state.limitRoutes = [];
	}
};
// 异步
const actions = {
	login({ commit }: unknown, loginData: unknown) {
		commit('SET_LOGIN', loginData);
	},
	route({ commit }: unknown, token: string) {
		const idList: string[] = [];
		if (token === 'admin') {
			idList.push('1', '2', '3');
		} else {
			idList.push('1', '2');
		}
		const routes = filterAsyncRoutes(limitRoutes, idList);
		commit('SET_ROUTE', routes);
		return Promise.resolve(routes);
	},
	reset({ commit }: unknown) {
		commit('SET_RESET');
	}
};
export default {
	namespaced: true,
	state: userSate,
	getter,
	mutations,
	actions
};
