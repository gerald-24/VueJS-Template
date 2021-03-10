import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import myMixins from "./plugins/myMixins";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;
Vue.use(myMixins);
Vue.use(Antd);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
