<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase/index";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const provider = new GoogleAuthProvider();
const username = ref("");
const password = ref("");

signInWithPopup(auth, provider).then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
  console.log(user);
}).catch((error) => {
  console.log(error);
})

const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("./movies");
  }
  else {
    error.value = true;
  }
};

// const loginWithGoogle = () => {
//   const credential = GoogleAuthProvider.credentialFromResult(result);
// }
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
      <h2>Login with Google</h2>
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