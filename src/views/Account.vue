<script setup>
import MoviesVue from "../components/Movies.vue";
</script>

<template>
  <div class="account-header">
    <h1>Movies</h1>
    <RouterLink to="/purchases" custom v-slot="{navigate}">
      <img src="shopping-cart.png" alt="To purchases." @click="navigate" role="link" class="cart">
    </RouterLink>
  </div>
  <div>
    <Suspense>
      <MoviesVue class="movies"/>
    </Suspense>
  </div>
</template>

<style scoped>
.account-header {
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
}

h1 {
  margin-left: 1%;
  padding: 1%;
  width: 100px;
  font-size: 45px;
  height: auto;
  text-align: center;
}

.movies {
  height: 100vh;
}

.cart {
  width: 80px;
  height: auto;
  margin: 1%;
}
</style>