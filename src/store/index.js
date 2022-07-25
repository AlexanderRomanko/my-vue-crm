import Vue from 'vue'
import Vuex from 'vuex'
import auth from "@/store/auth"
import userInfo from "@/store/user.info";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  getters: {
    error: s => s.error
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
  },
  modules: {
    auth, userInfo
  }
})
