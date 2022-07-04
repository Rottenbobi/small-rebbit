import { defineStore } from 'pinia'
import request from '@/utils/request'
import { IAxios, Ibanner } from '@/Dts/categroy'
import * as cateD from '@/Dts/categroy'
export default defineStore('home', {
  state: () => {
    return {
      bannerList: [] as Ibanner[],
      newGoods: [] as cateD.IhomeNews[],
      hotGoods: [] as cateD.IhomeHot[],
      branList: [] as cateD.IhomeBrand[],
      products: [] as cateD.IhomeProduct[],
    }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    async getbannerList() {
      const res = await request.get<IAxios<Ibanner[]>>('/home/banner')
      console.log(res)
      this.bannerList = res.data.result
    },
    async getNewGoods() {
      const res = await request.get<IAxios<cateD.IhomeNews[]>>('/home/new')
      this.newGoods = res.data.result
    },

    async getHotGoods() {
      const res = await request.get<IAxios<cateD.IhomeHot[]>>('/home/hot')
      this.hotGoods = res.data.result
    },

    async getBrandList() {
      const res = await request.get<IAxios<cateD.IhomeBrand[]>>('/home/brand')
      this.branList = res.data.result
    },
    async getProductList() {
      const res = await request.get<IAxios<cateD.IhomeProduct[]>>('/home/goods')
      this.products = res.data.result
    }
  },
})
