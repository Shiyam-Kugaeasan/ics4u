<script setup>
import axios from 'axios';
import { ref } from 'vue';
import {useStore} from "../store/store.js";

const store = useStore();
// const movie = ref(false);


const movie = (
  await axios.get("https://api.themoviedb.org/3/trending/movie", {
    params: {
      media_type: "movie",
      time_window: "week",
      api_key: "d074056107be35c2b2df712431dcd31f"
    },
  })
).data;
</script>

<template>
  <div>
    <p>Bye</p>
    <p>{{movie.title}}</p>
    <img src="https://image.tmdb.org/t/p/w500/{{movie.data.poster_path}}" alt="{{movie.title}} poster">
  </div>
</template>

<style scoped>

</style>
