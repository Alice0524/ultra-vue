// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import store from './store'

import VueI18n from 'vue-i18n'
import messages from './locale'
import axios from './utils/http'
import VueAxios from 'vue-axios'
import 'view-design/dist/styles/iview.css';

//引入 lib-flexible
import  'lib-flexible';

//注册全局组件
// import PTable from  "./components/table/PTable.vue"
// import Warmertransfer from './components/transfer/Warmer-transfer.vue'

// Vue.component('PTable', PTable)
// Vue.component('Warmertransfer',Warmertransfer)

// 开发环境引入mock 
// process.env.MOCK && require("@/mock/index.js")
//引入mock.js
// require("@/mock/index.js")

Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.use(VueI18n)
Vue.use(VueAxios, axios)

window._ = require('lodash')
window.anime = require('animejs')


const i18n = new VueI18n({
  locale: 'zh-CN',
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App),
})
