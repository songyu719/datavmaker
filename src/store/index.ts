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
                component: "ImageBox", monitor: "ImageMonitor",
                lock: false,
                customData: {
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1160360589,2429665544&fm=26&gp=0.jpg"
                }
            },
        ],
    },
    mutations
    ,
    actions: {},
    getters: {
        currentElement(state) {
            return state.dataElements.find((item) => item.active)
        }
    },
    modules: {}
})

console.log("初始化Store")

export function useStore() {
    return useCoreStore(storeKey)
}
