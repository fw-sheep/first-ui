import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
    gettoken: state => state.token
  },
  mutations: {
    settoken(token, state) {
      state.token = token
    }
  }
})
export default store
