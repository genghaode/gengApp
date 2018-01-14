import Toast from 'react-native-root-toast'

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

// 提示
export const alert = (text)=> {
  Toast.show(text, {
    position: Toast.positions.CENTER,
    delay: 1,
  })
}