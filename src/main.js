// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index.js'

// reset.css
import '@/assets/css/reset.css'
import '@/assets/css/common.css'

// mui
import '@/lib/mui/css/mui.min.css'
import '@/lib/mui/fonts/icons-extra.css'

// vue-preview
import VuePreview from 'vue-preview'

// mint-ui
import { Header, Swipe, SwipeItem, Lazyload, Button, Switch } from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch)

Vue.use(Lazyload, {
  preLoad: 2,
  loading: require('./assets/test.gif'),
  error: require('./assets/tupian.png'),
  attempt: 1
})

Vue.use(VuePreview)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
