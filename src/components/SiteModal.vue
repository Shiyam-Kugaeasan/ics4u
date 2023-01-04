<script setup>
import { useStore } from '../store/store';
import axios from 'axios';
import { ref } from 'vue';

const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

const store = useStore();
await store.getMovies();
const movie = ref(false);
const purchases = new Array(20);
var i = 0;

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
// const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

const purchase = () => {
  purchases[i] = props.id;
  i++;
  console.log(purchases);
  console.log(store.cart[0]);
}

console.log(props.id);
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <div v-if="movie" class="items">
          <h1>Title: {{ movie.title }}</h1>
          <p>Release Date: {{ movie.release_date }}</p>
          <p>{{ movie.overview }}</p>
          <!-- <img src="`https://image.tmdb.org/t/p/w500/{{movie.poster_path}}`" alt="poster"> -->
        </div>
        <button class="purchase" @click="purchase">Purchase</button>
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

.items {
  display: flex;
  flex-direction: column;
}
.poster {
  height: 100px;
  width: 50px;
}

.title {
  z-index: 3;
  color: red;
}

.purchase {
  background-color: red;
  color: black;
  border-radius: 12px;
  padding: 2% 4%;
}

.purchase:hover {
  background-color: white;
}
</style>