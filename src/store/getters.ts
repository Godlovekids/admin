const getters = {
	isCollapse: (state: { user: { isCollapse: boolean } }) => state.user.isCollapse,
	token: (state: { user: { token: string } }) => state.user.token,
	name: (state: { user: { name: string } }) => state.user.name
};
export default getters;