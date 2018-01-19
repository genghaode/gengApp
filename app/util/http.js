import qs from 'qs'
import { CancelablePromise } from 'util/CancelablePromise'
import { path_join, SERVICE_BASE, alert } from 'util'

function http_factory(method, auth) {
  return async (url, params) => {
    url = path_join(SERVICE_BASE, url)

    const options = {
      method,
      headers: {
        Accept: 'application/json'
      }
    }

    if(auth){
      options.headers.Authorization = ''
    }

    if (method === 'GET') {
      const query = qs.stringify(params)
      if (query) {
        url += `?${query}`
      }
    } else {
      options.headers = {
        ...options.headers,
        'Content-Type': 'application/json'
      }
      options.body = JSON.stringify(params)
    }
    console.log(url, options)
    return new CancelablePromise((resolve, reject) => {
      fetch(url, options).then(res => {
        return res.json()
      }).catch(err => {
        reject({ code: 500, message: '网络错误，请重试' })
      }).then(json => {
        if (json.message) {
          alert(json.message)
        }
        if(json.code>= 200 && json.code < 300 ){
          resolve(json.data)
        } else {
          if(json.code == 401){
            store.dispatch({ type: 'Logout' })
          }
          reject(json)
        }
      })
    })
  }
}

// 导出4种请求方法
export const http_get = http_factory('GET', true)
export const http_post = http_factory('POST', true)
export const http_put = http_factory('PUT', true)
export const http_delete = http_factory('DELETE', true)

// 无token请求
export const http_get_noauth = http_factory('GET', false)
export const http_post_noauth = http_factory('POST', false)
export const http_put_noauth = http_factory('PUT', false)
export const http_delete_noauth = http_factory('DELETE', false)