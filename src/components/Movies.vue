<script setup>
import { useStore } from '../store/store';
import { ref } from 'vue';
import SiteModal from '../components/SiteModal.vue';
import axios from 'axios';

const store = useStore();
await store.getMovies();
const poster = store.movies;

const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

// async const getMovies
//       let data = (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
//         params: {
//           api_key: "d074056107be35c2b2df712431dcd31f",
//         }
//       })).data.results;

// const number = ref(null);
// const movie = ref(false);
// const getInfo = async () => {
//   const data = store.movies.movie.id;
//   movie.value = (
//     await axios.get(`https://api.themoviedb.org/3/movie/${data}`, {
//       params: {
//         api_key: "d074056107be35c2b2df712431dcd31f",
//       },
//     })
//   ).data;
// }; 
</script>

<template>
  <div>
    <img v-for="movie in poster" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="poster" @click="openModal(movie.id)" />
  </div>
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
</template>

<style scoped>
.title {
  background-color: black;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.25rem;
}

img {
  width: 200px;
  height: 300px;
  margin: 1%;
}
</style>>