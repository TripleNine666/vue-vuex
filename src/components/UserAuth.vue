<template>
  <button v-if="!userIsAuth" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // computed: {
  //   ...mapGetters(["userIsAuth"]),
  //   ...mapActions(["login", "logout"]),
  // },
  computed: {
    ...mapGetters(["userIsAuth"]),
  },
  methods: {
    login() {
      this.$store.dispatch("login");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
