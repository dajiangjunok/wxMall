// pages/home/home.js
import {
  getHomeMultidata,
  getHomeGoods
} from '../../service/home.js'

const typeList = ['pop', 'new', 'sell']
const BACK_TOP = 1000
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    recommendList: [],
    // 选择tab
    tabbarList: ["流行", "新款", "推荐"],
    // tabbar下的数据
    goods: {
      'pop': {
        page: 0,
        list: []
      },
      'new': {
        page: 0,
        list: []
      },
      'sell': {
        page: 0,
        list: []
      }
    },
    currentType: 'pop',
    // 控制返回顶部按钮显示隐藏
    isShowBackTop: false,
    // tabbar 原始距离顶部的距离
    distanceTop: 0,
    // tabbar是否吸顶
    isTabBarFixed: false
  },

  // ---------------------------事件监听相关函数--------------------------------
  getTabbarInfo(event) {
    const index = event.detail.index
    this.setData({
      currentType: typeList[index]
    })
  },
  imgLoading() {
    const _this = this
    const query = wx.createSelectorQuery()
    query.select('#tabbar').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function(res) {
      _this.data.distanceTop = res[0].top
    })


  },

  // ---------------------------网络请求相关函数---------------------------------
  // 请求轮播图，推荐数据的  函数
  _getHomeMultidata() {
    getHomeMultidata().then(res => {
      const data = res.data.data
      // 1.拿到轮播图数据和推荐数据
      const swiperList = data.banner.list
      const recommendList = data.recommend.list
      // console.log(recommendList)
      this.setData({
        swiperList,
        recommendList
      })
    })
  },
  // 请求首页tab下的数据函数
  _getHomeGoods(type) {
    let page = this.data.goods[type].page + 1
    getHomeGoods(type, page).then(res => {
      // console.log(res.data.data)
      // 拿到返回的时候后应该是想办法把data中 goods中的list  添加上这里面的list，并且把page 加一
      const list = res.data.data.list
      const listKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      let oldList = this.data.goods[type].list
      oldList.push(...list)

      this.setData({
        [listKey]: oldList,
        [pageKey]: page
      })
    })
  },

  // ----------------------------------------页面操作的一些函数----------
  doBackTop(option) {
    let flag = option.scrollTop >= BACK_TOP ? true : false
    // 处理返回顶部
    if (flag !== this.data.isShowBackTop) {
      this.setData({
        isShowBackTop: flag
      })
    }
  },
  doFixed(option) {
    let tabbarFlag = option.scrollTop >= this.data.distanceTop
    // 是否吸顶
    if (tabbarFlag !== this.data.isTabBarFixed) {

      this.setData({
        isTabBarFixed: tabbarFlag
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //  1.请求轮播图，推荐的 数据
    this._getHomeMultidata()
    //  2.请求tabbar下的数据
    this._getHomeGoods('pop')
    this._getHomeGoods('new')
    this._getHomeGoods('sell')
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
  onPageScroll: function(option) {
    // 处理返回顶部
    this.doBackTop(option)
    // 处理tabbar 吸顶
    this.doFixed(option)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this._getHomeGoods(this.data.currentType)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }


})