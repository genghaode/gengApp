# gengApp
## 目录结构
- app 
    * Entry.js 入口文件，redux配置
    * App.js 路由配置
    * api 网络请求
    * component 公共组件
    * container 包裹层组件
        + LoadingContainer.js 页面初始时容器
    * page 页面
        + Home.js 首页
        + Category.js 分类页面
        + Me.js 我的页面
        + Detail.js 详情 页面
    * redux 
    * store
    * util 工具库
        + def.js 常用变量
        + http.js 请求封装
        + helpers.js 工具方法
    * assets 素材资源
        + fonts 自定义图标字体
        + images 图片
## 使用
```
# 下载
$ git clone https://github.com/genghaode/gengApp.git
# 进入目录，安装依赖
$ cd gengApp && yarn
# 运行ios
$ react-native run-ios
```
