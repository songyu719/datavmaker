import {UIElement} from "@/utils/UIElements";
export function SingleInputFormat(type:string,target:UIElement) {
    const number = /^[0-9]*$/
    const double = /^[0-9]+\.[0-9]{2}$/
    const percent  = /^[0-9]+(.[0-9]{2})?$/

    if (type!= "0"){
        return (rule:any,value:any,callback:any)=>{

            switch (type) {
                case "1":
                    if(!number.test(value)){
                        rule.message ="请填入数字"
                        callback(new Error("请填入数字"))
                    }
                    break;
                case "2":
                    if(!double.test(value)){
                        rule.message ="请填入含有两位小数的正实数"
                        callback( new Error("请填入含有两位小数的正实数") )
                    }
                case "3":
                    if(!percent.test(value)){
                        rule.message="请输入整数且最多含有两位小数"
                        callback(new Error("请输入整数且最多含有两位小数"))
                    }
                    break;
                default:

                    break;
            }
        }
    }else{
        return  null
    }

}