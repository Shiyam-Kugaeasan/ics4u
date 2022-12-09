<script setup>
import axios from "axios";
import MoviesVue from "../components/Movies.vue";
</script>

<template>
<div>
  <p>Hello</p>
  <Suspense>
    <!-- <MoviesVue /> -->
    <img v-for="movie in MoviesVue" src="movie.poster_path">
  </Suspense>
</div>
</template>

<style scoped>

</style>