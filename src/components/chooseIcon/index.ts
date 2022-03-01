import { App } from 'vue'

import ChooseIcon from './src/index.vue'

export default {
  install(app: App) {
    app.component('q-choose-icon', ChooseIcon)
  },
}
