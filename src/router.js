import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Products from "@/components/Products";
import AddProduct from "@/components/AddProduct";
import {auth} from "@/db";
import store from "@/store";

const routes = [
    {
        path: "/login",
        component: Login,
        name: "login",
        meta:{
            title: 'Login',
            requireAuth: false
        }
    },{
        path: "/register",
        component: Register,
        name: "register",
        meta: {
            title: 'Register',
            requireAuth: false
        }
    },{
        path: "/add-product",
        component: AddProduct,
        name: "add-product",
        meta: {
            title: 'Add Product',
            requireAuth: true
        }
    },
    {
        path: "/",
        component: Products,
        name: "products",
        meta: {
            title: "Products",
            requireAuth: true
        }
    }
];

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
});
router.beforeEach(async (to, from, next) => {
    document.title = to.meta.title
    if(to.matched.some(route => route.name === 'login')){
        let user = await auth.getCurrentUser();

        if(user) next('/');

        return next();
    }
    if(to.matched.some(route => route.meta.requireAuth)){
       let user = await auth.getCurrentUser();
        if(user) {
            store.dispatch('updateUser',user);
            return next();
        }
        return next('/login');
    }

    next();
})
export default router;

