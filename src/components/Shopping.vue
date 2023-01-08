<script setup>
import { useStore } from '../store/store';
import axios from 'axios';
import { ref } from 'vue';
import SiteModalVue from '../components/SiteModal.vue';
//trending
const store = useStore();
await store.getMovies();
const movie = ref(false);
const movieID = 76600;

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
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  console.log(poster);
  console.log(store.movies);
};

await getData();
</script>

<template>
  <!-- <button @click="getData">View</button> -->
  <div v-if="movie">
    <p v-for="movie in store.cart" class="movieTitle">{{ movie.title }}</p>
    <img src="poster" alt="">
  </div>
</template>

<style scoped>
.movieTitle {
  margin: 1%;
}
</style>