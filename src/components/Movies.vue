<script setup>
import { useStore } from '../store/store';
import { ref } from 'vue';
import axios from 'axios';
import SiteModal from '../components/SiteModal.vue';

const store = useStore();
const genre = ref(28);
const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

// await store.getMovies();
await store.addToFirestore();
</script>

<template>
  <div class="posters">
    <img v-for="movie in store.movies" :src="movie.poster" alt="poster" @click="openModal(movie.id)" />
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
.posters {
  height: 1500px;
  width: 100vw;
}
img {
  width: 200px;
  height: 300px;
  margin: 2%;
}
</style>