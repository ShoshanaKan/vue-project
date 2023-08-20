import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: localStorage.getItem('loggedIn'),
    username: ''
  },
  mutations: {
    setAuthenticated(state, value) {
      state.isAuthenticated = value
    },
  },
  actions: {},
  modules: {}
});