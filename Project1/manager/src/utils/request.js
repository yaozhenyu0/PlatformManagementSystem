import axios from 'axios'
import { getToken } from './user'

//create an axios instance
const service = axios.create({
  baseURL: 'http://127.0.0.1:7001/',
  //withCredentials:true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

//request interceptor
service.interceptors.request.use(
  config => {
    //判断是否有登录态
    if (getToken()) {
      // 让每个请求都携带authorization
      config.headers['Authorization'] = getToken()
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)

export default service