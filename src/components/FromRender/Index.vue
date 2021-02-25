<template>
    
</template>

<script lang="ts">
    import {ref,defineComponent,computed } from 'vue'
    import {useStore} from "@/store";

    export default defineComponent({
        name: "FormRender",
        setup(props,ctx){
            const store = useStore()
            const FormData = computed(()=>{
                return store.state.formElements
            })

            return { FormData }
        }
    })
</script>

<style scoped>

</style>