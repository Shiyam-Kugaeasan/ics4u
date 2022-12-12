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
      <p>Username: </p>
      <input type="text" placeholder="Username" v-model="username">
      <br>
      <p>Password: </p>
      <input type="password" placeholder="Password" v-model="password">
      <br>
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
  background-color: black;
}

form {
  display: flex;
  flex: column;
}
</style>

<!-- <script setup>
import { ref } from 'vue';
import SiteModal from '../components/SiteModal.vue';

const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div>
    <h1>Login</h1>
    <button @click="openModal(5000)">Modal</button>
  </div>
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
</template>

<style scoped>

</style> -->