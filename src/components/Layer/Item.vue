<template>
    <li :class="{active:props.active}">

        <div class="inputbox"><input type="text" :value="props.name" /> </div>
            <div class="btns">
                <i @click="toggle" :class="lock?'el-icon-lock':'el-icon-unlock'"></i>
            </div>

    </li>

</template>

<script lang="ts">
    import {defineComponent,ref} from "vue";

    export default defineComponent({
        name: "item",
        props:{
            name:{
                type:String
            },
            id:{
                type:String
            },
            active:{
                type:Boolean
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
        margin-bottom: 12px;
        height: 40px;
        display: flex;
        align-items: center;
        border-radius: 2px;
        background: #ffffff;
        box-shadow: 2px 2px 2px #d9d9d9, -5px -5px 10px #ffffff;
        font-size: 12px;
        padding: 5px 10px;
        flex-direction: row;
        color: #909399;
        justify-content: space-between;
        user-select: none;
        width: 180px;
        .btns{
            margin-left: 10px;
        }
        .inputbox{
            flex:1;
            input{
                width: 100%;
                outline: none;
                border: none;
                background: transparent;
                padding: 5px;
                &:focus{
                    border: solid 1px #c0c0c0;
                }
            }
        }

    }

    .active {
        box-shadow: 2px 2px 2px rgba(0,0,0,0.9);
        background: rgba(64, 158, 255,0.8);
        color: #ffffff;
        input{
            color: #ffffff;
            &:focus{

                border: solid 1px #fff!important;
            }
        }



    }

</style>