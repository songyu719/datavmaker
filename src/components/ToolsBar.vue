<template>
  <div class="toolsbar">


  </div>
</template>

<script lang="ts">
import {useStore} from "@/store"
import useCommits from "@/hooks/useCommits";
import { defineComponent,onMounted } from "vue"
export default defineComponent({
  name: "ToolsBar",
  setup() {

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


  .toolsbar_btn_left {

  }

  .toolsbar_btn_right {

  }
}
</style>