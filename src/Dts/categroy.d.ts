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
id:string
name:string
picture: string
saleInfo: string
children: IhomeProductChild[]
goods:IGoods[]
}

export interface IhomeProductChild {
  id: string
  layer: number
  name: string
  parent:null
}