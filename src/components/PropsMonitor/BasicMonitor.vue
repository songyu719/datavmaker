<template>
    <div class="box">
        <div class="title">
            <span>基础属性</span>
        </div>
        <el-divider style="margin: 0px"></el-divider>
        <div class="propsbox">
            <el-row :gutter="10">
                <el-col :span="24" >
                    <div>
                        <el-input placeholder="" size="small" v-model="name">
                        </el-input>
                    </div>

                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12" >
                    <div>
                        <el-input placeholder="" v-model="x" size="small">
                            <template #prefix>
                                <i class="prefix"> X </i>
                            </template>
                        </el-input>
                    </div>

                </el-col>
                <el-col :span="12">
                    <div>
                        <el-input placeholder="" v-model="y" size="small">
                            <template #prefix>
                                <i class="prefix"> Y </i>
                            </template>
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12">
                    <el-input placeholder="" v-model="w" size="small">
                        <template #prefix>
                            <i class="prefix">W</i>
                        </template>
                    </el-input>
                </el-col>
                <el-col :span="12">
                    <el-input placeholder="" v-model="h" size="small">
                        <template #prefix>
                            <i class="prefix">H</i>
                        </template>
                    </el-input>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script>
    import { computed } from 'vue'
    import {sotorekey} from "@/store"
    import { useStore } from 'vuex'
    export default {
        name: "BasicMonitor",
        setup(){
          const store = useStore(sotorekey);
          const name = computed({
              get(){
                return  store.getters.currentElement.name
              },
              set(value){
                    console.log(value)
                  store.commit("updateName",{name:value})
              }
          })

          const x =computed({
              get(){
                  return store.getters.currentElement.x
              },
              set(value){
                  console.log(x)
              }
          })
            const y =computed({
                get(){
                   return  store.getters.currentElement.y
                },
                set(value){
                    console.log(y)
                }
            })

            const h =computed({
                get(){
                    return store.getters.currentElement.height
                },
                set(value){
                    console.log(value)
                }
            })

            const w =computed({
                get(){
                    return  store.getters.currentElement.width
                },
                set(value){
                    console.log(value)
                }
            })

            return {name,x,y,w,h}
        }

    }
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
        color: #909399;
        font-weight: 400;
        font-size: 14px;
        background: linear-gradient(145deg, #ffffff, #e6e6e6);
        box-shadow:  13px 13px 23px #e3e3e3,-13px -13px 23px #ffffff;
    }
    .propsbox{
        padding: 10px;
    }
    .el-row {
        margin-bottom: 10px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .prefix{
        display: block;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 5px;
    }
</style>