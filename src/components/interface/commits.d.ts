declare interface Commits {
       
          /**
            * 暂无说明
            */
          updateForm(payload:UIElement[]);
       
          /**
            * 暂无说明
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
       
          /**
            * 设置是否为必填项目
    
            */
          setRequired(payload:boolean);
       
}
