// pages/detail/childCpn/w-settleBar/w-settleBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    getCart(){
      wx.showToast({
        title: '成功加入购物车',
        success:()=>{
          this.triggerEvent('getCart')
        }
      })
    }
  }
})
