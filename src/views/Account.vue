<script setup>
import MoviesVue from "../components/Movies.vue";
</script>

<template>
  <div class="account-header">
    <h1>Movies</h1>
    <button class="cart">Shopping Cart</button>
  </div>
  <div>
    <Suspense>
      <MoviesVue />
    </Suspense>
  </div>
</template>

<style scoped>
.account-header {
  background-color: black;
  display: flex;
  flex-direction: row;
  width: 100vh;
}
</style>