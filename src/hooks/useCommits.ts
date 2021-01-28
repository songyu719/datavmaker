import {dataElement} from "@/store/index";
import {useStore} from "@/store/index";

export default  ()=>{
    const store = useStore()
    
      /**
        * 改变缩放
        */
      function  changeScale(payload:number) {
        store.commit("changeScale",payload)
      }
    
      /**
        * 图层排序
        */
      function  sortLayer(payload:dataElement[]) {
        store.commit("sortLayer",payload)
      }
    
      /**
        * 更新位置
        */
      function  updatePos(payload:{pos:{x:number,y:number},id:string }) {
        store.commit("updatePos",payload)
      }
    
      /**
        * 更新大小
        */
      function  updateSize(payload:{pos:{x:number,y:number,w:number,h:number},id:string }) {
        store.commit("updateSize",payload)
      }
    
      /**
        * 更改图层名
        */
      function  updateName(payload:{name:string}) {
        store.commit("updateName",payload)
      }
    
      /**
        * 添加新图层到设计器
        */
      function  AddElements(payload:dataElement) {
        store.commit("AddElements",payload)
      }
    
      /**
        * 切换激活状态
        */
      function  toggleActive(payload:{id:string,isActive:boolean}) {
        store.commit("toggleActive",payload)
      }
    
      /**
        * 切换锁定状态
        */
      function  toggleLock(payload:{id:string}) {
        store.commit("toggleLock",payload)
      }
    
      /**
        * 切换可见状态
        */
      function  toggleVisible(payload:{id:string}) {
        store.commit("toggleVisible",payload)
      }
    
      /**
        * 初始化图层私有状态
        */
      function  initState(payload:{id:string,data:any}) {
        store.commit("initState",payload)
      }
    

    return {
        
             changeScale,//改变缩放
        
             sortLayer,//图层排序
        
             updatePos,//更新位置
        
             updateSize,//更新大小
        
             updateName,//更改图层名
        
             AddElements,//添加新图层到设计器
        
             toggleActive,//切换激活状态
        
             toggleLock,//切换锁定状态
        
             toggleVisible,//切换可见状态
        
             initState,//初始化图层私有状态
        
    }
}
