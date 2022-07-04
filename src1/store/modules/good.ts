import { defineStore } from 'pinia'
import request from '@/utils/request'
import * as cateD from '@/Dts/categroy'
export default defineStore('goods', {
  state: () => {
    return {
      goods: {} as cateD.GoodsInfo,
    }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
   async getGoodsInfo(id: string) {
      const res = await request.get<cateD.IAxios<cateD.GoodsInfo>>(`/goods?id=${id}`)
      this.goods = res.data.result
    },
  },
})
