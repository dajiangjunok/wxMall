// pages/category/categors.js
// 导入分类的网络请求
import {
  getCategoryDetail,
  getSubCategoryDetail,
  getSubRecommentd
} from '../../service/categorys.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    titleName: '分类',
    category: {},
    subCategory: {},
    recommendNav: ["综合", "新品", "销量"],
    recommendList: [],
    // 记录左侧导航目前所指向的miniWallkey
    miniWallkey: 0,
    current: {
      index: 0,
      type: 'pop'
    }
  },
  // --------------------获取分类子页面的数据-------------------
  getSubCategory(event) {
    const index = typeof event === "undefined" ? 0 : event.detail.index
    const miniWallkey = this.data.category.list[index].miniWallkey
    const maitKey = this.data.category.list[index].maitKey
    const type = this.data.current.type
    // 同步miniWallkey
    this.setData({
      miniWallkey
    })

    // 当有了 maitKey 和 index 就可以请求右侧信息栏的内容了
    this._getSubCategoryDetail(maitKey)

    // 当有了miniWallkey，index, type 就可以请求推荐数据内容了
    this._getSubRecommentd(miniWallkey, type)

  },

  // ------------------------------网络请求相关函数--------------------------
  // 请求右侧的内容栏目
  _getSubCategoryDetail(maitKey) {
    getSubCategoryDetail(maitKey).then(res => {
      this.setData({
        subCategory: res.data.data
      })
    })
  },
  // 请求右侧的推荐栏目
  _getSubRecommentd(miniWallkey, type) {
    getSubRecommentd(miniWallkey, type).then(res => {
      const recommendList = res.data
      this.setData({
        recommendList
      })
    })
  },

  // ------------------------------------事件触发函数---------------------------
  navClick(event) {
    // 此时是点击了右边下面的导航部分
    const index = event.detail.index
    const type = event.detail.type
    const miniWallkey = this.data.miniWallkey
    this.setData({
      current: {
        index,
        type
      }
    })
    this._getSubRecommentd(miniWallkey, type)
  },
  //---------------- 点击推荐数据-------------------------
  recommendClick(event) {
    const index = event.currentTarget.dataset.index
    const iid = this.data.recommendList[index].iid
    // console.log(iid)
    // 进行详情页跳转
    wx.navigateTo({
      url: `/pages/detail/detail?iid=${iid}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const _this = this
    getCategoryDetail().then(res => {
      const category = res.data.data.category
      _this.setData({
        category
      })
      // 只有当拿到了category后才有maitKey因此需要在这个回调中执行函数
      this.getSubCategory()
    })
    // 更改tabbar的title
    wx.setNavigationBarTitle({
      title:this.data.titleName
    })
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
    wx.setba
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