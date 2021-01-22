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
    lock:boolean,
    visible:boolean,
    customData?:any,
}

export  const storeKey:InjectionKey<Store<State>> = Symbol();

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
        height:200,
        width:200,
        active:true,
        visible:true,
        lock:false
      },
      {
        name:"图层2",
        color:"green",
        id:'u2',
        x:300,
        y:300,
        height:200,
        width:200,
        active:false,
        visible:true,
        lock:false
      },
        {
            name:"图层3",
            color:"pink",
            id:'u3',
            x:500,
            y:500,
            height:200,
            width:200,
            active:false,
            visible:true,
            lock:false
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
              item.active = true
          }else{
              item.active = false
          }
      })
    },
    toggleLock(state,payload:{id:string}){
       const target = state.dataElements.find(item=>item.id == payload.id);
       if(target){
           target.lock = !target.lock;
       }
    },
      toggleVisible(state,payload:{id:string}){
          const target = state.dataElements.find(item=>item.id == payload.id);
          if(target){
              target.visible = !target.visible;
          }
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
