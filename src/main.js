import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadState } from './Utils/LocalStorage'

createApp(App).use(router).mount('#app')
loadState()
