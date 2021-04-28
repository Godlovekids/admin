// userSate接口限制
export interface UserState {
	isCollapse: boolean;
	token: string;
	name: string;
}
// state
const userSate: UserState = {
	isCollapse: false,
	token: '',
	name: ''
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
	SET_LOGIN(state: { name: string; token: string }, loginData: { value: { username: string } }) {
		state.name = loginData.value.username;
		state.token = loginData.value.username;
	}
};
// 异步
const actions = {
	login({ commit }: unknown, loginData: unknown) {
		commit('SET_LOGIN', loginData);
	}
};
export default {
	namespaced: true,
	state: userSate,
	getter,
	mutations,
	actions
};
