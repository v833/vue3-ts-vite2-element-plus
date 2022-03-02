import { App } from 'vue'

import ChooseIcon from './chooseIcon'
import ChooseArea from './chooseArea'
import Trend from './trend'

const components = [ChooseIcon, ChooseArea, Trend]

export default {
  install(app: App) {
    components.forEach((component) => {
      app.use(component)
    })
  },
}
