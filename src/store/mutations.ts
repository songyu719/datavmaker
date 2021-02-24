import {State} from "@/store/index";
import {UIElement} from "@/utils/UIElements";
import guid from "@/utils/genID"

const mutations = {
    updateForm(state: State, payload: UIElement[]) {
        for (let o of payload) {
            if (!o.id) {
                o.id = guid()
            }
        }
        state.formElements = payload
    },
    AddFromElement(state: State, payload: UIElement) {
        state.formElements.push(payload)
    },
    changeMonitor(state: State, payload: UIElement) {
        state.formElements.forEach(item=>{
            item.active = item.id == payload.id;
        })
    },
    updateOptions(state:State,payload:{propName:string,value:any}){
        const target = state.formElements.find(item=>item.active)
        if(target){
            target.options[payload.propName] = payload.value
        }

    }
}

export default mutations
        