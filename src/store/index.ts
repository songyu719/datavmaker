import { createStore } from 'vuex'

export default createStore({
  state: {
    scale:1,
    components:[],


  },
  mutations: {
    changeScale(state,payload){
      state.scale = payload;
    }
  },
  actions: {

  },
  modules: {
  }
})
