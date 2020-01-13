// pages/detail/detail.js

import {
  // 导入网络请求
  getDetailData,
  // 导入今日推荐请求函数
  getRecommend,

  // 导入数据归类的类
  Goods,
  // 导入店铺数据归类的类
  ShopInfo
 
} from '../../service/detail.js'
// 导入解析事件戳的函数
import getTime from '../../utils/getTime.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    // 宝贝详情信息
    goods: null,
    // 店铺详情信息
    shopInfo:null,
    // 商品详情  图/文
    detailInfo:null,
    // 宝贝参数的展示
    goodsParams:null,
    // 用户评价
    userComments:null,
    // 今日推荐
    recommends:[],
    // 返回顶部按钮
    isShowBackTop:false
  },


  // ----------------------------------------------网络请求相关函数--------------------------------------------------
  // 请求详情页的数据 1m745k0
  _getDetailData(iid) {
    getDetailData(iid).then(res => {
      // 拿到详情页的数据
      // console.log(res.data.result)
      // 1.轮播图展示
      this.setData({
        swiperList: res.data.result.itemInfo.topImages
      })
      // 2. goods详情的展示
      this._getGoodsInfo(res)
      // 3.店铺详情展示
      this._getShopInfo(res)
      // 4.详情信息展示  图、文
      this._getDetailInfo(res) 
      // 5.宝贝参数的展示
      this._getGoodsParams(res)
      // 6.用户评论
      this._getUserComments(res)
      // 7.获取今日推荐数据
      this._getRecommend()
    })
  },
  // 请求今日推荐数据
  _getRecommend(){
    getRecommend().then(res=>{
      const recommends = res.data.data.list 
      recommends.forEach(item=>{
        const show = {}
        show.img = item.image
        item.show = show
      })
     this.setData({
       recommends
     })
    })
  },

  // -----------------------------------网络请求相关函数 _getDetailData 抽取出来的函数----------------------------------
  // goods详情的展示
  _getGoodsInfo(res) {
    const itemInfo = res.data.result.itemInfo
    const columns = res.data.result.columns
    const services = res.data.result.shopInfo.services
    const goods = new Goods(itemInfo, columns, services)
    this.setData({
      goods
    })
  },
  // 店铺详情展示
  _getShopInfo(res) {
    const info = res.data.result.shopInfo
    const shopInfo = new ShopInfo(info)
    // console.log(shopInfo)
    this.setData({
      shopInfo
    })
  },
  // 详情信息，图文
  _getDetailInfo(res) {
    const detailInfo = res.data.result.detailInfo
    this.setData({
      detailInfo
    })
  },
  // 宝贝参数展示
  _getGoodsParams(res){
    const goodsParams = res.data.result.itemParams
    this.setData({
      goodsParams
    })
  },
  _getUserComments(res){
    const userComments = res.data.result.rate
    userComments.list.forEach(item=>{
      item.created = getTime(item.created * 1000)
    })
    this.setData({
      userComments
    })
  },
  // ----------------------------------------------------------------------
  doBackTop(option) {
    let flag = option.scrollTop >= 1000 ? true : false
    // 处理返回顶部
    if (flag !== this.data.isShowBackTop) {
      this.setData({
        isShowBackTop: flag
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this._getDetailData(options.iid)
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
  onPageScroll: function (option) {
    // 处理返回顶部
    this.doBackTop(option)
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