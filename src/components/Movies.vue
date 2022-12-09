<script setup>
import axios from 'axios';
import { ref } from 'vue';
import {useStore} from "../store/store.js";

const store = useStore();
const number = ref(null);
const movie = ref(false);

// const getMovies = async () => {
//   const data = number.value;
//   movie.value = (
//     await axios.get(`https://api.themoviedb.org/3/movie/${data}`, {
//       params: {
//         api_key: "d074056107be35c2b2df712431dcd31f",
//       },
//     })
//   ).data;
// };

const getMovies = async () => {
  movie.value = (
    await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        language: "en-US",
        sort_by:  "popularity.desc",
        include_adult: "false",
        include_video: "false",
        page: "1",
        with_watch_monetization_types: "flatrate",
      },
    })
  ).data;
};
</script>

<template>
  <div>
    <!-- <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg" alt="poster"> -->
  </div>
</template>

<style scoped>
.title {
  background-color: black;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.25rem;
}
</style>>