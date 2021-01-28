<template>
    <div class="imagebox">
        <img :src="src" alt="">
    </div>
</template>

<script lang="ts">
    import { defineComponent,reactive,onMounted,toRefs } from 'vue'
    import {useStore} from "@/store";
    import useState from "@/hooks/useState";
    import IimageBox from "@/components/ImageBox/IImageBox";

    export default defineComponent({
        name: "ImageBox",
        props:{
          id:{type:String,required:true}
        },
        setup(props,ctx){
            const state = useState<IimageBox>(props.id)
            const store = useStore()

             const  { src } = toRefs(state)
             return { src }
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