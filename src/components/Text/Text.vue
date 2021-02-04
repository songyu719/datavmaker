<template>

<div class="Text" :style="textstyle" @dblclick="editing=true" v-if="!editing">

        {{displayText}}


</div>

    <textarea class="Text" :style="textstyle" @blur="onblur"  v-model="displayText" v-if="editing">

        {{displayText}}


    </textarea>
</template>

<script lang="ts">
import {defineComponent,toRefs,computed,onMounted,ref} from 'vue'
import IText from "@/components/interface/IText";
import {useStore} from "@/store";
import useCommits from "@/hooks/useCommits";

export default defineComponent({
    name: "Text",
    props:{
        id:{
            type:String,required:true
        }
    },


    setup(props,ctx){
        const store =  useStore()
        const state = <IText>store.getters.getElemenById(props.id)

         const {fontSize,color,fontWidget,text,click} = toRefs(state)
         const {updateProps} = useCommits()
         const textstyle = computed(()=>{
             return {
                 fontSize:`${fontSize?fontSize.value:0}px`,
                 color:color?color.value:"#fff",
                 fontWeight:fontWidget?fontWidget.value:"normal",
             }
         })

        const editing = ref(false)
        const displayText =  computed({
            get:()=>{
                return text.value
            },
            set:(v)=>{
                console.log("没有执行么？")
                updateProps({id:props.id,props:"text",value:v})
             }
        })
        const myclick=()=>{
            click.value("传过去的值");
            console.log("原生方法")
        }

        onMounted(()=>{
            console.log("这里面是啥",state)
        })

        function onblur(){
            editing.value=false
            console.log("失去焦点")
        }




        return { fontSize,color,fontWidget,displayText,textstyle,myclick,editing,onblur }
    }
})
</script>

<style scoped lang="less">
.Text,textarea {
  width: 100%;
  height: 100%;
  text-align: left;
  background: transparent;
  padding: 0px;
  margin: 0px;
    outline: none;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

</style>