import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const counterModule = {
  namespaced: true,
  state() {
    return { counter: 0 };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
      console.log(state);
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit("increment");
      }, 1000);
    },
    increase(context, payload) {
      context.commit("increase", payload);
    },
  },
  getters: {
    // finalCounter(state, getters){}
    finalCounter(state) {
      return state.counter * 2;
    },
    normolizedValue(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
};

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      userAuth: false,
    };
  },
  mutations: {
    setUserAuth(state, payload) {
      state.userAuth = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit("setUserAuth", { isAuth: true });
    },
    logout(context) {
      context.commit("setUserAuth", { isAuth: false });
    },
  },
  getters: {
    userIsAuth(state) {
      return state.userAuth;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
