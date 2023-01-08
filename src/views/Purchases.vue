<script setup>
import ShoppingVue from '../components/Shopping.vue';
</script>

<template>
  <div class="purchase-header">
    <h1>Purchases</h1>
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