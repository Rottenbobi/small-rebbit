import { GoodsType } from './data'
export type SaleProp = {
  id: string
  name: string
}
export type SaleType = {
  id: string
  name: string
  properties: SaleProp[]
}
export type SubCategory = {
  brands: null
  categories: null
  goods: GoodsType[]
  id: string
  name: string
  parentId: null
  parentName: null
  picture: string
  saleProperties: SaleType[]
}
// 一级分类详情
export type TopCategory = {
  id: stirng
  name: string
  picture: null
  children: SubCategory[]
}
