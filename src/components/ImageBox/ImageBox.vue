<template>
    <div class="imagebox">
        <img :src="src" :alt="alt">
    </div>
</template>

<script lang="ts">
    import { defineComponent,toRefs } from 'vue'
    import {useStore} from "@/store";

    export default defineComponent({
        name: "ImageBox",
        props:{
          id:{type:String,required:true}
        },
        setup(props,ctx){
            const store = useStore()
             const state = store.getters.getElemenById(props.id)

             return { ...toRefs(state) }
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