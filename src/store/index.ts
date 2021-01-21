import { createStore,Store } from 'vuex'
import {InjectionKey} from 'vue'
interface State {
  scale:number,
  dataElements:dataElement[]
}

interface dataElement {
    name:string,
    id:string,
    color:string,
    x:number,
    y:number,
    width:number,
    height:number,
    customData?:any

}

export  const sotorekey:InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    scale:1,
    dataElements:[
      {
        name:"图层1",
        color:"red",
        id:'u1',
        x:100,
        y:100,
        height:100,
        width:100
        
      },
      {
        name:"图层2",
        color:"pink",
        id:'u2',
        x:100,
        y:200,
        height:100,
        width:100
      },
      {
        name:"图层3",
        color:"skyblue",
        id:'u3',
        x:100,
        y:300,
        height:100,
        width:100
      },
      {
        name:"图层4",
        color:"green",
        id:'u4',
        x:200,
        y:100,
        width:100,
        height:100,
      },
      {
        name:"图层5",
        color:"orange",
        id:'u5',
        x:200,
        y:200,
        width:100,
        height:100
      },
    ],


  },
  mutations: {
    changeScale(state,payload){
      state.scale = payload;
    },
    sortList(state,payload){
      console.log(payload);
      state.dataElements = payload
    },
    updatePos(state,payload:{pos:{x:number,y:number},id:string }){
        for(let o of state.dataElements){
            if(o.id === payload.id){
              o.x=payload.pos.x
              o.y=payload.pos.y
            }
        }
    },
    updateSize(state,payload:{pos:{x:number,y:number,w:number,h:number},id:string }){
      for(let o of state.dataElements){
        if(o.id === payload.id){
          o.x=payload.pos.x
          o.y=payload.pos.y
          o.width=payload.pos.w
          o.height = payload.pos.h
        }
      }
    },
    AddElements(state,payload){
      state.dataElements.unshift(payload)
    }
  },
  actions: {

  },
  modules: {
  }
})
