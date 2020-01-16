// pages/cart/childCpn/w-cartitem/w-cartitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cartitem:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 控制选中按钮选中与不选择
    checkedClick(event){
      const checked = event.currentTarget.dataset.checked
      this.triggerEvent('checkedChange', {checked: checked})
    },
    // 增加件数
    addCount(){
      this.triggerEvent('addCount')
    },
    // 减少件数
    subCount(){
      this.triggerEvent('subCount')
    },
    // 点击这个购物车中的商品返回商品的详情页
    itemClick(){
      const iid = this.properties.cartitem.iid 
      wx.navigateTo({
        url: `/pages/detail/detail?iid=${ iid }` 
      })
    }
  }
})
