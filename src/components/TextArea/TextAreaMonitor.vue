<template>
  <div class="box">
    <TitleText name="配置项"/>
    <el-form ref="form" label-width="60px">
      <el-form-item label="元件：">
        <el-input size="small" disabled placeholder="单行文本"/>
      </el-form-item>
      <el-form-item label="ID：">
        <el-input size="small" v-model="id" disabled />
      </el-form-item>
      <el-form-item label="名称：">
        <el-input size="small" v-model="name"/>
      </el-form-item>
      <el-form-item label="必填：">
        <el-radio-group v-model="required">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import TitleText from "@/components/TitleText.vue";
import {useStore} from "@/store"
import ISingleText from "@/components/Text/ISingleText";
import useCommits from "@/hooks/useCommits";

export default defineComponent({
  name: "TextAreaMonitor",
  components: {
    TitleText
  },
  setup(props, ctx) {
    const { updateOptions,setRequired } = useCommits();
    const store = useStore();
    const options = computed<ISingleText>(() => {
          return store.getters.CurrentElements.options
        }
    )
    const name = computed({
      get() {
        return options.value.name
      },
      set(v: string) {
        updateOptions({
          propName:"name",
          value:v
        })
      }
    })

    const required = computed({
      get() {
        return options.value.required
      },
      set(v: boolean) {
        setRequired(v)
      }
    })

    const id = computed({
      get(){
        return store.getters.CurrentElements.id
      },
      set(v){
        console.log(v)
      }
    })

    return { name, required, id }
  }
})
</script>

<style scoped>
.box {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>