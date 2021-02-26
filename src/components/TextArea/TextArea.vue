<template>

  <el-form-item :prop="data.id" :label="data.options.name" :rules="data.rules">
    <el-input v-model="fromdata[data.id]" type="textarea" />
  </el-form-item>

</template>

<script lang="ts">
import {defineComponent, PropType, ref} from "vue"
import {UIElement} from "@/utils/UIElements";

export default defineComponent({
  name: "TextArea",
  props: {
    data: {
      type: Object as PropType<UIElement>
    },
    fromdata: {
      type: Object as PropType<any>
    }
  },
  setup() {

  }
})
</script>

<style scoped>

</style>