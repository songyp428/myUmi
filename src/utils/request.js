import qs from 'qs'
import axios from 'axios'
import { message } from 'antd'
import router from 'umi/router'
import Cookie from 'tiny-cookie'

// 创建axios实例
const service = axios.create({
  timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  // 清除缓存问题

  let method = config.method
  let headers = config.headers

  if (method === 'post' && headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    //post请求，formdata格式提交代码
    config.transformRequest = [function(data){
      // console.log(qs.stringify(data))
      return qs.stringify(data)
    }]
  }

  config.headers['platform'] = 126
  config.headers['lang'] = 'zh'
  config.headers['Expires'] = '-1'
  config.headers['Cache-Control'] = 'no-cache,no-store,must-revalidate,max-age=-1,private'

  return config;
}, error => {
  // Do something with request error
  console.log(error) // for debug
  return Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    const code = response.data.code

    // console.log('response:', response)
    //code == 250, "用户没有登录",跳到登录页面
    if (code === 250) {
      router.push('/login')
      Cookie.remove('accesstoken')
      return message.error('未登录！')
    }

    return response.data
  },
  error => {
    // console.log('error:', error)
    if(error.message === 'Network Error'){
      message.error('网络正忙，请稍后重试')
    }else{
      message.error(error.message)
    }

    return Promise.reject(error)
  }
)

export default service

