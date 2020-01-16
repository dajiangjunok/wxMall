// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userContent: [{
      count: 0,
      unit: '元',
      title: "我的余额"
    }, {
      count: 0,
      unit: '个',
      title: "我的优惠券"
    }, {
      count: 0,
      unit: '分',
      title: "我的积分"
    }]
  },
  // ---------------------事件监听函数--------------------------

  cartClick(){
// 点击回到购物车
    wx.switchTab({
      url: "/pages/cart/cart"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // const _this = this
    // wx.getUserInfo({
    //   success: res => {
    //     const avatarUrl = res.userInfo.avatarUrl
    //     const city = res.userInfo.city
    //     const nickName = res.userInfo.nickName
    //     const userInfo = { avatarUrl, city, nickName}
    //     _this.setData({
    //       userInfo
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '我的'
    })
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})