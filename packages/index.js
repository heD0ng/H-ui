import Button from './button'
import Input from './input'
import Switch from './switch'

const components = [
  Button,
  Input,
  Switch
]
const install = function (Vue) {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Button,
  Input,
  Switch,
  install
}

export default {
  install
}
