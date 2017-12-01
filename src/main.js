import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'
import './assets/style/common/common.css'
import './assets/style/fonts/iconfont.css'
import 'element-ui/lib/theme-chalk/display.css'
import store from './store/index'

Vue.use(ElementUI)


new Vue({
  el: '#app',
  router,//使用路由
  store,//使用store
  render: h => h(App),
  data:{
  	eventHub:new Vue(),//添加事件中心
  }
})
