<template>
    <el-form :model="numberValidateForm"  label-width="80px"  >
        <el-row>
            <el-col :span="24">

            <component :is="item.componentPack" :data="item" :fromdata="numberValidateForm" :type="item.id" v-for="item in formElements" />

            </el-col>
            </el-row>
        <el-button>提交</el-button>
    </el-form>
</template>

<script lang="ts">
    import {ref,defineComponent,computed,reactive } from 'vue'
    import {useStore} from "@/store";

    export default defineComponent({
        name: "FormRender",
        setup(props,ctx){
            const store = useStore()
            const formElements = computed(()=>{
                return store.state.formElements
            })
            const numberValidateForm = reactive({

            })
            return { formElements ,numberValidateForm}
        }
    })
</script>

<style scoped>

</style>