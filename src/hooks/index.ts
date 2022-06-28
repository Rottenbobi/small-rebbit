import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
export function useLazyData(callback: () => void) {
  const target = ref(null)
  console.log(target)
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      console.log(123)
      if (isIntersecting) {
        callback()
        stop()
      }
    },
    { threshold: 0 },
  )

  return target
}
