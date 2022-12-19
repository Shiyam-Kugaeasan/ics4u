<script setup>
import { useStore } from '../store/store';
import { ref } from 'vue';
import SiteModal from '../components/SiteModal.vue';

const store = useStore();
await store.getMovies();

const showModal = ref(false);
const selectedId = ref(0);
const selectedTitle = ref(0);

const openModal = (title, id) => {
  showModal.value = true;
  selectedId.value = title;
  selectedTitle.value = id;
};

const closeModal = () => {
  showModal.value = false;

};
console.log(store);
</script>

<template>
  <div>
    <img v-for="movie in store.movies" :src="movie.poster" alt="poster" @click="openModal()" />
  </div>
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  <p v-for="movie in store.movies" class="titit"> {{movie.title}}</p>
</template>

<style scoped>
.title {
  background-color: black;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.25rem;
}
.titit {
  z-index: 4;
  color: black;
}
img {
  width: 200px;
  height: 300px;
  margin: 2%;
}
</style>>