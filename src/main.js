import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import Vuetify from "vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import router from './router'
import  Aos  from 'aos';
import VueSidebarMenu from 'vue-sidebar-menu'
import "es6-promise/auto";
import "vuetify/dist/vuetify.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'aos/dist/aos.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import VueToastify from "vue-toastify";

Vue.use(VueToastify);
Vue.use(VueSidebarMenu)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(Vuetify);

Vue.use(VueToastify,
     {
      status: {
        title: "body"
      }
    },
  
)
new Vue({
  created() {
    Aos.init()
  },
  router,
  render: h => h(App)
}).$mount("#app");
