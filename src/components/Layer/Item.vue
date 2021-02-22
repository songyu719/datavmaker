<template>
  <li class="listItem">
   <span> {{ name }} </span>

  </li>
</template>

<script lang="ts">
import {defineComponent,} from "vue";

import "@/assets/iconfont.css"


export default defineComponent({
  name: "item",
  props: {
    name: {
      type: String,
      required: true
    },


  },
  setup(props, ctx) {



  }
})
</script>

<style lang="less" scoped>

  .listItem {
    position: relative;
    margin-top: 10px;
    width: 47%;
    max-width: 120px;  /* 避免拖动ghost样式异常 */
    height: 36px;
    line-height: 36px;
    cursor: move;
    flex-shrink: 0;
    transition: box-shadow 0.3s ease;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #F2F2F2;
    border: 1px dashed transparent;
    font-size: 12px;
     span {
       display: block;
       width: 100%;
       padding: 0 3px;
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
       word-wrap: normal;
       word-break: normal;

    }
    &:hover {
      color: #2b9939;
      border: 1px dashed #2b9939;
      box-shadow: 0 0 4px 1px #2b9939;
    }

  }
  .line {
    font-size: 12px;
    line-height: 18px;
  }
  .lineIcon {
    color: #666;
    font-size: 14px;
  }
  .disabled {
    cursor: no-drop;
    opacity: 0.8;
  }

</style>