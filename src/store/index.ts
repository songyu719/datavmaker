import {createStore, Store, useStore as useCoreStore} from 'vuex'
import {InjectionKey} from 'vue'
import mutations from "./mutations"

export interface State {
    scale: number,
    dataElements: dataElement[]
}

export interface dataElement {
    name: string,
    id: string,
    color: string,
    x: number,
    y: number,
    width: number,
    height: number,
    active: boolean,
    lock: boolean,
    visible: boolean,
    component: string,
    monitor: string
    customData?: any,

}

export const storeKey: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
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
                    alt:""
                }
            },
            {
                name: `图层2`,
                color:"",
                id: `u2`,
                x: 300,
                y: 300,
                width: 200,
                height: 80,
                visible: true,
                component: "Text",
                monitor: "ImageMonitor",
                lock:false,
                active:false,
                customData:{
                    fontSize:18,
                    color:"white",
                    fontWidget:"normal",
                    text:"请填写文字",
                }
            }

        ],
    },
    mutations,
    actions: {},
    getters: {
        currentElement(state) {
            return state.dataElements.find((item) => item.active)
        },
        getElemenById: (state) => (id:string) => {
            return state.dataElements.find(item => item.id === id)!.customData
        }
    },
    modules: {}
})

console.log("初始化Store")

export function useStore() {
    return useCoreStore(storeKey)
}
