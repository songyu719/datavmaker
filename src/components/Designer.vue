<template>
    <div class="designer" id="designer" ref="wrap">

    </div>
</template>

<script lang="ts">
    import {onMounted, ref,defineComponent,nextTick,computed,watchEffect,reactive} from "vue";
    import {useStore} from '@/store'
    import {divide,round} from "@/utils/math"
    import scalelv from "@/utils/scaleLv";
    import useScale from "@/hooks/useScale";
    import useCommits from "@/hooks/useCommits";
    import EChartBar from "@/components/EChartBar/EChartBar.vue";
    export default defineComponent({
        name: "Designer",
        components:{
            EChartBar
        },
        props:{
            name
        },
        setup(props,ctx){
            const  store = useStore();


            return {}
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