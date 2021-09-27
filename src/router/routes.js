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
        component: () =>
            import(/* webpackChunkName: "productDetail" */ "../views/ProductDetail.vue"),
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue"),
    },
];

export default routes;