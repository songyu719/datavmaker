<template>
  <div class="box">
    <TitleText name="配置项"/>
    <el-form ref="form" label-width="100px">
      <el-form-item label="元件：">
        <el-input size="small" disabled placeholder="多选框"/>
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
      <el-form-item v-for="(item ,index) of arr" :key="item.value" :label="`选项${++index}`" style="position: relative;">
        <el-input size="small" v-model="item.label" />
        <i class="el-icon-circle-close" style="position: absolute;right: 0;top: 0;" @click="delRadio(index)"></i>
      </el-form-item>
      <el-button type="primary" @click="addRadio">添加选项</el-button>
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
  name: "RadioMonitor",
  components: {
    TitleText
  },
  setup(props, ctx) {
    const { updateOptions,setRequired, delRadioVuex, addRadioVuex } = useCommits();
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

    const arr = computed({
      get() {
        return options.value.arr
      },
      set(v: string) {
        console.log("设置");
      }
    })

    function delRadio(idx: number) {
      delRadioVuex(idx);
    }

    function addRadio() {
      addRadioVuex("")
    }


    return { name, required, id, arr, delRadio, addRadio }
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