import {State} from "@/store/index";
import {UIElement} from "@/utils/UIElements";

import {guid,toJs} from "@/utils/tools"
import {toRaw,unref} from 'vue'
const mutations = {
    updateForm(state: State, payload: UIElement[]) {

        payload =  toJs(payload)
        for(const pay of payload){
            if(!pay.id){
                pay.id = guid()
            }
        }

        state.formElements = payload;

    },
    AddFromElement(state: State, payload: UIElement) {
        payload.id = guid();
        payload.active = false
        state.formElements.push(payload)
    },
    changeMonitor(state: State, payload: UIElement) {
        state.formElements.forEach(item=>{
            item.active = item.id == payload.id;
        })
        console.log( toJs(state.formElements) )
    },
    updateOptions(state:State,payload:{propName:string,value:any}){
        const target = state.formElements.find(item=>item.active)
        if(target){
            target.options[payload.propName] = payload.value
        }
    },


    //设置是否为必填项目
    setRequired(state:State,payload:boolean){
        const target = state.formElements.find(item=>item.active)
        if(target){
            const requiredRule =  target.rules.find((item:any) => item.hasOwnProperty("required"));
            if (payload){
               if(requiredRule){
                   requiredRule.required = true
               }else{
                   target.rules.push({ required: true, message: `${target.options.name}为必填项`, trigger: 'change' })
               }
            }else{
                if(requiredRule){
                    requiredRule.required = false
                }
            }
            target.options.required =payload

        }
        console.log( toJs(state.formElements) )
    }



}

export default mutations
        