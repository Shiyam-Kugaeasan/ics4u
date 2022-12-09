import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore('store', {
  state: () => {
    // const movie = ref(null);
    // const getMovies = async () => {
    //   movie.value = (
    //     await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    //       params: {
    //         api_key: "d074056107be35c2b2df712431dcd31f",
    //         language: "en-US",
    //         sort_by:  "popularity.desc",
    //         include_adult: "false",
    //         include_video: "false",
    //         page: "1",
    //         with_watch_monetization_types: "flatrate",
    //       },
    //     })
    //   ).data;
    // }; 
    return {
      count: 0,
    }
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});