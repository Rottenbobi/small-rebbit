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

export interface IhomeHot  {
    alt: string;
    id: string;
    picture: string;
    title: string;
}