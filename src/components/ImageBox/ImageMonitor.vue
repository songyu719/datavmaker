<template>
    <div class="box">
        <div class="title">
            <span>图片属性</span>
        </div>
        <el-divider style="margin: 0px"></el-divider>
        <div class="propsbox">
            <el-row :gutter="10" v-for="(v,k) in currentElement">
                <el-col :span="24" >
                    <PropInput  placeholder="路径" display="row"  :prop-name="k"  v-model="src"  />
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import PropInput from "../PropsMonitor/PropInput";
    import {storeKey} from "@/store";
    import {useStore} from "vuex";
    import {defineComponent,computed} from "vue"
    export default defineComponent({
        name: "ImageMonitor",
        components:{
            PropInput
        },
        setup(props,ctx){
           const store = useStore(storeKey)
           const currentElement =  computed(()=>{
               return store.getters.currentElement.customData
           })
            const src = computed({
                get(){
                    return store.getters.currentElement.customData.src
                },
                set(v){
                    store.getters.currentElement.customData.src = v;
                },
            })

           return {currentElement,src}
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