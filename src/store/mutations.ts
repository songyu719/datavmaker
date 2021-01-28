import {State,dataElement} from "@/store/index";
const mutations = {

        //改变缩放
        changeScale(state:State,payload:number){
            state.scale = payload;
            },

        //图层排序
        sortLayer(state:State,payload:dataElement[]){
                state.dataElements = payload
            },
        //更新位置
        updatePos(state:State,payload:{pos:{x:number,y:number},id:string }){
            for(let o of state.dataElements){
                if(o.id === payload.id){
                    o.x=payload.pos.x
                    o.y=payload.pos.y
                }
            }
        },
        //更新大小
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
        //更改图层名
        updateName(state:State,payload:{name:string}){
            state.dataElements.find((item)=>item.active)!.name = payload.name
        },
        //添加新图层到设计器
        AddElements(state:State,payload:dataElement){
            state.dataElements.unshift(payload)
        },
        //切换激活状态
        toggleActive(state:State,payload:{id:string,isActive:boolean}){
            state.dataElements.forEach(item=>{
                if(item.id == payload.id){
                    item.active = true
                }else{
                    item.active = false
                }
            })
        },
        //切换锁定状态
        toggleLock(state:State,payload:{id:string}){
            const target = state.dataElements.find(item=>item.id == payload.id);
            if(target){
                target.lock = !target.lock;
            }
        },
        //切换可见状态
        toggleVisible(state:State,payload:{id:string}){
            const target = state.dataElements.find(item=>item.id == payload.id);
            if(target){
                target.visible = !target.visible;
            }
        },

        //初始化图层私有状态
        initState(state:State,payload:{id:string,data:any}){
            const  target = state.dataElements.find(item=>item.id == payload.id);
            if(target){
                target.customData = payload.data
            }
        },

}



export default mutations
        