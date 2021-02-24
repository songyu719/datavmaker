import {State} from "@/store/index";
import {UIElement} from "@/utils/UIElements";
import guid from "@/utils/genID"
const mutations = {

    //更新数组表
    updateForm(state:State,payload:UIElement[]){
            for (let o of payload){
                if(!o.id){
                    o.id = guid()
                }
            }
            console.log(payload)
            state.formElements = payload
        },
    //添加新元素
    AddFromElement(state:State,payload:UIElement){
        state.formElements.push(payload)
    }
}


export default mutations
        