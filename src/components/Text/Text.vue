<template>
<div class="Text" :style="textstyle">
    {{text}}
</div>
</template>

<script lang="ts">
import {defineComponent,toRefs,computed,onMounted} from 'vue'
import useState from "@/hooks/useState";
import IText from "@/components/Text/IText";
import {useStore} from "@/store";

export default defineComponent({
    name: "Text",
    props:{
        id:{
            type:String,required:true
        }
    },


    setup(props,ctx){
        const store =  useStore()
        const state = store.getters.getElemenById(props.id)
         const {fontSize,color,fontWidget,text} = toRefs(state)
         const textstyle = computed(()=>{
             return {
                 fontSize:`${fontSize?fontSize.value:0}px`,
                 color:color?color.value:"#fff",
                 fontWidget:fontWidget?fontWidget.value:"normal",
             }
         })


        onMounted(()=>{
            console.log("这里面是啥",state)
        })

        return { fontSize,color,fontWidget,text,textstyle }
    }
})
</script>

<style scoped lang="less">
.Text {
  width: 100%;
  height: 100%;
}
</style>