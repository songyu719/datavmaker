
import {reactive,computed} from 'vue'
import {dataElement, storeKey} from "@/store";
import {useStore} from "vuex";
export default function useState<T>(id:string):T{
        const store = useStore(storeKey)
         const target = computed(()=>{
             return store.state.dataElements.find(item=>item.id=id);
         })
        const state = reactive(target.value!.customData)


    return state
}