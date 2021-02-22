<template>



</template>

<script lang="ts">
import {defineComponent,toRefs,computed,onMounted,ref} from 'vue'
import IText from "@/components/interface/IText";
import {useStore} from "@/store";
import useCommits from "@/hooks/useCommits";

export default defineComponent({
    name: "Text",
    props:{
        id:{
            type:String,required:true
        }
    },


    setup(props,ctx){

    }
})
</script>

<style scoped lang="less">
.Text,textarea {
  width: 100%;
  height: 100%;
  text-align: left;
  background: transparent;
  padding: 0px;
  margin: 0px;
    outline: none;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

</style>