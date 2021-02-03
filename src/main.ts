import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store,{storeKey} from './store'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import "reset-css"
import "./global.css"

import ImageBox from "@/components/ImageBox/ImageBox.vue"
import ImageMonitor from "@/components/ImageBox/ImageMonitor.vue"
import Text from "@/components/Text/Text.vue";
import TextMonitor from "@/components/Text/TextMonitor.vue";

const app =  createApp(App)
    app.component("ImageBox",ImageBox)
    app.component("ImageMonitor",ImageMonitor)
    app.component("Text", Text)
    app.component("TextMonitor",TextMonitor)
    app.use(store,storeKey)
    app.use(ElementPlus)
    app.use(Vue3DraggableResizable)
    app.use(router)
    app.mount('#app')
