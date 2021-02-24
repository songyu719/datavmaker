<template>

  <el-container>
    <el-header>Header</el-header>
    <el-container>

      <el-aside width="260px">
        <Layer/>
      </el-aside>

      <el-main>
        <Designer />
      </el-main>

      <el-aside>

        <component :is="currentElement.monitor" v-if="currentElement" />

      </el-aside>
    </el-container>
  </el-container>

</template>

<script lang="ts">
import {defineComponent, ref, onMounted, computed} from 'vue';
import Designer from "../components/Designer.vue";
import Layer from "../components/Layer/Layer.vue"
import ToolsBar from "@/components/ToolsBar.vue"
import {times} from "@/utils/math";
import {storeKey, useStore} from "@/store";
import BasicMonitor from "@/components/PropsMonitor/BasicMonitor.vue"
import ImageMonitor from "@/components/ImageBox/ImageMonitor.vue"
import TextMonitor from "@/components/Text/TextMonitor.vue";

export default defineComponent({
  name: 'Home',
  components: {
    Designer,
    Layer,
    ToolsBar,
    BasicMonitor,
    TextMonitor
  },
  setup(props, ctx) {

    const store = useStore();

    const dataElementCount = computed(() => store.state.dataElements.length)
    const currentElement = computed(() => {
      return store.getters.CurrentElements;
    })
    onMounted(() => {
      document.oncontextmenu = () => {
        return false;
      }
    });

    return { dataElementCount, currentElement}
  }

});
</script>

<style lang="less">
.el-container {
  height: 100%;
  overflow: hidden;
}

.el-main {
  padding: 0px !important;
}



.el-header {
  box-shadow: 0 0 8px 1px rgba(0 ,0 ,0,0.3);
  background: @main-color;
  z-index: 3;
}

.el-footer {
  background-color: @main-color;
  border-top: 1px solid @main-border-color;
  height: 30px !important;
  display: flex;
  align-items: center;
  color: #c0c0c0;
  font-size: 12px;
  justify-content: space-between;
}

.el-aside {
  height: 100%;
  width: 260px;
  padding: 10px;
  border-right: 1px solid @main-border-color;
  border-left: 1px solid @main-border-color;
  background-color: @panelColor;
  overflow: hidden!important;
}


</style>