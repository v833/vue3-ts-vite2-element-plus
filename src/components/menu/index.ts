import { App } from 'vue'
import Menu from './src/index.vue'
import InfinateMenu from './src/index'

export default {
  install(app: App) {
    app.component('q-menu', Menu)
    app.component('q-i-menu', InfinateMenu)
  },
}
