<template>
    <div class="box">
        <div class="title">
            <span>图片属性</span>
        </div>
        <el-divider style="margin: 0px"></el-divider>
        <div class="propsbox">
            <el-row :gutter="10" >
                <el-col :span="24" >
                    <PropInput  placeholder="路径" display="row"  prop-name="地址"  v-model="src"  />
                </el-col>
                <el-col :span="24">
                    <PropInput  placeholder="描述" display="row"  prop-name="描述"  v-model="alt"  />
                </el-col>
            </el-row>
        </div>
    </div>
    <div class="box">
        <div class="title">
            <span>图片事件</span>
        </div>
        <el-divider style="margin: 0px"></el-divider>
        <div class="eventbox"  v-for="(val,key) in events">
                <div class="event" v-text="upperCase(key)">
                </div>

                <ul class="func">
                <li  v-for="(sval) in val" >
                    <span>{{sval.name}}</span>   <i  class="iconfont icondelete"></i>
                </li>
                    <li>
                       <el-button size="mini" @click="show=true">添加</el-button>
                    </li>
                </ul>
        </div>
    </div>
    <Editor v-model="show" @save="addEvent" />
</template>

<script lang="ts">
    import PropInput from "@/components/PropsMonitor/PropInput.vue"
    import {useStore} from "@/store"
    import {defineComponent,computed,ref} from "vue"
    import useCommits from "@/hooks/useCommits";
    import {IimageBox,Event} from "@/components/interface/IImageBox";
    import Editor from "@/components/CodeEditor/Index.vue"

    export default defineComponent({
        name: "ImageMonitor",
        components:{
            PropInput,
            Editor
        },
        setup(props,ctx){
           const store = useStore()
           const currentElement = computed <IimageBox>(()=>{
               return store.getters.currentElement.customData
           })
            const show = ref(false)
            const { updateProps } = useCommits()
            const src = computed({
                get(){
                    return currentElement.value.src
                },
                set(v){
                    updateProps({id:store.getters.currentElement.id,props:"src",value:v})
                },
            })
            const alt = computed({
                get(){
                    return currentElement.value.alt
                },
                set(v){
                    updateProps({id:store.getters.currentElement.id,props:"alt",value:v})
                }
            })
            const events = computed(()=>{
                return currentElement.value.events
            })
            const upperCase=(v:string)=>{
               return v.replace(v[0],v[0].toUpperCase())
            }

            const addEvent = (event:Event)=>{
                currentElement.value.events?.load?.push(
                    event
                )
            }

           return {currentElement,src,alt,events,upperCase,show,addEvent}
        }

    })
</script>

<style scoped lang="less">
    .box{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .title{
        display: flex;
        align-items: flex-start;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        color: #000;
        font-family:"微软雅黑";
        color: #fff;
        font-weight: 400;
        font-size: 14px;
    }
    .propsbox{
        padding: 10px;
    }
    .eventbox{
        margin: 10px;

        padding: 10px;
    }
    .el-col {
        margin-bottom: 10px;
        color: @fontColor;
    }
    .event{
        flex:1;
        color: @fontColor;
        text-align: left;
        padding: 5px;

    }
    .func{
        color: @fontColor;
        li{
            margin-bottom: 10px;
            font-size: 12px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            span{
                background: @input-bg-color;
                padding: 5px;
                flex:1;
                border: solid 1px @input-border-color;
                margin-right: 10px;
            }
        }
    }

</style>