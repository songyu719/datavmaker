<template>
    <div class="designer" id="designer" ref="wrap">
        <Vue3DraggableResizable class="canvasWrap"   :style="{transform:'scale('+scale+')'}" trigger-key="right" :resizable="false" >
            <DraggableContainer class="canvas">
                <Vue3DraggableResizable
                        :parent-scale-x="scale"
                         :resizable="!item.lock"
                         :draggable="!item.lock"
                         v-show="item.visible"
                        :active="item.active"
                         @drag-end="dragend($event,item.id)"
                         @resize-end="resized($event,item.id)"
                        :parent-scale-y="scale"
                         class="card"
                        :style="{zIndex:dataElements.length-index}"
                        :x="item.x"
                        :y="item.y"
                        :init-h="item.height"
                        :init-w="item.width"
                        v-for="(item,index) in dataElements"
                        :key="item.id"
                        @click="active(item)"
                >
                    <div style="width: 100%;height: 100%;overflow: hidden">
                        <component :is="item.component" :id="item.id"></component>
                    </div>

                </Vue3DraggableResizable>
            </DraggableContainer>
        </Vue3DraggableResizable>
    </div>
</template>

<script lang="ts">
    import {onMounted, ref,defineComponent,nextTick,computed,watchEffect,reactive} from "vue";
    import {useStore} from '@/store'
    import {divide,round} from "@/utils/math"
    import scalelv from "@/utils/scaleLv";
    import useScale from "@/hooks/useScale";
    export default defineComponent({
        name: "Designer",
        props:{
            name
        },
        setup(props,ctx){
            const  store = useStore();
            const  scale = computed(()=>{
                return store.state.scale;
            })
            const dataElements = computed(()=>{
                return store.state.dataElements
            })
            const curScale = useScale()
            const  wrap = ref<HTMLElement>()
            watchEffect(()=>{
                store.commit("changeScale", scalelv[curScale.value])
            })
            onMounted(()=>{
                //计算默认缩放
                nextTick(()=>{
                    for(let i =0 ;i<scalelv.length;i++){
                        if(scalelv[i] === round( divide(wrap.value!.clientWidth ,1920),1)){
                            curScale.value = i;
                            return
                        }
                    }
                    store.commit("changeScale", 1)
                })
            });
            function dragend(e: { x:number,y:number },id:string){
                store.commit("updatePos",{pos:e,id})
            }
            function resized(pos:{x:number,y:number,w:number,h:number},id:string) {
                    store.commit("updateSize",{pos,id})
            }
            function active(item:any) {
                if(!item.lock){
                    store.commit("toggleActive",{id:item.id,isActive:true})
                }

            }
            return {scale,wrap,dataElements,dragend,resized,active}
        }
    })
</script>

<style scoped lang="less">

    .vdr-container.active{
        border-color: #fff;
    }
    .designer {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        /*background:url("https://img.alicdn.com/tfs/TB184VLcPfguuRjSspkXXXchpXa-14-14.png");*/
        background:@input-bg-color
    }
    .canvasWrap{
        position: absolute;
        width: 1920px;
        height: 1920px;
        transform-origin: left top;
        box-shadow:  #000 0 0 80px 0;

    }

    .card{
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: bold;
    }
</style>