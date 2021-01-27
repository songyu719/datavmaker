<template>
    <div class="toolsbar">
        <el-button type="primary" icon="el-icon-plus" size="mini" @click="AddElement" ></el-button>
        <el-button type="primary" icon="el-icon-plus" size="mini" @click="AddText" ></el-button>
    </div>
</template>

<script>
    import {storeKey} from "@/store"
    import {useStore} from 'vuex'
    export default {
        name: "ToolsBar",
        setup(){
            const store = useStore(storeKey);
              function getRandomColor(){

                 return '#'+Math.floor(Math.random()*16777215).toString(16);

            }
            function AddElement() {
                store.commit("AddElements",{
                    name:`图层${store.state.dataElements.length+1}`,
                    color:getRandomColor(),
                    id:`u${store.state.dataElements.length+1}`,
                    x:200,
                    y:200,
                    width:100,
                    height:100,
                    visible:true,
                    components:"ImageBox"
                })
            }
          function AddText() {
            store.commit("AddElements",{
              name:`图层${store.state.dataElements.length+1}`,
              color:getRandomColor(),
              id:`u${store.state.dataElements.length+1}`,
              x:200,
              y:200,
              width:100,
              height:100,
              visible:true,
              components:"Text"
            })
          }
            return { AddElement, AddText }
        }
    }
</script>

<style lang="less" scoped>
    .toolsbar{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        padding: 5px 10px;
        border-bottom: solid 1px #000;
    }
</style>