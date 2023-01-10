<script setup>
import ShoppingVue from '../components/Shopping.vue';
</script>

<template>
  <div class="purchase-header">
    <h1>Purchases</h1>
    <RouterLink to="/movies" custom v-slot="{navigate}">
      <button @click="navigate" role="link" class="back-button">Back to Movies</button>
    </RouterLink>
  </div>
  <div>
    <p>Your Purchases:</p>
    <Suspense>
      <ShoppingVue />
    </Suspense>
  </div>
</template>

<style scoped>
.purchase-header {
  background-color: black;
  width: 100vw;
  display: flex;
  flex-direction: row;
}

.back-button {
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: 80%;
}

h1 {
  margin-left: 1%;
  padding: 1%;
  width: 100px;
  font-size: 45px;
  height: auto;
  text-align: center;
}
</style>