// pages/cart/cart.js
const app = getApp()
// cartImage: "//s11.mogucdn.com/mlcdn/c45406/180301_1cik8f3fj0gf2839ddch880422ffc_640x960.jpg",
// cartInfo: "【2件69元】【新品特惠】【赠送运费险 七天无理由退换货】【无忧售后】",
// cartPrice: "49.00",
// cartTitle: "【2件69元】【新品特惠】短袖t恤女2018夏装新款韩版学生宽松黑色体恤圆领纯棉半袖上衣服",
// count: 1,
// iid: "1lrzvr8"
Page({

  /**
   * 页面的初始数据
   */
  data: {
   titleName:'购物车',
    carts:[]
  },
  // -----------------------点击单个选中按钮处理函数------------------------------------------------
  checkedChange(event){
    // console.log(event.detail.checked)
    const index = event.currentTarget.dataset.index
    // app.globalCartData[index].isChecked = event.detail.checked
    app.globalCartData[index].isChecked = event.detail.checked
    this.setData({
      carts: app.globalCartData
    })
  },
  // -------------------点击全选按钮处理函数-------------
  allChecked(event){
    app.globalCartData.forEach(item=>{
      item.isChecked = !event.detail.check
    })
    this.setData({
      carts: app.globalCartData
    })
  },
  // -----点击增加件数----------------------
  addCount(event){
    const index = event.currentTarget.dataset.index
    app.globalCartData[index].count != 99 ? app.globalCartData[index].count++ : 99
    this.setData({
      carts: app.globalCartData
    })
  },
  //----------------点击减少件数------------------------
  subCount(event){
    const index = event.currentTarget.dataset.index
    app.globalCartData[index].count--
    app.globalCartData[index].count == 0 ? app.globalCartData.splice(index,1): 0
    this.setData({
      carts: app.globalCartData
    })
  },
 
  onShow: function () {
    // 切到购物车调用全局中的数据
    this.setData({
      carts:app.globalCartData 
    })
 // 更改tabbar的title
    wx.setNavigationBarTitle({
      title: this.data.titleName
    })
  }
})