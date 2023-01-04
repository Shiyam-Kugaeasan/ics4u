<script setup>
import { useStore } from '../store/store';
import axios from 'axios';
import { ref } from 'vue';
import SiteModalVue from '../components/SiteModal.vue';
//trending
const store = useStore();
const movie = ref(false);
const movieID = store.cart[0];

// for (let i = 0; i < 20; i++) {
//   movieID = store.cart[i];
// }

const getData = async () => {
  movie.value = (
    await axios.get(`https://api.themoviedb.org/3/movie/${movieID}`, {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
      },
    })
  ).data;
  console.log(store.cart[0]);
};

// await getData();
</script>

<template>
  <button @click="getData">View</button>
  <div v-if="movie">
    <p>{{ movie.title }}</p>
  </div>
</template>

<style scoped>
</style>