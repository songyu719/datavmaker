
import {computed} from 'vue'
import {useStore} from "@/store";
export default function useState<T>(id:string):T{
        const store = useStore()
         const target = computed(()=>{
             return store.state.dataElements.find(item=>item.id=id);
         })
        return  target.value!.customData
}