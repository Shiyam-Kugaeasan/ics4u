import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/movies'
    },
];