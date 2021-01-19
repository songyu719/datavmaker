<template>
    <div class="box-card">
            <div class="title">
                <span>图层</span>
            </div>
        <el-divider style="margin: 0px"></el-divider>
    </div>
</template>

<script>
    export default {
        name: "Layer"
    }
</script>

<style scoped>


    .box-card {
        width: 100%;
        height: 500px;
    }
    .title{
        display: flex;
        align-items: flex-start;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        color: #000;
        font-family:"微软雅黑";
        color: #909399;
        font-weight: 400;

    }

</style>