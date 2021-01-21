<template>
    <li><span>{{ props.name}} </span>  <i @click="toggle" :class="lock?'el-icon-lock':'el-icon-unlock'"></i></li>

</template>

<script lang="ts">
    import {defineComponent,ref} from "vue";

    export default defineComponent({
        name: "item",
        props:{
            name:{
                type:String
            }
        },
        setup(props, ctx) {
        const  lock = ref<boolean>(true)

            function toggle(){
                lock.value = !lock.value
            }

            return {lock,toggle,props}

        }
    })
</script>

<style lang="less" scoped>
    li {
        margin-bottom: 10px;
        height: 40px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        background: #ffffff;
        box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
        font-size: 12px;
        padding: 5px 10px;
        flex-direction: row;
        color: #909399;
        justify-content: space-between;
        user-select: none;

        i {
            font-size: 16px;
            cursor: pointer;
        }
    }

    li:hover {
        background: #ffffff;
        box-shadow: 6px 6px 12px #b0b0b0,-6px -6px 12px #ffffff;

    }

</style>