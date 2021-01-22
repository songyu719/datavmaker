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



createApp(App).use(store,storeKey).use(ElementPlus).use(Vue3DraggableResizable).use(router).mount('#app')
