<template>

  <el-row>
    <el-col :span="24">
      <div :class="{ viewBox: true,active: editorItem.active,js_viewComponentWrap: true
        }"
           @click="handleClickView"
      >
        <span class="formProperty"> </span>
        <div
            v-if="true"
            class="editBar"
        >
          <button
              :disabled="false"
              class="el-icon-caret-top toolBarBtn"
              title="上移"
              type="button"
              @click="$emit('onOperate', { item: editorItem, command: 'moveUp'})"
          ></button>
          <button
              :disabled="false"
              class="el-icon-caret-bottom toolBarBtn"
              title="下移"
              type="button"
              @click="$emit('onOperate', { item: editorItem, command: 'moveDown'})"
          ></button>
          <button
              :disabled="false"
              class="el-icon-copy-document toolBarBtn"
              title="复制"
              type="button"
              @click="$emit('onOperate', { item: editorItem, command: 'copy' })"
          ></button>
          <button
              :disabled="false"
              class="el-icon-delete toolBarBtn"
              title="移除"
              type="button"
              @click="$emit('onOperate', { item: editorItem, command: 'remove' })"
          ></button>
        </div>

          <el-form-item v-if="editorItem.monitor === 'TextMonitor'" :label="editorItem.options.name">
            <el-input></el-input>
          </el-form-item>

      </div>
    </el-col>
  </el-row>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import useCommits from "@/hooks/useCommits";

export default defineComponent({
  name: "Wrap",
  props: ["editorItem"],
  setup(props, ctx) {
    const { changeMonitor } = useCommits();
    function handleClickView() {
      changeMonitor(props.editorItem);
    }

    return {handleClickView};
  }
})
</script>

<style scoped lang="less">
.viewBox {
  position: relative;
  margin-bottom: 10px;
  padding: 30px 10px 10px;
  cursor: move;
  outline: none;
  border: 1px dashed #bbb;
  overflow: hidden;
  background-color: #ffffff;

  &:after {
    pointer-events: none;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: box-shadow 0.3s ease;
    z-index: 2;
  }

  &.active {
    border: 1px dashed transparent;

    &:after {
      box-shadow: 0 0 2px 1px #2b9939 inset;
    }
  }
}

.formProperty {
  position: absolute;
  padding: 10px;
  top: 0;
  right: 0;
  font-size: 13px;
}

.editBar {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 26px;
  border-top-left-radius: 8px;
  background: #2b9939;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  & > .toolBarBtn {
    -webkit-appearance: none;
    appearance: none;
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
    cursor: pointer;
    display: block;
    width: 26px;
    line-height: 30px;
    text-align: center;
    background-color: transparent;
    font-size: 16px;
    color: #ffffff;

    &[disabled] {
      display: none;
    }

    &:hover {
      opacity: 0.6;
    }
  }

}

.el-row {
  width: 100%;
}
</style>