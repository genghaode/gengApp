const confs = {
  Home: {
    name: 'Home',
    get Comp() {
      return require('common/tabs/GTabView')
    },
    titleArr: ['首页', '商品管理', '我']
  },
  Order: {
    name: 'Order',
    get Comp() {
      return require('pages/order/GMyOrder')
    },
    titleArr: ['我的订单']
  }
}

confs.initial = confs.Home

export const PagesConfig = confs
