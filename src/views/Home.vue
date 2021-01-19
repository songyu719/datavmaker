<template>
  <div class="home">

      <el-container>
          <el-header>Header</el-header>
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
                  <span>缩放:80%</span>
                  <span>元素数量:8</span>
                  </el-footer>
              </el-container>
              <el-aside width="200px">Aside</el-aside>
          </el-container>
      </el-container>


  </div>
</template>

<script lang="ts">
import { defineComponent,ref,onMounted } from 'vue';
import Designer from "../components/Designer.vue";
import Layer from "../components/Layer.vue"
//@ts-ignore
export default defineComponent({
  name: 'Home',
  components: {
      Designer,
      Layer

  },
   setup(props,ctx){
        const  scale = ref(0.5)
        function onMouseWheel(e:WheelEvent){
            if(e.deltaY<0){
                if(scale.value<1){
                    scale.value = Math.fround((scale.value +0.1)*100 )/100 ;
                }
            }else{
                if(scale.value>0.2){
                    scale.value = Math.fround((scale.value -0.1)*100)/100
                }
            }
        }


        onMounted(()=>{
            //@ts-ignore
           window.addEventListener("mousewheel",onMouseWheel,false);
           document.oncontextmenu = ()=>{
               return false;
           }
        });

        return {scale}
   }

});
</script>

<style>
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
        background: #2c2c2c;
    }
    .el-footer{
        background-color: #fff;
        border-top:  1px solid #e6e6e6;
        height: 30px!important;
        display: flex;
        align-items: center;
        color:#909399;
        font-size: 12px;
        justify-content: space-between;
    }

    .el-aside {
        border-right: 1px solid #e0e0e0;
        border-left: 1px solid #e0e0e0;
    }


</style>