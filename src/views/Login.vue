<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);

const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("./movies");
  }
  else {
    error.value = true;
  }
};
</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login()">
      <input type="text" placeholder="Username" v-model="username">
      <input type="password" placeholder="Password" v-model="password">
      <input type="submit">
    </form>
    <div v-if="error">
      <p>Incorrect username or password.</p>
    </div>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

form {
  display: flex;
  flex: column;
}
</style>