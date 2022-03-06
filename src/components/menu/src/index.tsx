import { defineComponent, PropType, resolveComponent, h, useAttrs } from 'vue'
import { MenuItem } from './type'
export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    defaultActive: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const attrs = useAttrs()
    const renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        const icon = `el-icon-${item.icon}`
        let slots = {
          title: () => {
            return (
              <div>
                {item.icon && item.children && item.children.length
                  ? h(resolveComponent(icon))
                  : ''}
                <span>{item.name}</span>
              </div>
            )
          },
        }
        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        } else {
          return (
            <el-menu-item index={item.index} v-slots={slots}>
              {item.icon ? h(resolveComponent(icon)) : ''}
            </el-menu-item>
          )
        }
      })
    }
    return () => {
      return (
        <el-menu
          defaultActive={props.defaultActive}
          style="height: auto"
          class="el-menu-demo"
          {...attrs}
        >
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  },
})
