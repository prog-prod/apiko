import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Products from "@/components/Products";

const routes = [
    {
        path: "/login",
        component: Login,
        name: "login",
        meta:{
            title: 'Login'
        }
    },{
        path: "/register",
        component: Register,
        name: "register",
        meta: {
            title: 'Register'
        }
    },
    {
        path: "/",
        component: Products,
        name: "products",
        meta: {
            title: "Test task",
        }
    },
];

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
    // linkExactActiveClass: 'active',
    // base: process.env.BASE_URL,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router;

