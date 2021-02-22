import { createStore, useStore as useCoreStore } from 'vuex';
import mutations from "./mutations";
export const storeKey = Symbol();
export default createStore({
    state: {
        scale: 1,
        dataElements: [
            {
                name: "图层1",
                color: "red",
                id: 'u1',
                x: 100,
                y: 100,
                height: 200,
                width: 200,
                active: true,
                visible: true,
                component: "ImageBox",
                monitor: "ImageMonitor",
                lock: false,
                customData: {
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1160360589,2429665544&fm=26&gp=0.jpg",
                    alt: "",
                    events: {
                        load: [
                            {
                                name: "初次加载",
                                command: () => {
                                    console.log("图片被加载了");
                                }
                            }
                        ],
                        mounted: [
                            {
                                name: "挂载",
                                command: () => {
                                    console.log("图片被加载了");
                                }
                            }
                        ]
                    }
                }
            },
            {
                name: `图层2`,
                color: "",
                id: `u2`,
                x: 500,
                y: 500,
                width: 500,
                height: 50,
                visible: true,
                component: "Text",
                monitor: "TextMonitor",
                lock: false,
                active: false,
                customData: {
                    fontSize: 18,
                    color: "#ff0000",
                    fontWidget: "normal",
                    text: "请填写文字",
                    click: () => {
                        console.log("10080");
                    }
                }
            },
            {
                name: `图层3`,
                color: "",
                id: `u3`,
                x: 300,
                y: 300,
                width: 500,
                height: 500,
                visible: true,
                component: "EChartBar",
                monitor: "TextMonitor",
                lock: false,
                active: false,
                customData: {}
            },
        ],
    },
    mutations,
    actions: {},
    getters: {
        currentElement(state) {
            return state.dataElements.find((item) => item.active);
        },
        getElemenById: (state) => (id) => {
            return state.dataElements.find(item => item.id === id).customData;
        }
    },
    modules: {}
});
console.log("初始化Store");
export function useStore() {
    return useCoreStore(storeKey);
}
//# sourceMappingURL=index.js.map