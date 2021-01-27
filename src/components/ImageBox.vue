<template>
    <div class="imagebox">
        <img :src="src" alt="">
    </div>
</template>

<script lang="ts">
    import { defineComponent,reactive,onMounted,toRefs } from 'vue'
    import {storeKey} from "@/store";
    import {useStore} from "vuex";

    export default defineComponent({
        name: "ImageBox",
        props:{
          id:String
        },
        setup(props,ctx){
            const state = reactive({
                src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg",
            });
            const store = useStore(storeKey)
            onMounted(()=>{
                store.commit("initState",{id:props.id,data:state})
            })
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