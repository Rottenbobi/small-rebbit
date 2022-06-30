import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarousel from '@/components/carousel/index.vue'
import XtxMore from './more/index.vue'
import Bread from './bread/index.vue'
import BreadItem from './bread/Item.vue'
import XtxGoodItem from './gooditem/index.vue'
import { useIntersectionObserver } from '@vueuse/core'
import defaultImg from '@/assets/images/200.png'
import { App } from 'vue'
const arr = [XtxSkeleton, XtxCarousel, XtxMore, Bread, BreadItem , XtxGoodItem]
export default function (app: App<Element>) {
  arr.forEach((item) => {
    app.component(item.name, item)
  })
  app.directive('lazy', {
    mounted(el, binding) {
      const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.src = binding.value
          el.onerror = function () {
            el.src = defaultImg
          }
        }
        stop()
      })
    },
  })
}
