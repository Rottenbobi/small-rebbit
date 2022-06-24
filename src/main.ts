import { createApp } from 'vue'
import App from './App.vue'

// pinia
import { createPinia } from 'pinia'
const app = createApp(App)
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 初始化样式
import 'normalize.css'

// router
import router from './router'


// 基本样式
import '@/assets/styles/common.less'
app.use(pinia)
app.use(router)
app.mount('#app')
