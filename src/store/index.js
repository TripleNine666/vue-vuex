import { createStore } from "vuex";

import rootMutations from "./mutations";
import rootActions from "./actions";
import rootGetters from "./getters";

import counterModule from "./counter/index.js";

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      userAuth: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
