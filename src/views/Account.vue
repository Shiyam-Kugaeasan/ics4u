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
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    };
  });
};

// await store.addToFirestore();
</script>

<template>
  <div class="account-header">
    <div class="half-header">
      <h1>Movies</h1>
      <input type="search" v-model="criteria" @keydown.enter="search(0)" class="searchbar">
    </div>
    <RouterLink to="/purchases" custom v-slot="{ navigate }">
      <img src="shopping-cart.png" alt="To purchases." @click="navigate" role="link" class="cart">
    </RouterLink>
  </div>
  <div>
    <select v-model="genre" @change="getGenres()" class="genreSelect">
      <option value="Action">Action</option>
      <option value="Adventure">Adventure</option>
      <option value="Animation">Animation</option>
      <option value="Comedy">Comedy</option>
      <option value="Fantasy">Fantasy</option>
    </select>
    <template v-if="result.length">
      <div class="nextPrevButtons">
        <button @click="search(-1)" class="prev">Prev</button>
        <h1 class="pageNumber">{{ `Page ${page} of ${pageLimit}` }}</h1>
        <button @click="search(1)" class="next">Next</button>
      </div>
    </template>
    <div class="posters">
      <template v-if="result.length">
        <img v-for="movie in result" :id="movie.id" :src="movie.poster" alt="No poster available"
          @click="openModal(movie.id)">
      </template>
      <template v-else>
        <img v-for="movie in store.movies" :id="movie.id" :src="movie.poster" alt="poster" @click="openModal(movie.id)">
      </template>
    </div>
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  </div>
</template>

<style scoped>
.account-header {
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

h1 {
  margin-left: 1%;
  padding: 1%;
  width: 100px;
  font-size: 45px;
  height: auto;
  text-align: center;
}

.half-header {
  margin: 0% 2%;
}

.searchbar {
  margin: 5% 40% 5% 0%;
  width: 200px;
}

.cart {
  width: 80px;
  height: auto;
  margin: 2%;
  margin-right: 4%;
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

.genreSelect {
  margin: 1% 2%;
  width: 200px;
  height: 40px;
  font-weight: bolder;
}

.nextPrevButtons {
  display: flex;
  flex-direction: row;
  margin: 0% 2%;
}

.next .prev {
  width: 100px;
  margin: 0% 1%;
}

.pageNumber {
  font-size: 20px;
  padding: 0% 5%;
  margin: 0% 5%;
}
</style>