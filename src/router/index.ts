import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component: () => import("../views/Layout.vue"),
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
