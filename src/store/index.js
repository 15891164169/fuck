import Vue from 'vue'
import Vuex from 'vuex'

import LUNBO from './lunbo.js'
import SHOPCART from './shopcart.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lunbo: LUNBO,
    shopcart: SHOPCART
  }
})
