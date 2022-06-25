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
