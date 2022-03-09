import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import App from './App.vue'
import router from '@/router'
import { toLine } from '@/utils'
import qui from '@c/index'
const app = createApp(App)
// 全局注册图标 牺牲一点性能
Object.keys(Icons).forEach((icon) => {
  app.component(`el-icon-${toLine(icon)}`, (Icons as any)[icon])
})

app.use(ElementPlus).use(router).use(qui).mount('#app')
// app.config.errorHandler = (e) => {
//   window.open('https://www.baidu.com/#ie=UTF-8&wd=1')
// }
