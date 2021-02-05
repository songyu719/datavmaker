<template>
  <div class="box-card">
    <div class="title">
      <span>图层</span>
    </div>
    <el-divider style="margin: 0px"></el-divider>
    <draggable tag="ul" v-model="list" class="layer_list">
      <template #item="{element}">
        <Item :name="element.name" :id="element.id" :key="element.id" :active="element.active"/>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts">

import {defineComponent, ref, computed,getCurrentInstance} from 'vue'
import draggable from 'vuedraggable'
import {useStore} from '@/store'
import {dataElement} from "@/store"
import Item from './Item.vue'
import useCommits from "@/hooks/useCommits"

export default defineComponent({
  name: "Layer",
  components: {
    draggable,
    Item
  },
  setup(props) {
    const store = useStore();
    const {sortLayer} = useCommits()
    const list = computed({
      get() {
        return store.state.dataElements;
      },
      set(value: dataElement[]) {
        sortLayer(value)

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

.title {
  display: flex;
  align-items: flex-start;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  color: #000;
  font-family: "微软雅黑";
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;

}

.layer_list {
  width: 100%;
  padding: 10px;
}


</style>