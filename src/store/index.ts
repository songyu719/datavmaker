import { createStore,Store } from 'vuex'
import {InjectionKey} from 'vue'
interface State {
  scale:number,
  dataElements:dataElement[]
}

export interface dataElement {
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
    component:string,
    monitor:string
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
        component:"ImageBox", monitor:"ImageMonitor",
        lock:false,
        customData:{
            src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1160360589,2429665544&fm=26&gp=0.jpg"
        }
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
        console.log(payload)
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
      },

      initState(state,payload:{id:string,data:any}){
            const  target = state.dataElements.find(item=>item.id == payload.id);
            if(target){
                target.customData = payload.data
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
