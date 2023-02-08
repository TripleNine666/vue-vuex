import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 0,
      userAuth: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    setUserAuth(state, payload) {
      state.userAuth = payload.isAuth;
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
    login(context) {
      context.commit("setUserAuth", { isAuth: true });
    },
    logout(context) {
      context.commit("setUserAuth", { isAuth: false });
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
    userIsAuth(state) {
      return state.userAuth;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
