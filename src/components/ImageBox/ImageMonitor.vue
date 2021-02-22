<template>
    <div class="box">
    </div>
</template>

<script lang="ts">
    import PropInput from "@/components/PropsMonitor/PropInput.vue"
    import {useStore} from "@/store"
    import {defineComponent,computed,ref} from "vue"
    import useCommits from "@/hooks/useCommits";
    import {IimageBox,Event} from "@/components/interface/IImageBox";
    import Editor from "@/components/CodeEditor/Index.vue"

    export default defineComponent({
        name: "ImageMonitor",
        components:{
            PropInput,
            Editor
        },
        setup(props,ctx){

        }

    })
</script>

<style scoped lang="less">
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
    .eventbox{
        margin: 10px;

        padding: 10px;
    }
    .el-col {
        margin-bottom: 10px;
        color: @fontColor;
    }
    .event{
        flex:1;
        color: @fontColor;
        text-align: left;
        padding: 5px;

    }
    .func{
        color: @fontColor;
        li{
            margin-bottom: 10px;
            font-size: 12px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            span{
                background: @input-bg-color;
                padding: 5px;
                flex:1;
                border: solid 1px @input-border-color;
                margin-right: 10px;
            }
        }
    }

</style>