import { createApp } from 'vue'
import App from './App.vue'

// pinia
import { createPinia } from 'pinia'
const app = createApp(App)

// 初始化样式
import 'normalize.css/normalize.css'

const pinia = createPinia()

app.use(pinia)

app.mount('#app')
