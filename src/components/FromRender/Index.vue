<template>
    <el-form :model="numberValidateForm"  label-width="80px"  >
        <el-row>
            <el-col :span="24">
            <component :is="item.componentPack"  v-model="numberValidateForm[item.id]" :type="item.id" />
            </el-col>
            </el-row>
    </el-form>
</template>

<script lang="ts">
    import {ref,defineComponent,computed,reactive } from 'vue'
    import {useStore} from "@/store";

    export default defineComponent({
        name: "FormRender",
        setup(props,ctx){
            const store = useStore()
            const FormData = computed(()=>{
                return store.state.formElements
            })
            const numberValidateForm = reactive({

            })
            return { FormData ,numberValidateForm}
        }
    })
</script>

<style scoped>

</style>