import axios from 'axios'

// 备用接口地址: http://pcapi-xiaotuxian-front-devtest.itheima.net/
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front.itheima.net/',
  // baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/',

  timeout: 5000,
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config: any) {
    // 在发送请求之前做些什么
    return config
  },
  function (error: any) {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response: any) {
    return response
  },
  function (error: any) {
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export default instance
