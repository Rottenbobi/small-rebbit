import { createApp } from 'vue'
import App from './App.vue'

// 引入normalize, 将不同浏览器的样式进行统一重置
import 'normalize.css'
// 引入common公共样式
import '@/assets/styles/common.less'
import router from '@/router'
import { createPinia } from 'pinia'
import XtxUi from '@/components'

const pinia = createPinia()
const app = createApp(App)

app.use(XtxUi)
app.use(router)
app.use(pinia)
app.mount('#app')
