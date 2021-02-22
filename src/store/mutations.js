const mutations = {
    //改变缩放
    changeScale(state, payload) {
        state.scale = payload;
    },
    //图层排序
    sortLayer(state, payload) {
        state.dataElements = payload;
    },
    //更新大小位置信息
    updateRect(state, payload) {
        for (let o of state.dataElements) {
            if (o.id === payload.id) {
                payload.rect.w && (o.width = payload.rect.w);
                payload.rect.h && (o.height = payload.rect.h);
                payload.rect.x && (o.x = payload.rect.x);
                payload.rect.y && (o.y = payload.rect.y);
            }
        }
    },
    //更改图层名
    updateName(state, payload) {
        state.dataElements.find((item) => item.active).name = payload.name;
    },
    //添加新图层到设计器
    AddElements(state, payload) {
        state.dataElements.unshift(payload);
    },
    //切换激活状态
    toggleActive(state, payload) {
        state.dataElements.forEach(item => {
            if (item.id == payload.id) {
                item.active = true;
            }
            else {
                item.active = false;
            }
        });
    },
    //切换锁定状态
    toggleLock(state, payload) {
        const target = state.dataElements.find(item => item.id == payload.id);
        if (target) {
            target.lock = !target.lock;
        }
    },
    //切换可见状态
    toggleVisible(state, payload) {
        const target = state.dataElements.find(item => item.id == payload.id);
        if (target) {
            target.visible = !target.visible;
        }
    },
    // 删除单个图层
    delItem(state, payload) {
        const idx = state.dataElements.findIndex((item) => item.id == payload.id);
        state.dataElements.splice(idx, 1);
    },
    //修改组件的某个属性
    updateProps(state, payload) {
        const target = state.dataElements.find((item) => item.id == payload.id);
        console.log(payload);
        if (target) {
            target.customData[payload.props] = payload.value;
        }
    }
};
export default mutations;
//# sourceMappingURL=mutations.js.map