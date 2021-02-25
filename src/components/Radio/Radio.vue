<template>
  <el-radio-group>
    <el-radio v-for="item of data.options.arr" :key="item.value">{{ item.label }}</el-radio>
  </el-radio-group>
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