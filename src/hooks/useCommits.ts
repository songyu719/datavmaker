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
    

    return {
        
             updateForm,//暂无说明
        
             AddFromElement,//暂无说明
        
    }
}
