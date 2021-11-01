import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuelidate from 'vuelidate';
import VueToastify from 'vue-toastify';
import VueTheMask from 'vue-the-mask';
import vuetify from '@/plugins/vuetify' // path to vuetify export



Vue.use(VueTheMask);
Vue.use(vuelidate);
Vue.use(VueToastify, {
  canTimeout: true,
  duration: 2000,
  hideProgressbar: true
});

Vue.config.productionTip = false;

Vue.directive('clickOutside', {
  bind(el, binding) {
    el.__ClickOutsideHandler__ = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.body.addEventListener('click', el.__ClickOutsideHandler__);
  },
  unbind(el) {
    document.body.removeEventListener('click', el.__ClickOutsideHandler__);
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
