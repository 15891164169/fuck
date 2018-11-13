import Vue from 'vue'
import Vuex from 'vuex'

import LUNBO from './lunbo.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lunbo: LUNBO
  }
})
