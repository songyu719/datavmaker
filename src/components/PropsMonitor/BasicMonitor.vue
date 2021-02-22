<template>
    <div class="box">
        <div class="title">
            <span>基础属性</span>
        </div>
        <el-divider style="margin: 0px"></el-divider>
        <div class="propsbox">
            <el-row :gutter="10">
                <el-col :span="24" >
                        <PropInput  placeholder="图层名" display="row" v-model="name"  />
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12" >
                        <PropInput type="number" prop-name="X" display="row" v-model="x"  />
                </el-col>
                <el-col :span="12">
                    <PropInput type="number" prop-name="Y" display="row" v-model="y"  />
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12">
                    <PropInput type="number"  prop-name="W" display="row" v-model="w"  />
                </el-col>
                <el-col :span="12">
                    <PropInput type="number" prop-name="H" display="row" v-model="h"  />
                </el-col>
            </el-row>

            <el-row :gutter="10">
                <el-col :span="24">
                    <PropInput   prop-name="边框颜色" display="row" v-model="w"  />
                </el-col>
                <el-col :span="24">
                    <PropInput   prop-name="边框样式" display="row" v-model="h"  />
                </el-col>
                <el-col :span="12">
                    <PropInput type="number" prop-name="左上" display="row" v-model="h"  />
                </el-col>
                <el-col :span="12">
                    <PropInput type="number" prop-name="右上" display="row" v-model="h"  />
                </el-col>
                <el-col :span="12">
                    <PropInput type="number" prop-name="左下" display="row" v-model="h"  />
                </el-col>
                <el-col :span="12">
                    <PropInput type="number" prop-name="右下" display="row" v-model="h"  />
                </el-col>
            </el-row>

        </div>

    </div>
</template>

<script lang="ts">
    import PropInput from "./PropInput.vue";
    export default {
        name: "BasicMonitor",
        components:{
            PropInput
        },
        setup(){

        }

    }
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
    .el-col {
        margin-bottom: 10px;
    }


</style>