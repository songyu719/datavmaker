<template>
    <div class="box">
        <div class="title">
            <span>文字属性</span>
        </div>
        <el-divider style="margin: 0px"></el-divider>
        <div class="propsbox">
            <el-row :gutter="10" >
                <el-col :span="24" >
                    <PropInput  placeholder="字体大小" display="row"  prop-name="字体大小"  v-model="fontSize"  />
                </el-col>
                <el-col :span="24">
                    <PropInput  placeholder="字体样式" display="row"  prop-name="字体样式"  v-model="fontWidget"  />
                </el-col>
                <el-col :span="24">
                    <PropInput  placeholder="颜色" display="row"   v-model="color" prop-name="颜色">
                        <el-color-picker   v-model="color"  size="mini" ></el-color-picker>
                    </PropInput>
                </el-col>
                <el-col :span="24">
                    <PropInput  placeholder="内容" display="row"  prop-name="内容"  v-model="text"  />
                </el-col>
            </el-row>
        </div>
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
            const store = useStore()
            const {updateProps} = useCommits()
            const currentElement =  computed(()=>{
                return <IText>store.getters.currentElement.customData
            })

            const fontSize = computed({
               get:()=>{
                   return currentElement.value.fontSize
               },
                set:(v)=>{
                   updateProps({id:store.getters.currentElement.id,props:"fontSize",value:v})
                }
            })

            const fontWidget = computed({
                get:()=>{
                    return currentElement.value.fontWidget
                },
                set:(v)=>{
                    updateProps({id:store.getters.currentElement.id,props:"fontWidget",value:v})
                }
            })

            const color = computed({
                get:()=>{
                    return currentElement.value.color
                },
                set:(v)=>{
                    updateProps({id:store.getters.currentElement.id,props:"color",value:v})
                }
            })

            const text = computed({
                get:()=>{
                    return currentElement.value.text
                },
                set:(v)=>{
                    updateProps({id:store.getters.currentElement.id,props:"text",value:v})
                }
            })


            return {fontSize,fontWidget,color,text}
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