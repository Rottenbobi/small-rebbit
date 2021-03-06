import { defineStore } from 'pinia'
import request from '@/utils/request'
import * as CateD from '@/Dts/categroy'
import * as Const from '@/constant'
const defaultCate = Const.topCategory.map((item, index) => {
  return {
    name: item,
    id: index,
  }
})
export default defineStore('categroy', {
  state: () => {
    return {
      List: defaultCate as CateD.Ilist[],
      topCategory: {} as CateD.ITopCategory,
      SubList: {} as CateD.IGoods,
    }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    async getList() {
      const res = await request.get<CateD.IAxios<CateD.Ilist[]>>(
        '/home/category/head',
      )
      res.data.result.forEach((item) => {
        item.open = false
      })
      this.List = res.data.result
    },
    showSub(id: number) {
      const findItems = this.List.find((item) => item.id === id)
      if (findItems) {
        findItems.open = true
      }
    },
    HideSub(id: number) {
      const findItems = this.List.find((item) => item.id === id)
      if (findItems) {
        findItems.open = false
      }
    },
    async getTopCategory(id: string) {
      // console.log(id);
      const res = await request.get<CateD.IAxios<CateD.ITopCategory>>(
        `/category?id=${id}`,
      )
      this.topCategory = res.data.result
    },
    async getSubcategory(id: string) {
      const res = await request.get<CateD.IAxios<CateD.IGoods>>(
        `/category/sub/filter?id=${id}`,
      )
      // console.log(res)
      this.SubList = res.data.result
    },
  },
})
