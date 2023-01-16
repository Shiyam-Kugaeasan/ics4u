<script setup>
import { ref } from "vue";
import { auth } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const username = ref("");
const email = ref("");
const firstPassword = ref("");
const secondPassword = ref("");

const registerWithEmail = async () => {
  if (firstPassword.value !== secondPassword.value) {
    console.log("Issue with Password.");
    return;
  }
  try {
    await createUserWithEmailAndPassword(auth, email.value, firstPassword.value);
  } catch (error) {
    console.log(error);
  }
};

const registerWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
  console.log(user);
};
</script>

<template>
  <div class="signUp">
    <div class="sign-box">
      <h1>Register</h1>
      <h2>Register with Google</h2>
      <button @click="registerWithGoogle">Google Register</button>
      <hr />
      <h2>Register with Email</h2>
      <form @submit.prevent="registerWithEmail">
        <input v-model="username" type="text" placeholder="Username">
        <input v-model="email" type="email" placeholder="E-mail">
        <input v-model="firstPassword" type="password" placeholder="Enter Password">
        <input v-model="secondPassword" type="password" placeholder="Re-enter Password">
        <input type="submit" value="Register" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.signUp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
}

.sign-box {
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