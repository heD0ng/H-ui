import Vue from 'vue'
import App from './App.vue'
import HmButton from './components/button.vue'

Vue.component(HmButton.name, HmButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
