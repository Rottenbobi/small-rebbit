import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      // 路由懒加载
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '', // 默认子路由
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: '/category/:id',
          component: () => import('@/views/Category/index.vue')
        },
        {
          path: '/category/sub/:subId',
          component: () => import('@/views/Category/sub.vue')
        },
        {
          path: '/goods/:goodsId',
          component: () => import('@/views/Goods/index.vue')
        }
      ]
    },
    {
      path: '/playground',
      component: () => import('@/views/PlayGround/index.vue')
    }
  ]
})

// 默认
export default router
