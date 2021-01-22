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
    active:boolean,
    customData?:any,


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
        width:100,
        active:false
      },
      {
        name:"图层2",
        color:"red",
        id:'u2',
        x:200,
        y:200,
        height:100,
        width:100,
        active:true
      },
        {
            name:"图层3",
            color:"red",
            id:'u3',
            x:300,
            y:300,
            height:100,
            width:100,
            active:true
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
          o.width=payload.pos.w
          o.height = payload.pos.h
          o.x=payload.pos.x
          o.y=payload.pos.y

        }
      }
    },
    updateName(state,payload:{name:string}){
          state.dataElements.find((item)=>item.active)!.name = payload.name
          console.log(state.dataElements[1].name)
    },
    AddElements(state,payload){
      state.dataElements.unshift(payload)
    },
    toggleActive(state,payload:{id:string,isActive:boolean}){
      state.dataElements.forEach(item=>{
          if(item.id == payload.id){
              console.log("这样不对么？")
              item.active = true
          }else{
              item.active = false
          }
      })
    }

  },
  actions: {

  },
  getters:{
    currentElement(state){
       return state.dataElements.find((item)=>item.active)
    }
  },
  modules: {
  }
})
