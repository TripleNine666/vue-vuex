export default {
  login(context) {
    context.commit("setUserAuth", { isAuth: true });
  },
  logout(context) {
    context.commit("setUserAuth", { isAuth: false });
  },
};
