export interface IState {
  sidebar: {
    opened: boolean;
  };
  device: string;
}
const state = {
  sidebar: {
    opened: true
  },
  device: 'desktop'
} as IState;

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
