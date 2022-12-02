import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Movies from "../views/Account.vue";

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/movies',
    component: Movies
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;