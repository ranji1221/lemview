import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Layout from './components/default/Layout.vue'
import './assets/default/style/common/common.css'
import './assets/default/style/fonts/iconfont.css'
import 'element-ui/lib/theme-chalk/display.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(Layout)
})
