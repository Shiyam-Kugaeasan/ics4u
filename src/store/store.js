import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
      cart: new Map(),
      count: 0,
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
    
    increment() {
      this.count++;
    },

    purchase(id, data) {
      this.cart.set(id, data);
    }
  }
});