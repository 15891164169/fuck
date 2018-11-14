// import store from '@/store/index.js'
import axios from 'axios'
import qs from 'qs'

const service = axios.create({
  baseURL: 'http://www.liulongbin.top:3005/api/',
  timeout: 4000
})

// ************request拦截器 ===> 处理请求参数

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做某事
  // store.dispatch('myStatus', '正在发送')
  // 若为post请求 参数放在data里
  // 若为get请求 参数放在params里
  config.methods === 'post' ? (config.data = qs.stringify({...config.data})) : (config.params = { ...config.params })
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  // console.log(config)
  return config
}, error => { // 请求错误处理
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(response => {
  // 在拿到响应数据之后做某事

  // 根据后端提供的数据进行对应处理
  if (response.data.status === 0) {
    // store.dispatch('myStatus', '111')
    return response.data.message
  } else { // 常规错误处理
    return response.data.message
  }
}, error => { // 响应错误处理
  // let text = JSON.parse(JSON.stringify(error)).response.status === 404
  //   ? '404'
  //   : '网络异常，请重试'
  return Promise.reject(error)
})

export default service
