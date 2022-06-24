import { createApp } from 'vue'
import App from './App.vue'

// pinia
import { createPinia } from 'pinia'
const app = createApp(App)

// 初始化样式
import 'normalize.css'

// router
import router from './router'
const pinia = createPinia()

// 基本样式
import '@/assets/styles/common.less'
app.use(pinia)
app.use(router)
app.mount('#app')
