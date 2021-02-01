<template>
    <div class="box">
        <div class="title">
            <span>图片属性</span>
        </div>
        <el-divider style="margin: 0px"></el-divider>
        <div class="propsbox">
            <el-row :gutter="10" >
                <el-col :span="24" >
                    <PropInput  placeholder="路径" display="row"  prop-name="地址"  v-model="src"  />
                </el-col>
                <el-col :span="24">
                    <PropInput  placeholder="描述" display="row"  prop-name="描述"  v-model="alt"  />
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import PropInput from "../PropsMonitor/PropInput";
    import {useStore} from "@/store";
    import {defineComponent,computed} from "vue"
    import useCommits from "@/hooks/useCommits";
    export default defineComponent({
        name: "ImageMonitor",
        components:{
            PropInput
        },
        setup(props,ctx){
           const store = useStore()
           const currentElement =  computed(()=>{
               return store.getters.currentElement.customData
           })
            const { updateProps } = useCommits()

            const src = computed({
                get(){
                    console.log(currentElement)
                    return currentElement.value.src
                },
                set(v){
                    updateProps({id:store.getters.currentElement.id,props:"src",value:v})
                },
            })
            const alt = computed({
                get(){
                    return currentElement.value.alt
                },
                set(v){
                    updateProps({id:store.getters.currentElement.id,props:"alt",value:v})
                }
            })

           return {currentElement,src,alt}
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