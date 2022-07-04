// axios响应数据类型
export interface IAxsRes<T> {
  code?: string
  msg: string
  result: T
}

export type GoodsType = {
  desc: string
  discount: null
  id: string
  name: string
  orderNum: null
  picture: string
  price: string
}

// 首页分类类型
export type CategoryItem = {
  id: number
  name: string
  children: CategoryItem[]
  picture: string
  goods: GoodsType[]
  open: boolean
}

// 首页轮播图类型
export type HomeBanner = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: string
}

// 首页人气推荐的商品类型
export type HomeHotGoods = {
  alt: string
  id: string
  picture: string
  title: string
}

// 首页品牌的类型
export type HomeBrand = {
  desc: string
  id: string
  logo: string
  name: string
  nameEn: string
  picture: string
  place: string
  type: null
}

// 首页产品类型
export type subProduct = {
  id: string
  layer: number
  name: string
  parent: null
}
export type HomeProduct = {
  id: string
  name: string
  picture: string
  saleInfo: string
  children: subProduct[]
  goods: GoodsType[]
}

// 城市的类型
export type CityListType = {
  areaList: CityListType[]
  code: string
  level: number
  name: string
}

