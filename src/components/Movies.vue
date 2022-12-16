<script setup>
import { useStore } from '../store/store';
import { ref } from 'vue';
import SiteModal from '../components/SiteModal.vue';

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

console.log(store);
</script>

<template>
  <div>
    <img v-for="movie in poster" :src="poster[poster]" alt="poster" @click="openModal(movie.id)" />
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