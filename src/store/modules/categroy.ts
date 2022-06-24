import { defineStore } from 'pinia'
import request from '@/utils/request'
import * as CateD from '@/Dts/categroy'
import * as Const from '@/constant'
const defaultCate = Const.topCategory.map((item,index)=>{
  return{
    name:item,
    id:index
  }
})
export default defineStore('categroy', {
  state: () => {
    return {
      List:defaultCate as CateD.Ilist[]
      }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
  async getList(){
    const res = await request.get<CateD.IAxios<CateD.Ilist[]>>('/home/category/head')
    this.List= res.data.result
  }

  },
})
