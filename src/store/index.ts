import { createStore } from 'vuex'

export default createStore({
  state: {
    scale:1,
    components:[
      {
        name:"图层1",
        color:"red",
        id:'u1',
        x:100,
        y:100
      },
      {
        name:"图层2",
        color:"pink",
        id:'u2',
        x:100,
        y:200,
      },
      {
        name:"图层3",
        color:"skyblue",
        id:'u3',
        x:100,
        y:300
      },
      {
        name:"图层4",
        color:"green",
        id:'u4',
        x:200,
        y:100
      },
      {
        name:"图层5",
        color:"orange",
        id:'u5',
        x:200,
        y:200
      },
    ],


  },
  mutations: {
    changeScale(state,payload){
      state.scale = payload;
    },
    sortList(state,payload){
      console.log(payload);
      state.components = payload
    },
    updatePos(state,payload:{pos:{x:number,y:number},id:string }){
        for(let o of state.components){
            if(o.id === payload.id){
              o.x=payload.pos.x
              o.y=payload.pos.y
            }
        }
    }
  },
  actions: {

  },
  modules: {
  }
})
