import { GoodsInfo } from '@/types/goods.d'
import { defineStore } from 'pinia'
import request from '@/utils/request'
import { IAxsRes } from '@/types/data'

export default defineStore('goods', {
  state: () => {
    return {
      goods: {} as GoodsInfo
    }
  },
  actions: {
    async getGoodsInfo(id: string) {
      const res = await request.get<IAxsRes<GoodsInfo>>('/goods?id=' + id)
      this.goods = res.data.result
    }
  }
})
