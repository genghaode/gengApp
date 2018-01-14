import qs from 'qs'
import {AsyncStorage} from 'react-native'
import { path_join, SERVICE_BASE, alert } from 'util'

function http_factory(method, options) {
  return (url, params) => {
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
    
    return fetch(url, options).then(res => {

      return res.json()
    }).catch(err => {
      console.log(11111111)
      throw { code: 500, message: '网络错误，请重试' }
    }).then(json => {
      console.log(json)
      if (json.message) {
        alert(json.message)
      }
      console.log(json)
      if(json.code < 300 ){
        return json.data
      }else {
        throw json
      }
    })
  }
}

// 导出4种请求方法
export const http_get = http_factory('GET')
export const http_post = http_factory('POST')
export const http_put = http_factory('PUT')
export const http_delete = http_factory('DELETE')