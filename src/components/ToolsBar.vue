<template>
  <div class="toolsbar">
    <div class="toolsbar_btn_left">
      <el-button type="primary" icon="iconfont iconimage " size="mini" @click="AddElement"></el-button>
      <el-button type="primary" icon="iconfont icontext" size="mini" @click="AddText"></el-button>
      <el-button type="primary" icon="iconfont iconhistogram" size="mini" @click="AddText"></el-button>
      <el-button type="primary" icon="iconfont iconbingtu" size="mini" @click="AddText"></el-button>
      <el-button type="primary" icon="iconfont iconzhexiantu" size="mini" @click="AddText"></el-button>
      <el-button type="primary" icon="iconfont iconditu" size="mini" @click="AddText"></el-button>
    </div>
    <div class="toolsbar_btn_right">
      <el-button type="primary" class="iconfont iconchexiao" size="mini"></el-button>
      <el-button type="primary" class="iconfont iconfanhui-copy" size="mini"></el-button>

      <el-button type="primary" class="iconfont iconziyuan"  size="mini"></el-button>
    </div>

  </div>
</template>

<script lang="ts">
import {useStore} from "@/store"
import useCommits from "@/hooks/useCommits";
import { defineComponent,onMounted } from "vue"
export default defineComponent({
  name: "ToolsBar",
  setup() {
    const store = useStore();
    const {AddElements,updateProps} = useCommits()
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
            active:false,
            lock:false,
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
            width: 200,
            height: 80,
            visible: true,
            component: "Text",
            lock:false,
            active:false,
            monitor:"TextMonitor",
            customData:{
              fontSize:18,
              color:"white",
              fontWidget:"normal",
              text:"请填写文字",
            }
          },

      )
    }





           onMounted(()=>{

           })

    return {AddElement, AddText}
  }
})
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