import Vue from 'vue'
import App from './App.vue'
import HmButton from './components/button.vue'
import HmInput from './components/input.vue'
import HmSwitch from './components/switch.vue'

Vue.component(HmButton.name, HmButton)
Vue.component(HmInput.name, HmInput)
Vue.component(HmSwitch.name, HmSwitch)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
