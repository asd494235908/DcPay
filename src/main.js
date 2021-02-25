import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from 'dayjs'

const app = createApp(App)
// 引入Antd配置文件
import Antd from './ant/ant.js'
// import Icon from './ant/icons.js'
// 引入css
import 'ant-design-vue/dist/antd.less';

app.use(Antd)
// app.use(Icon)
// app.use(VueAwesomeSwiper)

import axios from 'axios'
import VueLazyLoad from 'vue3-lazyload'
import { getStore } from "@/utils/storage.js";
axios.defaults.baseURL = "https://www.dcmaomi.com:3000"
// axios.defaults.baseURL = "http://192.168.2.202:3000"
//每次发送请求时候都要获取token，有token就是登录的，没有就是为登录
axios.interceptors.request.use(config => {
    const token = getStore('my_token')
    if (token) {
        // 用户已登录,设置请求头
        config.headers.common.Authorization = token

    }
    //使用的这个方法后必须要 return 对象出去 不然会报错
    return config
}, err => {
    console.log(err)
})
app.config.globalProperties.$http = axios
app.config.globalProperties.$dayjs = dayjs
app.use(store).use(router).mount('#app')

