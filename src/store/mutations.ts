import {State} from "@/store/index";
import {UIElement} from "@/utils/UIElements";
import guid from "@/utils/genID"
const mutations = {


    updateForm(state:State,payload:UIElement[]){
            for (let o of payload){
                if(!o.id){
                    o.id = guid()
                }
            }
            console.log(payload)
            state.formElements = payload
        },
    AddFromElement(state:State,payload:UIElement){
        state.formElements.push(payload)
    }
}


export default mutations
        