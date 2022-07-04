// hooks函数一般都以use开头
// 用来进行复用状态和逻辑
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
// 封装懒加载数据
export function useLazyData(callback: () => void) {
  const target = ref(null)

  const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      // 做你想做的事情
      callback()
      stop()
    }
  })
  return target
}
