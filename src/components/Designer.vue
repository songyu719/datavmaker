<template>
    <div class="designer">
        <Vue3DraggableResizable class="canvasWrap"  :style="{transform:'scale('+scale+')'}" trigger-key="right" :resizable="false" >
            <DraggableContainer class="canvas">
                <Vue3DraggableResizable :parent-scale-x="scale" :parent-scale-y="scale">
                    你好啊
                </Vue3DraggableResizable>
            </DraggableContainer>
        </Vue3DraggableResizable>
    </div>
</template>

<script lang="ts">
    import {onMounted, ref} from "vue";

    export default {
        name: "Designer",
        setup(){
            const  scale = ref(1)
            function onMouseWheel(e:WheelEvent){
                if(e.deltaY<0){
                    if(scale.value<5){
                        scale.value = Math.fround((scale.value +0.1)*100 )/100 ;
                    }

                }else{
                    if(scale.value>0.2){
                        scale.value = Math.fround((scale.value -0.1)*100)/100
                    }

                }
            }
            onMounted(()=>{
                //@ts-ignore
                window.addEventListener("mousewheel",onMouseWheel,false);
            });

            return {scale}
        }
    }
</script>

<style scoped lang="less">

    .vdr-container.active{
        border-color: #E5E5E5;
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
        background:#E5E5E5 ;

    }
    .canvasWrap{
        position: absolute;
        width: 1920px;
        height: 1920px;
        transform-origin: center top;
        border: solid 1px  #42b983;;

    }
    .canvas{
        background: #fff;


    }
</style>