<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const router = useRouter();
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
    router.push("./movies");
  } catch (error) {
    console.log(error);
  }
};

const registerWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
  router.push("./movies");
  console.log(user);
};
</script>

<template>
  <div class="signUp">
    <div class="sign-box">
      <h1 class="register">Register</h1>
      <h2 class="emailRegister">Register with Email</h2>
      <form @submit.prevent="registerWithEmail">
        <input v-model="username" type="text" placeholder="Username">
        <input v-model="email" type="email" placeholder="E-mail">
        <input v-model="firstPassword" type="password" placeholder="Enter Password">
        <input v-model="secondPassword" type="password" placeholder="Re-enter Password">
        <input type="submit" value="Register" class="submit" />
      </form>
      <!-- <hr> -->
      <!-- <h2 @click="registerWithGoogle">Register with Google</h2> -->
      <button @click="registerWithGoogle" class="googleRegister">Register with Google</button>
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

.register {
  margin-bottom: 5%;
  font-size: 50px;
}

.emailRegister {
  font-size: 30px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  width: 250px;
}

.submit {
  width: 258px;
}

.googleRegister {
  font-size: 22px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-color: blue;
  color: white;
  padding: 1%;
}

.googleRegister:hover {
  background-color: white;
  color: black;
}
</style>