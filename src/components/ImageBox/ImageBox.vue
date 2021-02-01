<template>
    <div class="imagebox">
        <img :src="src" :alt="alt">
    </div>
</template>

<script lang="ts">
    import { defineComponent,toRefs,watchEffect,watch } from 'vue'
    import useState from "@/hooks/useState";
    import IimageBox from "@/components/ImageBox/IImageBox";

    export default defineComponent({
        name: "ImageBox",
        props:{
          id:{type:String,required:true}
        },
        setup(props,ctx){
            const state = useState<IimageBox>(props.id)
            const {src,alt} =  toRefs(state)
            watch(alt,()=>{
                console.log("我变了能咋地",alt.value)
            })

             return {src,alt}
        }
    })
</script>

<style lang="less" scoped>
        .imagebox{
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
</style>