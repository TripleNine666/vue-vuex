export default {
  increment(context) {
    setTimeout(function () {
      context.commit("increment");
    }, 1000);
  },
  increase(context, payload) {
    context.commit("increase", payload);
  },
};
