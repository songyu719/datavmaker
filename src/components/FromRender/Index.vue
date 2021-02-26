<template>
    <el-form :model="numberValidateForm" ref="form" label-width="80px"  >
        <el-row>
            <el-col :span="24">

            <component :is="item.componentPack" :data="item" :fromdata="numberValidateForm" :type="item.id" v-for="item in formElements" />

            </el-col>
            </el-row>
        <el-button @click="SubmitForm">提交</el-button>
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
            const form = ref()
            function SubmitForm() {
                form.value.validate((valid:boolean)=>{
                    if(valid){
                        console.log("表单验证通过")
                    }else{
                        console.log("不通过")
                    }
                })
            }
            return { formElements ,numberValidateForm,form,SubmitForm}
            }


    })
</script>

<style scoped>

</style>