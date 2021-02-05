<template>

    <div class="bar"  ref="bar">

    </div>
</template>

<script lang="ts">
    import {defineComponent, getCurrentInstance, onMounted, reactive, ref,watch} from 'vue'

    export default defineComponent({
        name: "EChartBar",
        props:{
            id:{
              type:String,
              require:true
            },
          width:{
              type:String
          },

          height:{
              type:Number
          }
        },
        setup(props) {
            const {ctx}: any = getCurrentInstance();
            const bar = ref(null);
            let mychart:any = null;

            const option = reactive(
                {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 1)'
                        }
                    }]
                }
            )

            onMounted(() => {
                mychart = ctx.$echarts.init(bar.value)
                option && mychart.setOption(option)
            })
            watch(props,()=>{
                mychart.resize()
            })

            return {bar}
        }
    })
</script>

<style lang="less" scoped>
    .bar {
        width: 100%;
        height: 100%;
    }
</style>