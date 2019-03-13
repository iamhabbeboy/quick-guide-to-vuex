
import Vue from 'vue'
import Vuex from 'vuex'

import mutation from './store/mutation'
import action from './store/action'
import getters from './store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    blogs: []
  },
  actions: action,
  mutations: mutation,
  getters: getters
})
