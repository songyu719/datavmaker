<template>
  <el-checkbox-group>
    <el-checkbox v-for="item of data.options.arr" :key="item.value">{{ item.label }}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  name: "CheckBox",
  props: ["data"],
  setup() {

  }
})
</script>

<style scoped>

</style>