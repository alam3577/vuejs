import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomeComponent from "./components/HomeComponent.vue";
import ApiCallsAndRoutings from './pages/ApiCallsAndRoutings.vue';
import SettingsPage from './pages/SettingsPage.vue';
import AboutPage from './pages/AboutPage.vue';

Vue.config.productionTip = false
Vue.filter('UCase', function (val) {
  return val.toUpperCase();
});

Vue.directive("size", {
  bind(el, binding) {
    switch (binding.value) {
      case "sm":
        el.style.fontSize = "20px"
        break;
      case "md":
        el.style.fontSize = "40px"
        break;
      case "xl":
        el.style.fontSize = "60px"
        break;
      default:
        break;
    }
  }
})

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/api', component: ApiCallsAndRoutings },
  { path: '/settings', component: SettingsPage },
  { path: '/about', component: AboutPage },
];

Vue.use(VueRouter)
const router = new VueRouter({
  // Routes configuration goes here
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
