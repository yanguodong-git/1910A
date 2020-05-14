import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 载入axios
import axios from "axios";
Vue.prototype.$http=axios;

// 完整载入 element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
