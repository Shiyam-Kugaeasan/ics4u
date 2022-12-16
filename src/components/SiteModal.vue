<script setup>
import { useStore } from '../store/store';
import { ref } from 'vue';

const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);
const store = useStore();
const info = ref(false);
const data = store.movies;

// const getInfo = async () => {
//   info.value = (
//     await axios.get("https://api.themoviedb.org/3/movie/", {
//         params: {
//           api_key: "d074056107be35c2b2df712431dcd31f",
//         }
//       })).data.results;
//     }
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1>{{ props.id }}</h1>
        <p>{{}}</p>
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