
import {reactive,computed} from 'vue'
import {dataElement, useStore} from "@/store";
export default function useState<T>(id:string):T{
        const store = useStore()
         const target = computed(()=>{
             return store.state.dataElements.find(item=>item.id=id);
         })

        const state = reactive(target.value!.customData)


    return state
}