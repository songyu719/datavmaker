import { useStore } from "@/store/index";
export default () => {
    const store = useStore();
    /**
      * 改变缩放
      */
    function changeScale(payload) {
        store.commit("changeScale", payload);
    }
    /**
      * 图层排序
      */
    function sortLayer(payload) {
        store.commit("sortLayer", payload);
    }
    /**
      * 更新大小位置信息
      */
    function updateRect(payload) {
        store.commit("updateRect", payload);
    }
    /**
      * 更改图层名
      */
    function updateName(payload) {
        store.commit("updateName", payload);
    }
    /**
      * 添加新图层到设计器
      */
    function AddElements(payload) {
        store.commit("AddElements", payload);
    }
    /**
      * 切换激活状态
      */
    function toggleActive(payload) {
        store.commit("toggleActive", payload);
    }
    /**
      * 切换锁定状态
      */
    function toggleLock(payload) {
        store.commit("toggleLock", payload);
    }
    /**
      * 切换可见状态
      */
    function toggleVisible(payload) {
        store.commit("toggleVisible", payload);
    }
    /**
      *  删除单个图层
      */
    function delItem(payload) {
        store.commit("delItem", payload);
    }
    /**
      * 修改组件的某个属性
      */
    function updateProps(payload) {
        store.commit("updateProps", payload);
    }
    return {
        changeScale,
        sortLayer,
        updateRect,
        updateName,
        AddElements,
        toggleActive,
        toggleLock,
        toggleVisible,
        delItem,
        updateProps,
    };
};
//# sourceMappingURL=useCommits.js.map