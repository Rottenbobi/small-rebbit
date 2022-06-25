import { createWebHistory, createRouter } from 'vue-router'
const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/view/layout/index.vue'),
      children: [
        {
          path: '',
          component: () => import('@/view/home/index.vue'),
        },
        {
          path: '/category/:id',
          component: () => import('@/view/category/index.vue'),
        },
        {
          path: '/category/sub/:id',
          component: () => import('@/view/category/sub.vue'),
        },
        
      ],
    },
    {
      path: '/pg',
      component: () => import('@/view/playground/index.vue')
    }
  ],
})

export default routes
