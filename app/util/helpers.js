import Toast from '@remobile/react-native-toast'

// 货币格式化，添加货币分隔符
export const format_currency = (value) => {
  value = parseFloat(value).toFixed(2).toString()
  const [i, f] = value.split('.')
  return i
    .split('')
    .reverse()
    .map((x, i) => (i + 1) % 3 === 0 ? ',' + x : x)
    .reverse()
    .join('') + '.' + f
}

// url路径拼接
export const path_join = (...paths)=>{
  return paths.map(x => {
    return x.replace(/(^\/|\/$)/g, '')
  }).join('/')
}

// 没有登录时提示登录并跳转到登录页面
export const login_check = async (json, navigator, route) => {
  if(json.code === 201){
    Toast.show('请登录')
    await get_token(true)
    setTimeout(()=> {
      navigator.push({...Routes.Login, from: route})
    })
    return false
  }
  return true
}

// 提示
export const alert = (text)=> {
  setTimeout(()=> {
    Toast.show(text)
  }, 1)
}