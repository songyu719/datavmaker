declare interface Commits {
       
          /**
            * 更新数组表
    
            */
          updateForm(payload:UIElement[]);
       
          /**
            * 添加新元素
    
            */
          AddFromElement(payload:UIElement);
       
          /**
            * 暂无说明
            */
          changeMonitor(payload:UIElement);
       
          /**
            * 暂无说明
            */
          updateOptions(payload:{propName:string,value:any});
       
}
