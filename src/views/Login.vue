<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase/index";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const router = useRouter();
const username = ref("");
const password = ref("");
const email = ref("");

const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      router.push("./movies");
    }).catch((error) => {
      console.log(error);
    });
}

const loginWithPassword = async () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      router.push("./movies");
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>

<template>
  <div class="login">
    <div class="login-box">
      <h1>Login</h1>
      <form @submit.prevent="loginWithPassword()">
        <!-- <p>Username: </p> -->
        <input type="email" placeholder="E-mail" v-model="email" class="username">
        <!-- <p class="password-text">Password: </p> -->
        <input type="password" placeholder="Password" v-model="password" class="password">
        <input type="submit" class="submit">
      </form>
      <button @click="loginWithGoogle()" class="googleLogin">Login with Google</button>
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
  flex-direction: column;
  margin: 4% 5% 5%;
}

input {
  width: 250px;
}

.submit {
  width: 258px;
}

h1 {
  margin-bottom: 5%;
}

.googleLogin {
  font-size: 22px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-color: blue;
  color: white;
  padding: 1%;
}

.googleLogin:hover {
  background-color: white;
  color: black;
}
</style>