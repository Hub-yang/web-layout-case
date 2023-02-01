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
    redirect: "/flex",
    component: () => import("../views/layout/index.vue"),
    children: [
      {
        path: "flex",
        name: "flex",
        component: () => import("../views/flex/index.vue"),
      },
      {
        path: "test",
        name: "test",
        component: () => import("../views/test/index.vue"),
      },
    ],
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
