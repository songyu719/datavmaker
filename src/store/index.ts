import {createStore, Store, useStore as useCoreStore} from 'vuex'
import {InjectionKey} from 'vue'
import tools from "../utils/UIElements"

import mutations from "./mutations"

export interface State {

    dataElements: UIElementGroup[]
}

export interface UIElementGroup {
    groupName:string,
    componentList:UIElement[]
}

export interface UIElement {
    title:string,
    btnClass?:string
    componentPack?:any
}

export const storeKey: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
    state: {
        dataElements:tools
    },
    mutations,
    actions: {},
    getters: {

    },
    modules: {}
})



export function useStore() {
    return useCoreStore(storeKey)
}
