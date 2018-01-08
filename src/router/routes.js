import index from '../pages/index/index.vue';
import Publicsps from '../pages/index/public_server_platfroms/PublicSps.vue';
import Entrys from '../pages/index/an_accept_platfroms/AnAccp.vue';
import Grid from '../pages/index/grid_manage_platfroms/GrMap.vue';
import Login from '../pages/login/Login.vue';
import Resgister from '../pages/resgister/Resgister.vue';
import notFound from '../pages/404/notFound.vue';
// public_server_platfroms的子路由

import Message from '../pages/index/an_accept_platfroms/entry/message.vue';
import Messgrid from '../pages/index/grid_manage_platfroms/grid/grid.vue';
import Activity from '../pages/index/public_server_platfroms/public_sub/activity.vue';
let routes = [
    {
        path: '/',
        redirect: '/admin/publicsps'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/resgister',
        name: 'Resgister',
        component: Resgister
    },
    {
        path: '/admin',
        name: 'admin',
        component: index,
        redirect: '/admin/publicsps',
        children: [
            {
                path: 'publicsps',
                name: 'Publicsps',
                component: Publicsps,
                redirect: '/admin/publicsps/activity/0',
                children: [
                    {
                        path: 'activity/:id',
                        name: 'activity',
                        component: Activity
                    }
                ]
            },
            {
                path: 'entrys',
                name: 'Entrys',
                component: Entrys,
                redirect: '/admin/entrys/message',
                children: [
                    {
                        path: 'message',
                        name: 'message',
                        component: Message
                    }
                ]
            },
            {
                path: 'grid',
                name: 'Grid',
                component: Grid,
                children: [
                    {
                        path: 'messgrid',
                        name: 'Messgrid',
                        component: Messgrid
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        name: '404',
        component: notFound
    }
];
export default routes;