import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedItem: -1,
  },
  mutations: {
    updateSelectedItem(state, value) {
      state.selectedItem = value;
    },
  },
  actions: {
  },
  modules: {},
});
