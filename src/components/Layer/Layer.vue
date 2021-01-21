<template>
    <div class="box-card">
            <div class="title">
                <span>图层</span>
            </div>
        <el-divider style="margin: 0px"></el-divider>
        <draggable tag="ul" v-model="list" class="layer_list">
            <template #item="{element}" >
                <Item :name="element.name" />
            </template>
        </draggable>
    </div>
</template>

<script lang="ts">

import { defineComponent,ref,computed } from 'vue'
import draggable from 'vuedraggable'
import {useStore} from 'vuex'
import {sotorekey} from "../../store"
import Item from './Item.vue'
export default defineComponent({
        name: "Layer",
        components:{
            draggable,
            Item
        },
        setup(props,ctx){
            const store = useStore(sotorekey);

            const list = computed({
                get(){
                    return store.state.dataElements;
                },
                set(value){
                    return store.commit("sortList",value)
                }
            })

            return {list}
        }

    })
</script>

<style lang="less" scoped>


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
        font-size: 14px;
        background: linear-gradient(145deg, #ffffff, #e6e6e6);
        box-shadow:  13px 13px 23px #e3e3e3,-13px -13px 23px #ffffff;
    }
    .layer_list{
        width: 100%;
        padding: 10px;
    }
    

</style>