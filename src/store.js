import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const store = {
  state: {
    // Sidebar
    mini: true,
    },
  getters: {
    // Sidebar Toggler
    getSidebarMini: (state) => state.mini,
  },
  mutations: {
    // Sidebar Store Start
    setSidebarMini(state, payload) {
      state.mini = payload;
    },
  },
  actions: {
  },
  modules: {},
};
const vuexLS = new VuexPersistence({
  storage: window.localStorage,
});
store.plugins = [vuexLS.plugin];
export default new Vuex.Store(store);