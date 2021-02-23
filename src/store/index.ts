import {createStore, Store, useStore as useCoreStore} from 'vuex'
import {InjectionKey} from 'vue'
import tools, {UIElement} from "../utils/UIElements"

import mutations from "./mutations"

export interface State {

    dataElements:UIElement[],
    formElements:UIElement[],
}


export const storeKey: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
    state: {
        dataElements:tools,
        formElements:[],
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
