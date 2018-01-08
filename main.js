import './static/css/reset.css';
import Vue from 'vue';
import ElementUI from 'element-ui';
import router from '@/router/config.js';
import 'element-ui/lib/theme-chalk/index.css';
import axios from '@/http/axios.js';
import App from './App.vue';
import store from '@/store/store.js';
Vue.use(ElementUI);

let vm = new Vue({
    el: '.container',
    store: store,
    router,
    render (createElement) {
        return createElement(App);
    }
});

if (module.hot) {
    module.hot.accept();
}
