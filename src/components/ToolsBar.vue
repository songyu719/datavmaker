<template>
  <div class="toolsbar">
    <div class="toolsbar_btn_left">
      <el-button type="primary" icon="el-icon-plus" size="mini" @click="AddElement"></el-button>
      <el-button type="primary" icon="el-icon-plus" size="mini" @click="AddText"></el-button>
    </div>
    <div class="toolsbar_btn_right">
      <el-button type="primary" class="iconfont iconchexiao" size="mini"></el-button>
    </div>
  </div>
</template>

<script>
import {useStore} from "@/store"
import useCommits from "@/hooks/useCommits";

export default {
  name: "ToolsBar",
  setup() {
    const store = useStore();
    const {AddElements} = useCommits()

    function getRandomColor() {

      return '#' + Math.floor(Math.random() * 16777215).toString(16);

    }

    function AddElement() {
      AddElements(
          {
            name: `图层${store.state.dataElements.length + 1}`,
            color: getRandomColor(),
            id: `u${store.state.dataElements.length + 1}`,
            x: 200,
            y: 200,
            width: 100,
            height: 100,
            visible: true,
            component: "ImageBox",
            monitor: "ImageMonitor",
            customData: {
              src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1160360589,2429665544&fm=26&gp=0.jpg"
            }
          }
      )
    }

    function AddText() {
      AddElements(
          {
            name: `图层${store.state.dataElements.length + 1}`,
            color: getRandomColor(),
            id: `u${store.state.dataElements.length + 1}`,
            x: 200,
            y: 200,
            width: 100,
            height: 100,
            visible: true,
            component: "Text"
          }
      )
    }

    return {AddElement, AddText}
  }
}
</script>

<style lang="less" scoped>
.toolsbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: solid 1px #000;

  .toolsbar_btn_left {

  }

  .toolsbar_btn_right {

  }
}
</style>