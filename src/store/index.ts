import categroy from './modules/categroy'
import home from './modules/home'
import goods from './modules/goods'

export default function useStore() {
  return {
    categroyStore: categroy(),
    homeStore: home(),
    goodsStore: goods()
  }
}
