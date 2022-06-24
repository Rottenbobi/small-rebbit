import { createWebHistory, createRouter } from 'vue-router'
const routes = createRouter({
	history: createWebHistory(),
	routes: [
		{
            path:'/',
            component:() => import('@/view/layout/index.vue')
        }
	]
})

export default routes