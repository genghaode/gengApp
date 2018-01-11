# gengApp
## 技术架构
- react-native
- react-navigation
- redux
- react-redux
- redux-thunk
- redux-persist
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
## 逻辑
- 初始逻辑
    * 初始化store
    * 路由匹配
    * 经过页面容器层发起请求
    * 展示页面
- 请求逻辑
    * 判断是否需要传入token
    * 获取本地token，加入请求头
    * 根据返回结果判断
        + message字段为提示内容
        + code字段为状态码
        + data字段为返回的数据
    * 状态码说明
        + 200(获取成功)
        + 201(创建成功)
        + 204(更新成功)
        + 205(删除成功)
        + 400(参数错误)
        + 401(未授权，未登录)
        + 403(禁止访问)
        + 404(未找到内容)
        + 500(服务器错误)
- 登录逻辑
    * 成功时返回token
    * 存入store中
    * 返回到上一页面
- 退出逻辑
    * 删除store中的token
    * 跳转到登录页面
## 使用
```
# 下载
$ git clone https://github.com/genghaode/gengApp.git
# 进入目录，安装依赖
$ cd gengApp && yarn
# 运行ios
$ react-native run-ios
```
