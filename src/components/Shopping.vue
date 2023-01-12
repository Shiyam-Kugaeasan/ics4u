<script setup>
import { useStore } from '../store/store';

const store = useStore();
</script>

<template>
  <div v-for="movie in Array.from(store.cart.values())" class="purchases">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" alt="poster" class="poster"/>
    <div>
      <h1 class="title">{{ movie.title }}</h1>
      <p class="overview">{{ movie.overview }}</p>
    </div>
  </div>
</template>

<style scoped>
.purchases {
  display: flex;
  background: #00000099;
  margin: 1%;
}

.title {
  margin: 5% 2%;
}

.overview {
  margin: 2% 20% 2% 2%;
  font-size: large;
}

.poster {
  height: 375px;
  width: 250px;
  margin: 2%;
}
</style>