import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import Layout from "@/views/layout/index.vue";
// import Children from "@/views/layout/children.vue";

export const pageRouter = [
    {
        path: "/index",
        component: Layout,
        children: [
            {
                path: "/organInfo",
                name: "organInfo",
                redirect: "/organInfoIndex",
                meta: {
                    icon: "iconjigouxinxi",
                    title: "机构信息",
                    parent: null
                },
                children: [

                ]
            }
        ]
    }
];

const routes: Array<RouteRecordRaw> = [
    ...pageRouter,
    {
        path: '/',
        name: 'Login',
        component: () => import('@/views/login/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
