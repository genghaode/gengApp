import qs from 'qs'
import {AsyncStorage} from 'react-native'
import { path_join, SERVICE_BASE, alert } from 'util'

// 工厂方法，高阶函数，传入请求方法和其他参数
function http_factory(method, options) {
  // 传入请求路径和参数
  return (url, params) => {
    // 拼接路径
    url = path_join(SERVICE_BASE, url)

    const options = {
      method,
      headers: {
        Accept: 'application/json'
      }
    }

    if (method === 'GET') {
      const query = qs.stringify(params)
      if (query) {
        url += `?${query}`
      }
    } else {
      options.headers = {
        ...options.header,
        'Content-Type': 'application/json'
      }
      options.body = JSON.stringify(params)
    }
    
    // 返回一个promise
    // 进行fetch请求
    return fetch(url, options).then(response => {
      // 返回json类型数据
      return response.json()
    }).catch(error => {
      // 出现请求错误时抛出异常，停止往下执行
      throw { errorMessage: '网络错误，请重试' }
    }).then(json => {
      if (json.errorMessage) {
        // 请求的结果有错误信息，抛出异常
        alert(json.errorMessage)
        throw json
      } else {
        // 正常返回数据
        return json.data
      }
    })
  }
}

// 导出4种请求方法
export const http_get = http_factory('GET')
export const http_post = http_factory('POST')
export const http_put = http_factory('PUT')
export const http_delete = http_factory('DELETE')