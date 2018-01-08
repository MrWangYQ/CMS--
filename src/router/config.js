import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import { getCookie } from '../utils/utils.js';
Vue.use(VueRouter);
let router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.name;
    if (to.name === 'Login' || to.name === 'Resgister') {
        next();
    } else {
        if (getCookie('token')) {
            next();
        } else {
            next('/login');
        }
    }
});

export default router;