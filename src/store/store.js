import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
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
          poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        }
      });
    },
  }
});

// "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"

// async getMovies() {
    //   let data = (await axios.get (`https://api.themoviedb.org/3/discover/movie`, {
    //     params: {
    //       api_key: "d074056107be35c2b2df712431dcd31f",
    //       language: "en-US",
    //       sort_by:  "popularity.desc",
    //       include_adult: "false",
    //       include_video: "false",
    //       page: "1",
    //       with_watch_monetization_types: "flatrate",
    //     }
    //   })).data.results;

    //   this.movies = data.map((movie) => {
    //     return {
    //       id: movie.id,
    //       poster: movie.poster_path,
    //     }
    //   });
    // },