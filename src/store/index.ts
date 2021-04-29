//  创建store方法
import { createStore, GetterTree, Module } from 'vuex';
//  数据持久化方法
import createPersistedState from 'vuex-persistedstate';
// 导入user
import user from './modules/user';
import getters from './getters';
// 创建store
const store = createStore({
	modules: {
		user: (user as unknown) as Module<any, unknown>
	},
	getters: (getters as unknown) as GetterTree<unknown, unknown>,
	plugins: [
		createPersistedState({
			key: 'adminData', // 浏览器中的名字
			paths: ['user.token'] // 需要存储起来的参数模块
		})
	]
});
export default store;
