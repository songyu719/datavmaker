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
          updateOptions(payload:{ propName: string, value: any });
       
          /**
            * 设置是否为必填项目
    
            */
          setRequired(payload:boolean);
       
          /**
            *  删除单选框
    
            */
          delRadioVuex(payload:any);
       
          /**
            *  增加单选框
    
            */
          addRadioVuex(payload:any);
       
}
