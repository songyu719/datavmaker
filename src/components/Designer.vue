<template>
    <div class="designer" ref="wrap">
        <Vue3DraggableResizable class="canvasWrap"  :style="{transform:'scale('+scale+')'}" trigger-key="right" :resizable="false" >
            <DraggableContainer class="canvas">
                <Vue3DraggableResizable :parent-scale-x="scale" :active="true"   @drag-end="dragend($event,item.id)" :parent-scale-y="scale" class="card" :style="{background:item.color,zIndex:components.length-index}" :x="item.x" :y="item.y" :init-h="100" :init-w="100" v-for="(item,index) in components">
                    {{ item.name }}
                </Vue3DraggableResizable>
            </DraggableContainer>
        </Vue3DraggableResizable>
    </div>
</template>

<script lang="ts">
    import {onMounted, ref,defineComponent,nextTick,computed,watchEffect} from "vue";
    import {useStore} from 'vuex'
    import {divide,round} from "@/utils/math"
    import scalelv from "@/utils/scaleLv";
    export default defineComponent({
        name: "Designer",
        setup(){
            const store = useStore();
            const  scale = computed(()=>{
                return store.state.scale;
            })
            const components = computed(()=>{
                return store.state.components
            })
            const curScale = ref(0);
            const  wrap = ref<HTMLElement>()
            function onMouseWheel(e:WheelEvent){
                if(e.deltaY<0){
                    if(curScale.value<scalelv.length-1){
                        curScale.value += 1
                    }
                }else{
                    if(curScale.value>0){
                        curScale.value -= 1
                    }
                }
            }
            watchEffect(()=>{
                store.commit("changeScale", scalelv[curScale.value])
            })

            onMounted(()=>{
                //@ts-ignore
                window.addEventListener("mousewheel",onMouseWheel,false);
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

            return {scale,wrap,components,dragend}
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
        background:#fff;

    }
    .canvasWrap{
        position: absolute;
        width: 1920px;
        height: 1920px;
        transform-origin: left top;
        background: #ffffff;
        box-shadow:  20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff;

    }
    .canvas{
        background: #ffffff;
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