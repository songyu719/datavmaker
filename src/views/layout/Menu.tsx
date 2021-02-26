import { defineComponent } from 'vue'
import {useRouter } from 'vue-router'
   export  default  defineComponent({

       setup(props,ctx){
        const  route = useRouter()


           return ()=>{
               return (
                   <div>
                       {route.getRoutes().map(item=>{
                           return <span>{item.meta.title}</span>
                           })}
                   </div>
               )
           }
       }

   })
