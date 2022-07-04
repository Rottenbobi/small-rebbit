import categroy from './modules/categroy'
import home from './modules/home'
import good from './modules/good'
export default function useStore() {
  return {
    categroy: categroy(),
    home: home(),
    good: good(),
  }
}
