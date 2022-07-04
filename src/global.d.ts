import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarousel from '@/components/carousel/index.vue'
import XtxBread from '@/components/bread/index.vue'
import XtxBreadItem from '@/components/breadItem/index.vue'
import XtxCity from '@/components/city/index.vue'
import XtxNumberBox from '@/components/number/index.vue'
import XtxButton from '@/components/button/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    // key 是 全局组件名
    // value 是 对应的组件类型
    XtxSkeleton: typeof XtxSkeleton
    XtxCarousel: typeof XtxCarousel
    XtxBreadItem: typeof XtxBreadItem
    XtxCity: typeof XtxCity
    XtxNumberBox: typeof XtxNumberBox
    XtxButton: typeof XtxButton
  }
}
