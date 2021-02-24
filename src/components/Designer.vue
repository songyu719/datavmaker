<template>
    <el-form ref="form" label-width="120px" class="designer">
    <draggable tag="div" v-model="array" group="dragGroup" class="designer" >

        <template #item="{element}">
            <Wrap :editorItem="element"   @onOperate="handleItemOperate" />
        </template>

    </draggable>
    </el-form>
</template>

<script lang="ts">
    import {defineComponent,computed} from "vue";
    import {useStore} from '@/store'
    import Wrap from "@/components/Wrap.vue";
    import EChartBar from "@/components/EChartBar/EChartBar.vue";
    import draggable from 'vuedraggable'
    import {remove,moveUp,moveDown} from "@/utils/array";
    import useCommits from "../hooks/useCommits"
    import {UIElement} from "@/utils/UIElements";
    export default defineComponent({
        name: "Designer",
        components:{
            EChartBar,
            Wrap,
            draggable
        },
        props:{
            name
        },
        setup(props,ctx){
            const  store = useStore();

            const { updateForm,AddFromElement } = useCommits();

            const array = computed({
                get(){
                    return  store.state.formElements
                },
                set(v:UIElement[]){
                    updateForm(v);
                }
            })

            function handleItemOperate({item,command}:{item:any,command:string}){
                switch (command) {
                    case "remove":
                            remove(array.value,item)
                        break;
                    case "moveUp":
                            moveUp(array.value,item)
                        break;
                    case "moveDown":
                        moveDown(array.value,item)
                        break
                    case "copy":
                        AddFromElement(item)
                        break;
                        default:
                        break;
                }
            }

            return {array,handleItemOperate}
        }
    })
</script>

<style scoped lang="less">

    .designer {
        width: 100%;
        height: 100%;
        background:@input-bg-color;
        align-items: flex-start;
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
    }

</style>