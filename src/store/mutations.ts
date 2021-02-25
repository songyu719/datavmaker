import {State} from "@/store/index";
import {UIElement} from "@/utils/UIElements";
import {guid, toJs} from "@/utils/tools"
import {SingleInputFormat} from "@/utils/Validator"
import {remove} from "@/utils/array";

const mutations = {
    updateForm(state: State, payload: UIElement[]) {
        payload = toJs(payload)
        for (const pay of payload) {
            if (!pay.id) {
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
        state.formElements.forEach(item => {
            item.active = item.id == payload.id;
        })
        console.log(toJs(state.formElements))
    },
    updateOptions(state: State, payload: { propName: string, value: any }) {
        const target = state.formElements.find(item => item.active)
        if (target) {
            target.options[payload.propName] = payload.value
        }
    },


    //设置是否为必填项目
    setRequired(state: State, payload: boolean) {
        const target = state.formElements.find(item => item.active)
        if (target) {
            const requiredRule = target.rules.find((item: any) => item.hasOwnProperty("required"));
            if (payload) {
                if (requiredRule) {
                    requiredRule.required = true
                } else {
                    target.rules.push({required: true, message: `${target.options.name}为必填项`, trigger: 'change'})
                }
            } else {
                if (requiredRule) {
                    requiredRule.required = false
                }
            }
            target.options.required = payload

        }
    },
    //设置文本框格式
    setFormat(state: State, payload: string) {
        const target = state.formElements.find(item => item.active)
        const abc = []
        if (target) {
            const rule = target.rules.find((item:any)=>item.name == 'format')

            if(rule){
                rule.validator =  SingleInputFormat(payload,target)
                if(payload == "0"){
                    remove(target.rules,rule)
                }

            }else{
                if(payload!="0"){
                    target.rules.push(
                        {validator: SingleInputFormat(payload,target), trigger: 'change',name:"format" }
                    )
                }

            }


            console.log(target)
        }
    }


}


export default mutations
        