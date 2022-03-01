import { App } from 'vue'

import ChooseIcon from './chooseIcon'
import ChooseArea from './chooseArea'

const components = [ChooseIcon, ChooseArea]

export default {
  install(app: App) {
    components.forEach((component) => {
      app.use(component)
    })
  },
}
