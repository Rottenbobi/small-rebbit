import XtxSkeleton from '@/components/skeleton/index.vue'
import { App } from 'vue'
const arr = [XtxSkeleton]
export default function (app: App<Element>) {
  arr.forEach((item) => {
    app.component(item.name, item)
  })
}
