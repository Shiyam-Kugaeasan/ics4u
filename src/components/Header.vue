<script setup>
import { useRouter } from "vue-router"
</script>

<template>
  <div class="header">
    <h1>MovieSite.com</h1>
    <br>
    <RouterLink to="/signup" custom v-slot="{ navigate }">
      <button @click="navigate" role="link" class="button">Login</button>
    </RouterLink>
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
.button {
  background-color: red;
  border: 5px solid black;
  border-radius: 10px;
  padding: 0.5% 5%;
  margin-bottom: 1%;
}
.button:hover {
  background-color: white;
}
</style>