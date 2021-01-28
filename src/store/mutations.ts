import {State,dataElement} from "@/store/index";
import {useStore} from "@/store/index";

const store = useStore()

const mutations = {
        changeScale(state:State,payload:number){
            state.scale = payload;
        },
        sortList(state:State,payload:dataElement[]){
            state.dataElements = payload
        },
        updatePos(state:State,payload:{pos:{x:number,y:number},id:string }){
            for(let o of state.dataElements){
                if(o.id === payload.id){
                    o.x=payload.pos.x
                    o.y=payload.pos.y
                }
            }

        },
        updateSize(state:State,payload:{pos:{x:number,y:number,w:number,h:number},id:string }){
            for(let o of state.dataElements){
                if(o.id === payload.id){
                    o.width=payload.pos.w
                    o.height = payload.pos.h
                    o.x=payload.pos.x
                    o.y=payload.pos.y

                }
            }
        },
        updateName(state:State,payload:{name:string}){
            state.dataElements.find((item)=>item.active)!.name = payload.name
            console.log(state.dataElements[1].name)
        },
        AddElements(state:State,payload:dataElement){
            state.dataElements.unshift(payload)
        },
        toggleActive(state:State,payload:{id:string,isActive:boolean}){
            state.dataElements.forEach(item=>{
                if(item.id == payload.id){
                    item.active = true
                }else{
                    item.active = false
                }
            })
        },
        toggleLock(state:State,payload:{id:string}){
            const target = state.dataElements.find(item=>item.id == payload.id);
            if(target){
                target.lock = !target.lock;
            }
        },
        toggleVisible(state:State,payload:{id:string}){
            const target = state.dataElements.find(item=>item.id == payload.id);
            if(target){
                target.visible = !target.visible;
            }
        },
        initState(state:State,payload:{id:string,data:any}){
            const  target = state.dataElements.find(item=>item.id == payload.id);
            if(target){
                target.customData = payload.data
            }
        }
}



export  default  mutations