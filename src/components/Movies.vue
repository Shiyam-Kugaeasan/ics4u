<script setup>
import { useStore } from '../store/store';
import { ref } from 'vue';
import axios from 'axios';
import SiteModal from '../components/SiteModal.vue';

const store = useStore();
const genre = ref(28);
const criteria = ref("");
const result = ref([]);
const page = ref(1);
const pageLimit = ref(0);
const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

const getGenres = async () => {
  result.value = [];
  criteria.value = "";
  await store.getMovies(genre.value);
};

const search = async (direction) => {
  page.value += direction;

  let data = (
    await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
        query: criteria.value,
        include_adult: false,
        page: page.value,
      },
    })
  ).data;

  pageLimit.value = data.total_pages;

  result.value = data.results.map((movie) => {
    return {
      id: movie.id,
      poster: movie.poster_path,
    };
  });
};

// await store.addToFirestore();
</script>

<template>
  <div class="posters">
    <img v-for="movie in store.movies" :src="movie.poster" alt="poster" @click="openModal(movie.id)" />
  </div>
  <select v-model="genre" @change="getGenres()">
    <option value="Action">Action</option>
    <option value="Adventure">Adventure</option>
    <option value="Animation">Animation</option>
    <option value="Comedy">Comedy</option>
    <option value="Fantasy">Fantasy</option>
  </select>
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
</template>

<style scoped>
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