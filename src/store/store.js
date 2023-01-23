import { defineStore } from "pinia";
import axios from "axios";
import { firestore } from "../firebase/index";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const useStore = defineStore("store", {
  state: () => {
    return {
      movies: [],
      cart: new Map(),
      count: 0,
    };
  },
  actions: {
    async addToFirestore() {
      const genres = new Map([
        [28, "Action"],
        [12, "Adventure"],
        [16, "Animation"],
        [35, "Comedy"],
        [14, "Fantasy"],
      ]);

      genres.forEach(async (value, key) => {
        let data = (
          await axios.get("https://api.themoviedb.org/3/discover/movie", {
            params: {
              api_key: "d074056107be35c2b2df712431dcd31f",
              with_genres: key,
              include_adult: false,
            },
          })
        ).data.results;

        data = data.map((movie) => {
          return {
            id: movie.id,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          };
        });
        await setDoc(doc(firestore, "Genre", value), { data });
      });
    },

    async getMovies(genre) {
      this.movies = (await getDoc(doc(firestore, "Genre", genre))).data().data;
    },

    increment() {
      this.count++;
    },

    purchase(id, data) {
      this.cart.set(id, data);
    },

    remove(id) {
      this.cart.delete(id);
    },
  },
});
