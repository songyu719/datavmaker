<template>
  <el-form-item :prop="data.id" :label="data.options.name" :rules="data.rules">
    <el-radio-group v-model="fromdata[data.id]">
      <el-radio v-for="item of data.options.arr" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import {UIElement} from "@/utils/UIElements";

export default defineComponent({
  name: "Radio",
  props: {
    data: {
      type: Object as PropType<UIElement>
    },
    fromdata: {
      type: Object as PropType<any>
    }
  }
})
</script>

<style scoped>

</style>