<script setup>
import { useStore } from '../store/store';
import axios from 'axios';
import { ref } from 'vue';

const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

const store = useStore();
await store.getMovies();
const movie = ref(false);

const getData = async () => {
  movie.value = (
    await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
      params: {
        api_key: "d074056107be35c2b2df712431dcd31f",
      },
    })
  ).data;
};
await getData();

const purchase = () => {
  store.cart[store.count] = store.movies.find(({id}) => id === props.id);
  store.increment();
  const found = store.movies.find(({id}) => id === props.id);
  console.log(found);
  console.log(store.cart);
}
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="poster" class="poster">
        <div v-if="movie" class="items">
          <h1 class="title">Title: {{ movie.title }}</h1>
          <p class="release">Release Date: {{ movie.release_date }}</p>
          <p class="overview">{{ movie.overview }}</p>
          <button class="purchase" @click="store.purchase(props.id, {
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path,
            overview: movie.overview,
          })">Purchase</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: #1F2123;
  color: white;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: relative;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1F2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}

.modal-inner-container {
  display: flex;
  flex-direction: row;
}

.items {
  display: flex;
  flex-direction: column;
  margin: 2%;
  padding-left: 2%;
}

.release {
  margin-top: 2%;
}
.overview {
  margin-top: 2%;}

.poster {
  width: 230px;
  height: 345px;
  margin: 2%;
}

.purchase {
  background-color: red;
  color: black;
  border-radius: 12px;
  padding: 2% 4%;
  margin: 0% 20%;
  margin-bottom: 10%;
}

.purchase:hover {
  background-color: white;
}
</style>

<!-- infor = [];
  this.infor = data.map((movie) => {
    return {
      id: movie.id,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      title: movie.title,
    }
  }); -->
  <!-- const check = store.cart.find(({id}) => id === purchases);
  check.bought = true; -->