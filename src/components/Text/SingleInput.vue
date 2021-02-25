<template>
    <el-form-item :prop="data.id" :label="data.options.name" :rules="data.rules">
        <el-input   v-model="fromdata[data.id]" >
            <template #append v-if="data.options.format=='3'">%</template>
        </el-input>
    </el-form-item>
</template>

<script lang="ts">
    import { PropType,defineComponent } from 'vue'
    import {UIElement} from "../../utils/UIElements";
    export default defineComponent({
        name: "SingleInput",
        props:{
            data : {
                type:Object as PropType<UIElement>
            },
            fromdata:{
                type:Object as PropType<any>
            }
        },
        setup(props,ctx){

        }
    })

</script>

<style scoped>

</style>