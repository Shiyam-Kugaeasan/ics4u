<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase/index";
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

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
    <div class="login-box">
      <h1>Login</h1>
      <form @submit.prevent="login()">
        <p>Username: </p>
        <input type="text" placeholder="Username" v-model="username" class="username">
        <br>
        <p class="password-text">Password: </p>
        <input type="password" placeholder="Password" v-model="password" class="password">
        <br>
        <input type="submit">
      </form>
      <div v-if="error">
        <p>Incorrect username or password.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
}

.login-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 50vh;
  background-color: rgb(56, 56, 56);
}

form {
  display: flex;
  flex: column;
  margin: 5%;
}

h1 {
  margin-bottom: 5%;
}

.password-text {
  margin-left: 5%;
}
</style>