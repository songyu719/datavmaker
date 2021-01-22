<template>
  <div class="home">

      <el-container>
          <el-header><ToolsBar /></el-header>
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
                  <span>缩放:{{scale}}%</span>
                  <span>元素数量:{{dataElementCount}}</span>
                  </el-footer>
              </el-container>
              <el-aside width="200px"><BasicMonitor /></el-aside>
          </el-container>
      </el-container>


  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, computed} from 'vue';
import Designer from "../components/Designer.vue";
import Layer from "../components/Layer/Layer.vue"
import ToolsBar from "@/components/ToolsBar.vue"
import {useStore} from "vuex";
import {times} from "@/utils/math";
import {storeKey} from "@/store";
import BasicMonitor from "@/components/PropsMonitor/BasicMonitor.vue"

export default defineComponent({
  name: 'Home',
  components: {
      Designer,
      Layer,
      ToolsBar,
      BasicMonitor

  },
   setup(props,ctx){

       const store = useStore(storeKey);
       const scale = computed(()=>times(store.state.scale,100))
       const dataElementCount = computed(()=>store.state.dataElements.length)
        onMounted(()=>{
           document.oncontextmenu = ()=>{
               return false;
           }
        });

        return {scale,dataElementCount}
   }

});
</script>

<style lang="less">
    @fontColor :#bcc9d4;
    @panelColor:#1d2127;
    @input-bg-color:#262C33;
    .el-container {
        height: 100%;
    }
    .el-main{
        padding: 0px!important;
    }
    .home{
        height: 100%;
    }
    .el-header{
        height: 40px!important;
        background: #1d1e1f;
    }
    .el-footer{
        background-color: #1d1e1f;
        border-top:  1px solid #000;
        height: 30px!important;
        display: flex;
        align-items: center;
        color:#c0c0c0;
        font-size: 12px;
        justify-content: space-between;
    }

    .el-aside {
        border-right: 1px solid #000;
        border-left: 1px solid #000;
        background-color: @panelColor;
    }


</style>