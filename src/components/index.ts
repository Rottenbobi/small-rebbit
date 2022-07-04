// App 是一个类型: app实例类型
import { App } from 'vue'
import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarousel from '@/components/carousel/index.vue'
import XtxMore from '@/components/more/index.vue'
import XtxBread from '@/components/bread/index.vue'
import XtxBreadItem from '@/components/breadItem/index.vue'
import XtxGoodsItem from '@/components/goodsItem/index.vue'
import XtxCity from '@/components/city/index.vue'
import XtxNumberBox from '@/components/number/index.vue'
import XtxButton from '@/components/button/index.vue'

import { useIntersectionObserver } from '@vueuse/core'
import defaultImg from '@/assets/images/200.png'
const components = [
  XtxSkeleton,
  XtxCarousel,
  XtxMore,
  XtxBread,
  XtxBreadItem,
  XtxGoodsItem,
  XtxCity,
  XtxNumberBox,
  XtxButton,
]

// app.use的install函数
export default function (app: App) {
  // 用来注册组件
  components.forEach((comp) => {
    app.component(comp.name, comp)
  })
  // 自定义指令 输入框获取焦点
  app.directive('lazy', {
    // 参数-: 该指令绑定的元素
    mounted(el, binding) {
      const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.src = binding.value
          el.onerror = function () {
            el.src = defaultImg
          }
          stop()
        }
      })
    },
  })
}
