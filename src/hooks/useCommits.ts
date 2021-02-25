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
      function  updateOptions(payload:{ propName: string, value: any }) {
        store.commit("updateOptions",payload)
      }
    
      /**
        * 设置是否为必填项目
    
        */
      function  setRequired(payload:boolean) {
        store.commit("setRequired",payload)
      }
    
      /**
        * 设置文本框格式
    
        */
      function  setFormat(payload:string) {
        store.commit("setFormat",payload)
      }
    

    return {
        
             updateForm,//暂无说明
        
             AddFromElement,//暂无说明
        
             changeMonitor,//暂无说明
        
             updateOptions,//暂无说明
        
             setRequired,//设置是否为必填项目
    
        
             setFormat,//设置文本框格式
    
        
    }
}
