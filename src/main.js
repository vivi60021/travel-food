import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./styles/base.sass"
import axios from 'axios'

let app = createApp(App)
app.use(router)
app.mount('#app')
const instance = axios.create({
    baseURL: 'https://data.coa.gov.tw/Service/',
    timeout: 60000,
});

app.config.globalProperties.$api = instance

