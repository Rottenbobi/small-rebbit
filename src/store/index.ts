import categroy from './modules/categroy'
import home from './modules/home'
export default function useStore() {
  return {
    categroy: categroy(),
    home: home(),
  }
}
