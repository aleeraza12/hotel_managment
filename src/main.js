import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.mixin({
  computed: {
    isMac() {
      var mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
      if (mac) {
        return true;
      } else {
        return false;
      }
    },
  },
});

//event bus for component comunication
export const eventBus = new Vue();


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");