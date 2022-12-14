<script setup>
import { useStore } from '../store/store';
import axios from 'axios';

//trending
</script>

<template>
  <div class="purchase-header">
    <h1>Purchases</h1>
  </div>
  <div>
    <p>Your Purchases:</p>
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