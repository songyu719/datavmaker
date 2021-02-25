<template>


  <el-checkbox-group v-model="checkList">
    <el-checkbox  v-for="item in data.options.arr" :label="item.label" :key="item.value"></el-checkbox>
  </el-checkbox-group>

</template>

<script>
import {defineComponent, ref} from "vue"

export default defineComponent({
  name: "CheckBox",
  props: ["data"],
  setup() {
    const checkList = ref([])
    return {checkList}
  }
})
</script>

<style scoped>

</style>