<template>

  <el-form-item :prop="data.id" :label="data.options.name" :rules="data.rules">
    <el-checkbox-group v-model="checkList">
      <el-checkbox  v-for="item in data.options.arr" :label="item.label" :key="item.value"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>

</template>

<script lang="ts">
import {defineComponent, PropType, ref} from "vue"
import {UIElement} from "@/utils/UIElements";

export default defineComponent({
  name: "CheckBox",
  props: {
    data: {
      type: Object as PropType<UIElement>
    },
    fromdata: {
      type: Object as PropType<any>
    }
  },
  setup() {
    const checkList = ref([])
    return {checkList}
  }
})
</script>

<style scoped>

</style>