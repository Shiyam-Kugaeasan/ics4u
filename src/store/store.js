import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => {
        return {
            movie: "Spider-Man",
            count: 0,
        }
    },
    actions: {
        increment() {
            this.count++;
        },
    },
});