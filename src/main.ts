import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store, {storeKey} from './store'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import "reset-css"
import "./global.css"
import * as echarts from "echarts"
import ImageBox from "@/components/ImageBox/ImageBox.vue"
import ImageMonitor from "@/components/ImageBox/ImageMonitor.vue"
import Text from "@/components/Text/Text.vue";
import TextMonitor from "@/components/Text/TextMonitor.vue";
import EChartBar from "@/components/EChartBar/EChartBar.vue";
import SingleInput from "@/components/Text/SingleInput.vue";
import Radio from "@/components/Radio/Radio.vue";
import CheckBox from "@/components/CheckoutBox/CheckBox.vue";
import TextArea from "@/components/TextArea/TextArea.vue";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
app.config.globalProperties.$echarts = echarts;
app.component("ImageBox", ImageBox)
app.component("ImageMonitor", ImageMonitor)
app.component("Text", Text)
app.component("TextMonitor", TextMonitor)
app.component("EChartBar",EChartBar)
app.component("SingleInput",SingleInput)
app.component("Radio",Radio)
app.component("CheckBox",CheckBox)
app.component("TextArea",TextArea)
app.use(store, storeKey)
app.use(ElementPlus)
app.use(Antd)
app.use(Vue3DraggableResizable)
app.use(router)
app.mount('#app')
