import Vue from 'vue'
import ElementUI from 'element-ui' // 引入ElementUI
import 'element-ui/lib/theme-chalk/index.css'
import '@/permission' // 权限定义
import App from './App.vue'
import router from './router'
import store from './store'
import { i18n } from './lang'
import VueLazyload from 'vue-lazyload' // 图片懒加载

/* 多语言 */
import ElementLocale from 'element-ui/lib/locale'


if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(ElementUI, { size: 'mini' })
ElementLocale.i18n((key, value) => i18n.t(key, value)) // 按需加入国际化语言
i18n.missing = (locale, key, vm) => {
  // handle translation missing
  let keys = key.split('.')
  return keys[keys.length - 1]
}
Vue.use(VueLazyload, {
  preLoad: 1.3, // 预载高度比例
  attempt: 1 // 尝试次数
  // error: 'dist/error.png',
  // loading: 'dist/loading.gif',
})
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
