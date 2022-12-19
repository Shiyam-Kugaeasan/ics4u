import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
      // cart[],
    }
  },
  actions: {
    async getMovies() {
      let data = (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: "d074056107be35c2b2df712431dcd31f",
        }
      })).data.results;

      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          title: movie.title,
        }
      });
    },
  }
});