import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Account from "../views/Account.vue";

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/movies',
    component: Account
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;