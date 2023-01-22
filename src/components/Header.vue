<script setup>
import { useRouter } from "vue-router"
</script>

<template>
  <div class="header">
    <h1>MovieSite.com</h1>
    <br>
    <div class="buttons">
      <RouterLink to="/signup" custom v-slot="{ navigate }">
        <button @click="navigate" role="link" class="button signup">Sign Up</button>
      </RouterLink>
      <RouterLink to="/login" custom v-slot="{ navigate }">
        <button @click="navigate" role="link" class="button login">Login</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: black;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

h1 {
  margin-top: 1%;
  font-size: 40px;
}

.buttons {
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
}

.button {
  background-color: red;
  border: 5px solid black;
  border-radius: 10px;
  padding: 0.5% 5%;
  margin-bottom: 1%;
}

.login {
  padding: 0.5% 5.5%;
}

.button:hover {
  background-color: white;
}
</style>