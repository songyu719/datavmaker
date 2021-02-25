import {createStore, Store, useStore as useCoreStore} from 'vuex'
import {InjectionKey} from 'vue'
import tools, {UIElement} from "../utils/UIElements"

import mutations from "./mutations"

export interface State {
    dataElements: UIElement[],
    formElements: UIElement[],
    formRules:rules
}

export interface rules {
      [key:string]:any[]
}


export const storeKey: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
    state: {
        dataElements: tools,
        formElements: [],
        formRules:{}
        
    },
    mutations,
    actions: {},
    getters: {
        CurrentElements:(state:State)=>{
            return  state.formElements.find(item=>item.active)
        }
    },
    modules: {}
})


export function useStore() {
    return useCoreStore(storeKey)
}
