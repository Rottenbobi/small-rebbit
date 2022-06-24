import { createWebHistory, createRouter } from 'vue-router'
const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            component:() => import('@/view/layout/index.vue'),
            children: [
                { path:'/category/:id',
                component:() =>import('@/view/category/index.vue') 
            }
            ]
        }
    ]
})

export default routes