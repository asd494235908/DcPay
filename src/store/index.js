import { createStore } from 'vuex'

export default createStore({
  state: {
    nav_Show: false,
    play_data: {
    },
    maske:false
  },
  mutations: {
    changeNav_Data(state, a) {
      state.nav_Show = a
    },
    sevePlayData(state, data) {
      state.play_data = data
    },
    seveMask(state, data) {
      state.maske = data
    },
  },
  actions: {
  },
  modules: {
  }
})
