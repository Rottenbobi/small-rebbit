export interface Ilist{ 
id: number;
name: string;
children: IList[]
}

export interface IAxios<T> {
    code:string
    msg:string
    result:T
}