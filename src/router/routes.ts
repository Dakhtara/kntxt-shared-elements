import ProductList from "../pages/ProductList.vue";
import ProductShow from "../pages/ProductShow.vue";
import * as VueRouter from "vue-router";
import App from "../App.vue";

const routes = [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductList },
    { path: '/products/:id', component: ProductShow }
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes // short for `routes: routes`
})