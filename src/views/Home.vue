<template>
  <div class="home">
    <el-container>
      <el-header>
        <ToolsBar/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Layer></Layer>
        </el-aside>
        <el-container>
          <el-main>
            <Designer/>
          </el-main>
          <el-footer>
            <span>画布大小:1920 * 1080</span>
            <span>缩放:{{ scale }}%</span>
            <span>元素数量:{{ dataElementCount }}</span>
          </el-footer>
        </el-container>
        <el-aside width="250px">
          <BasicMonitor/>
          <component :is="currentElement.monitor"/>
        </el-aside>
      </el-container>
    </el-container>
  </div>
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

export default defineComponent({
  name: 'Home',
  components: {
    Designer,
    Layer,
    ToolsBar,
    BasicMonitor

  },
  setup(props, ctx) {

    const store = useStore();
    const scale = computed(() => times(store.state.scale, 100))
    const dataElementCount = computed(() => store.state.dataElements.length)
    const currentElement = computed(() => {
      return store.getters.currentElement;
    })
    onMounted(() => {
      document.oncontextmenu = () => {
        return false;
      }
    });

    return {scale, dataElementCount, currentElement}
  }

});
</script>

<style lang="less">
.el-container {
  height: 100%;
}

.el-main {
  padding: 0px !important;
}

.home {
  height: 100%;
}

.el-header {
  height: 40px !important;
  background: @main-color;
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
  border-right: 1px solid @main-border-color;
  border-left: 1px solid @main-border-color;
  background-color: @panelColor;
}


</style>