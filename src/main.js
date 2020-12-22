import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
createApp(App).use(router).use(ElementUI).mount('#app')
