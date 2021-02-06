<template>
    <div class="imagebox">
        <img :alt="alt" :src="src" @click="click" @load="load">
    </div>
</template>

<script lang="ts">
    import {defineComponent, toRefs,onMounted} from 'vue'
    import {useStore} from "@/store";
    import {IimageBox} from "@/components/interface/IImageBox";
    import useCommits from "@/hooks/useCommits";


    export default defineComponent({
        name: "ImageBox",
        props: {
            id: {type: String, required: true}
        },
        setup(props, ctx) {
            const store = useStore()
            const Commits = useCommits()
            const state = <IimageBox>store.getters.getElemenById(props.id)
            const load = () => {
                for (let o in state.events) {
                    if (o == "load") {
                        for (let fun of state.events[o]!) {
                            fun.command(Commits,state)
                        }
                    }
                }
            }
            onMounted(()=>{
                for(let o in state.events){
                    if(o == "mounted"){
                        for(let fun of state.events[o]!){
                            fun.command(Commits)
                        }
                    }
                }

            })

            return {...toRefs(state), load}
        }
    })
</script>

<style lang="less" scoped>
    .imagebox {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }
</style>