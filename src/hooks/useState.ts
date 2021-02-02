
import {computed} from 'vue'
import {useStore} from "@/store";
export default function myState<T>(id:string):T{
        console.log("这里什么只有我自己呢",id)
        const store = useStore()
        return  store.state.dataElements.find(item=>item.id=id)!.customData
}