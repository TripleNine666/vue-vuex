export default {
  increment(state) {
    state.counter = state.counter + 2;
    console.log(state);
  },
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  },
};
