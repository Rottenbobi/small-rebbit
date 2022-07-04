import { SubCategory } from './../../types/category.d'
import { defineStore } from 'pinia'
import request from '@/utils/request'
import { CategoryItem, IAxsRes } from '@/types/data'
import { topCategory } from '@/constant/home'
import { TopCategory } from '@/types/category'
const defaultCategory = topCategory.map((item) => {
  return {
    name: item
  }
})
export default defineStore('categroy', {
  state: () => {
    return {
      list: defaultCategory as CategoryItem[],
      topCategory: {} as TopCategory,
      subCategory: {} as SubCategory
    }
  },
  actions: {
    // 获取分类数据
    async getCategory() {
      // console.log('获取分类数据')
      // request的get是一个泛型函数,泛型类型用于约束res.data的数据类型的
      const res = await request.get<IAxsRes<CategoryItem[]>>(
        '/home/category/head'
      )
      res.data.result.forEach((item) => {
        item.open = false
      })
      this.list = res.data.result
    },
    // 打开二级分类
    toggleSub(id: number, open: boolean): void {
      const findItem = this.list.find((item) => item.id === id)
      if (findItem) {
        findItem.open = open
      }
    },
    // 获取顶级分类
    async getTopCategory(id: string) {
      const res = await request.get<IAxsRes<TopCategory>>('/category?id=' + id)
      this.topCategory = res.data.result
    },
    // 获取二级类目详情
    async getSubCategory(id: string) {
      // TopCategory 类型不正确 ❌
      const res = await request.get<IAxsRes<SubCategory>>(
        '/category/sub/filter?id=' + id
      )
      this.subCategory = res.data.result
    }
    // hideSub(id: number) {
    //   const findItem = this.list.find((item) => item.id === id)
    //   if (findItem) {
    //     findItem.open = false
    //   }
    // }
  }
})
