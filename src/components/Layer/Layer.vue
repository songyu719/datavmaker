<template>
  <div class="layer">


  <div class="box">
    <div class="title">
      <span>报表原件</span>
    </div>
    <el-divider style="margin: 0px"></el-divider>
    <draggable tag="ul"
               :group="{ name: 'dragGroup', pull: 'clone', put: false }"
               v-model="list"
               class="groupList"
               :sort="false">
      <template #item="{element}">
        <Item :name="element.title" :key="element.title" />
      </template>
    </draggable>
  </div>
  </div>

</template>

<script lang="ts">

import {defineComponent, ref, computed,getCurrentInstance} from 'vue'
import draggable from 'vuedraggable'
import {useStore} from '@/store'
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
    const list = computed({
      get(){
        return store.state.dataElements
      },
      set(value){
        console.log(value)
      }
    })

    return {list}
  }

})
</script>

<style lang="less" scoped>

  .layer{
    width: 260px;
    height: 100%;
    overflow-y: scroll;

  }

  .box{
    padding: 10px;

  }

.title {
  display: flex;
  align-items: flex-start;
  line-height: 20px;
  padding-left: 10px;
  color: #000;
  font-family: "微软雅黑";
  font-weight: 400;
  font-size: 14px;

}

.groupName {
  font-size: 15px;
  font-weight: bold;
  line-height: 18px;
}
.groupList {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  justify-content: space-between;

}


</style>