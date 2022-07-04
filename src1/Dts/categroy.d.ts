export interface Ilist {
  id: number
  name: string
  open: boolean
  picture: string
  children: IList[]
  goods: IGoods[]
}

export interface IAxios<T> {
  code: string
  msg: string
  result: T
}

export interface IGoods {
  desc: string
  discount: null
  id: string
  name: string
  orderNum: null
  picture: string
  price: string
  parentName: string
  saleProperties: {
    id: string
    name: string
    properties: { id: string; name: string }[]
  }[]
  brands: any[]
  goods: any[]
}

export interface Ibanner {
  hrefUrl: string
  id: string
  imgUrl: string
  type: string
}

export interface IhomeNews {
  desc: string
  discount: null
  id: string
  name: string
  orderNum: number
  picture: string
  price: string
}

export interface IhomeHot {
  alt: string
  id: string
  picture: string
  title: string
}
export interface IhomeBrand {
  desc: string
  id: string
  logo: string
  name: string
  nameEn: string
  picture: string
  place: string
  type: null
}
export interface IhomeProduct {
  id: string
  name: string
  picture: string
  saleInfo: string
  children: IhomeProductChild[]
  goods: IGoods[]
}

export interface IhomeProductChild {
  id: string
  layer: number
  name: string
  parent: null
}
// 顶级分类类型
export interface ITopCategory {
  id: string
  name: string
  picture: string
  children: IGoods[]
  goods: IGoods[]
}

// export type GoodsInfo = {
//   id: string
//   name: string
//   spuCode: string
//   desc: string
//   price: string
//   oldPrice: string
//   discount: number
//   inventory: number
//   salesCount: number
//   commentCount: number
//   collectCount: number
//   mainVideos: any[]
//   videoScale: number
//   mainPictures: string[]
//   isPreSale: boolean
//   isCollect?: any
//   recommends?: any
//   userAddresses?: any
//   evaluationInfo?: any
//   categories: {
//     id: string
//     name: string
//   }[]
// }
// 城市列表类型
export type AreaList = {
  code: string
  level: number
  name: string
  areaList: AreaList[]
}
export type Spec = {
  name: string
  values: {
    disabled?: boolean
    desc: string
    name: string
    picture: string
    selected: boolean
  }[]
}
// 商品模块的类型声明
export type GoodsInfo = {
  [x: string]: any
  id: string
  name: string
  spuCode: string
  desc: string
  price: string
  oldPrice: string
  discount: number
  inventory: number
  salesCount: number
  commentCount: number
  collectCount: number
  mainVideos: any[]
  videoScale: number
  mainPictures: string[]
  isPreSale: boolean
  isCollect?: any
  recommends?: any
  userAddresses?: any
  evaluationInfo?: any
  categories: {
    id: string
    name: string
  }[]
  specs: Spec[]
  skus: Sku[]
}

// 商品的规格的值的类型
export type SpecValue = {
[x: string]: any
  desc: string
  name: string
  picture: string
  selected: boolean
}

export type Sku = {
  id: string
  inventory: number
  oldPrice: string
  price: string
  skuCode: string
  specs: {
    name: string
    valueName: string
    disabled?: boolean
  }[]
}
