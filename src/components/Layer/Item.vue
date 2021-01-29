<template>
    <li :class="{active:props.active}" @click="click">
        <div class="inputbox"><input type="text" v-model="name"  /> </div>
            <div class="btns">
                <i @click="toggle('visible')" :class="{iconfont:true,'icon-close-eyes':!visible,'icon-open-eyes':visible }"></i>
                <i @click="toggle('lock')" :class="lock?'el-icon-lock':'el-icon-unlock'"></i>
            </div>
    </li>
</template>

<script lang="ts">
    import {computed, defineComponent, ref} from "vue";
    import {useStore} from "@/store"
    import "@/assets/iconfont.css"
    import useCommits from "@/hooks/useCommits";
    export default defineComponent({
        name: "item",
        props:{
            name:{
                type:String,
                required:true
            },
            id:{
                type:String,
                required:true
            },
            active:{
                type:Boolean,
                required:true
            }
        },
        setup(props, ctx) {

            const store = useStore();
            const {updateName,toggleVisible,toggleLock,toggleActive} = useCommits();
            const name = computed({
                get(){
                    return  store.state.dataElements.find(item=>item.id==props.id)!.name
                },
                set(value:string){
                    updateName({name:value})
                }
            })
            const visible = computed(()=>{
                return  store.state.dataElements.find(item=>item.id==props.id)!.visible
            })
            const lock = computed(()=> {
                return  store.state.dataElements.find(item=>item.id==props.id)!.lock

            })
            function toggle(type:string){
               switch (type) {
                    case "visible":
                        toggleVisible({id:props.id})
                        break;

                    case "lock":
                        toggleLock({id:props.id})
                        break;
               }
            }

            function click() {
                toggleActive({id:props.id,isActive:true})
            }

            return {toggle,props,click,name,visible,lock}

        }
    })
</script>

<style lang="less" scoped>
    li {
        margin-bottom: 2px;
        height: 40px;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 5px 10px;
        flex-direction: row;
        color: #fff;
        justify-content: space-between;
        user-select: none;
        width: 180px;
        .btns{
            margin-left: 10px;
            font-size: 16px;
            i{
                cursor:pointer;
                padding: 5px;

            }
            .icon-open-eyes{
                font-size: 20px;
            }
        }
        .inputbox{
            flex:1;
            input{
                width: 100%;
                outline: none;
                color: #fff;
                border: none;
                background: transparent;
                padding: 5px;
                &:focus{
                    border: none;
                }
            }
        }

    }

    .active {
        background: rgba(64, 158, 255,0.8);
    }

</style>