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
      <el-divider></el-divider>
      <el-form-item label="格式：">
        <el-select v-model="format">
          <el-option label="不限" value=""></el-option>
          <el-option label="纯数字（整数）" value="1"></el-option>
          <el-option label="金额（保留2位小数）" value="2"></el-option>
          <el-option label="百分比（增加单位符号%）" value="3"></el-option>
        </el-select>
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
  name: "TextMonitor",
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

    const format = computed({
      get() {
        return options.value.format
      },
      set(v: string) {
        updateOptions({
          propName:"format",
          value: v
        })
      }
    })

    return { name, required, format,id }
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