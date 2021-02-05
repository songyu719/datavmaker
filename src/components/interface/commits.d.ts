declare interface Commits {
       
          /**
            * 改变缩放
            */
          changeScale(payload:number);
       
          /**
            * 图层排序
            */
          sortLayer(payload:dataElement[]);
       
          /**
            * 更新大小位置信息
            */
          updateRect(payload:{ rect: { x?: number, y?: number, w?: number, h?: number }, id: string });
       
          /**
            * 更改图层名
            */
          updateName(payload:{ name: string });
       
          /**
            * 添加新图层到设计器
            */
          AddElements(payload:dataElement);
       
          /**
            * 切换激活状态
            */
          toggleActive(payload:{ id: string, isActive: boolean });
       
          /**
            * 切换锁定状态
            */
          toggleLock(payload:{ id: string });
       
          /**
            * 切换可见状态
            */
          toggleVisible(payload:{ id: string });
       
          /**
            *  删除单个图层
            */
          delItem(payload:{ id: string });
       
          /**
            * 修改组件的某个属性
            */
          updateProps(payload:{ id: string,props: string,value: any });
       
}
