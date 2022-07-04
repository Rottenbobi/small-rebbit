import {
  IAxsRes,
  HomeBanner,
  GoodsType,
  HomeHotGoods,
  HomeBrand,
  HomeProduct
} from '@/types/data.d'
import { defineStore } from 'pinia'
import request from '@/utils/request'

export default defineStore('home', {
  state: () => {
    return {
      bannerList: [] as HomeBanner[],
      newGoods: [] as GoodsType[],
      hotGoods: [] as HomeHotGoods[],
      brandList: [] as HomeBrand[],
      productList: [] as HomeProduct[]
    }
  },
  actions: {
    // 获取首页轮播图
    async getBannerList() {
      if (this.bannerList.length) return
      const res = await request.get<IAxsRes<HomeBanner[]>>('/home/banner')
      this.bannerList = res.data.result
    },
    // 获取首页商品
    async getNewGoods() {
      // <IAxsRes<>>
      const res = await request.get<IAxsRes<GoodsType[]>>('/home/new')
      this.newGoods = res.data.result
    },
    // 获取人气推荐商品
    async getHotGoods() {
      const res = await request.get<IAxsRes<HomeHotGoods[]>>('/home/hot')
      this.hotGoods = res.data.result
    },
    // 获取品牌数据
    async getBrandList() {
      const res = await request.get<IAxsRes<HomeBrand[]>>('/home/brand')
      this.brandList = res.data.result
    },
    // 获取产品数据
    async getProductList() {
      const res = await request.get<IAxsRes<HomeProduct[]>>('/home/goods')
      this.productList = res.data.result
    }
  }
})
