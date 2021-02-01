<template>
    <div class="inputBox" :style="style">
            <span v-if="propName">{{propName}}</span>
        <div class="input_wrap">
            <input  :type="type" :value="modelValue" @input="handleInput" :placeholder="placeholder" />
        </div>


    </div>
</template>

<script lang="ts">
    import {defineComponent,computed } from 'vue'
    export default defineComponent({
        name: "PropInput",
        props:{
            modelValue:{
                type:[String,Number],
                default:''
            },
            display:{
                type:String,
                default:"row"
            },
            propName:{
                type:String
            },
            placeholder:{
                type:String
            },
            type:{
                type:String,
            }
        },
        setup(props,ctx){
            const  handleInput= (e:any) =>{
                const { value } = e.target
                ctx.emit('update:modelValue',value)
                ctx.emit('input',value)
            }
            const style = computed(()=>{
                return {
                    'flex-direction':props.display,
                    'align-items':props.display=='row'?'center':'flex-start'
                }
            })

            return {handleInput,props,style}
        }

    })
</script>

<style lang="less" scoped>
    .inputBox{
        display: flex;
        width: 100%;
        justify-content: space-between;
        span{
            color: @input-label-color;
            font-size: 12px;
            padding: 5px;
            display: block;
            text-align: left;
        }
        .input_wrap{
            flex:1
        }
        input{
            outline: none;
            background: @input-bg-color;
            border:@input-border-color solid 1px  ;
            padding: 5px;
            color: @fontColor;
            width: 100%;
            font-size: 12px;
        }
    }
</style>