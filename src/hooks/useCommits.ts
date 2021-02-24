import {UIElement} from "@/utils/UIElements";
import {useStore} from "@/store/index";

export default  ()=>{
    const store = useStore()
    
      /**
        * 暂无说明
        */
      function  updateForm(payload:UIElement[]) {
        store.commit("updateForm",payload)
      }
    
      /**
        * 暂无说明
        */
      function  AddFromElement(payload:UIElement) {
        store.commit("AddFromElement",payload)
      }
    
      /**
        * 暂无说明
        */
      function  changeMonitor(payload:UIElement) {
        store.commit("changeMonitor",payload)
      }
    
      /**
        * 暂无说明
        */
      function  updateOptions(payload:{propName:string,value:any}) {
        store.commit("updateOptions",payload)
      }
    

    return {
        
             updateForm,//暂无说明
        
             AddFromElement,//暂无说明
        
             changeMonitor,//暂无说明
        
             updateOptions,//暂无说明
        
    }
}
