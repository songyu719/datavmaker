import {UIElement} from "@/utils/UIElements";
import {useStore} from "@/store/index";

export default  ()=>{
    const store = useStore()
    
      /**
        * 更新数组表
    
        */
      function  updateForm(payload:UIElement[]) {
        store.commit("updateForm",payload)
      }
    
      /**
        * 添加新元素
    
        */
      function  AddFromElement(payload:UIElement) {
        store.commit("AddFromElement",payload)
      }
    

    return {
        
             updateForm,//更新数组表
    
        
             AddFromElement,//添加新元素
    
        
    }
}
