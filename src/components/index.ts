import { App } from 'vue'

import ChooseIcon from './chooseIcon'
import ChooseArea from './chooseArea'
import Trend from './trend'
import Menu from './menu'

const components = [ChooseIcon, ChooseArea, Trend, Menu]

export default {
  install(app: App) {
    components.forEach((component) => {
      app.use(component)
    })
  },
}
