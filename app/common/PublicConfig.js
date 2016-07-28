// 颜色
export const bgColor_Wrap = '#eee'
// 文本颜色
export const tColor66 = '#666'
export const tColorFF = '#fff'

// 导航条颜色
export const bgColor_NavBar = '#111'
// 状态栏样式要适应导航条配置的背景色
export const sbStyle = 'light-content'


// 文本大小
export const tSize12 = 12
// 文本标题
export const tSize14 = 14
// 小号文本
export const tSize10 = 10
// 大标题文本
export const tSize16 = 16

// 按钮大小，padding的大小
export const bSize = 10


// 间距
export const M10 = 10

import {Platform, Dimensions} from 'react-native'

// 系统类型
export const OS = Platform.OS

// 屏幕宽高
const {width, height} = Dimensions.get('window')
export const W = width
export const H = height
