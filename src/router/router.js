import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import Account from "../views/Account.vue";
import Purchases from "../views/Purchases.vue";

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/movies',
    component: Account
  },
  {
    path: '/purchases',
    component: Purchases
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;