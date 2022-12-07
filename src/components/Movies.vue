<script setup>
import axios from 'axios';
import { ref } from 'vue';
import {useStore} from "../store/store.js";

const store = useStore();
const number = ref(null);
const movie = ref(false);

const getMovies = async () => {
  const data = number.value;
  movie.value = (
    await axios.get("https://api.themoviedb.org/3/movie/634649", {
      params: {
        movie_id: data,
        api_key: "d074056107be35c2b2df712431dcd31f"
      },
    })
  ).data;
};
</script>

<template>
  <div>
    <select v-model="number">
      <option value="634649"></option>
    </select>
  </div>
  <div v-if="getMovies">
    <p>Bye</p>
    <!-- <p class="title">{{ movie.title }}</p> -->
  </div>
</template>

<style scoped>
.title {
  background-color: black;
}
</style>

<!-- {
  params: {
    media_type: "movie",
    time_window: "week",
    api_key: "d074056107be35c2b2df712431dcd31f"
  },
} -->