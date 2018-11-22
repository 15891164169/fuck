import { LUNBO_STATUS } from './mutation-types.js'

export default {
  state: {
    headText: 'vue app'
  },
  mutations: {
    [LUNBO_STATUS] (state, str) {
      state.headText = str
    }
  },
  actions: {
    myStatus (context, str) {
      context.commit('LUNBO_STATUS', str)
    }
  }
}
