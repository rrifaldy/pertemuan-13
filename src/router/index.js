import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TwoBindingView from "../views/TwoBindingView.vue";
import ConditionalLoopView from "../views/ConditionalLoopView.vue";
import HooksView from "../views/HooksView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/twoBinding",
    name: "twoBinding",
    component: TwoBindingView,
  },
  {
    path: "/conditionalLoop",
    name: "conditionalLoop",
    component: ConditionalLoopView,
  },
  {
    path: "/lifecycleHook",
    name: "lifecycleHook",
    component: HooksView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
