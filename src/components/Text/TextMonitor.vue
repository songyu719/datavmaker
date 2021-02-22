<template>
    <div class="box">

    </div>
</template>

<script lang="ts">
    import { defineComponent,computed } from 'vue'
    import useCommits from "@/hooks/useCommits";
    import {useStore} from "@/store";
    import IText from "@/components/interface/IText";
    import PropInput from "@/components/PropsMonitor/PropInput.vue";
    export default defineComponent({
        name: "TextMonitor",
        components:{
            PropInput
        },
        setup(props,ctx){

        }
    })
</script>

<style scoped>
    .box{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .title{
        display: flex;
        align-items: flex-start;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        color: #000;
        font-family:"微软雅黑";
        color: #fff;
        font-weight: 400;
        font-size: 14px;
    }
    .propsbox{
        padding: 10px;
    }
    .el-col {
        margin-bottom: 10px;
    }

</style>