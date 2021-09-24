import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/product/:id",
        name: "ProductDetail",
        component: () => import(/* webpackChunkName: "productDetail" */ "../views/ProductDetail.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
