import request from './request.js'

export function getDetailData(iid) {
  return request({
    url: '/detail',
    data: {
      iid
    }
  })

}
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods{
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title                  //标题
    this.newPrice = itemInfo.price               //现价带￥,可能是价格区间
    this.lowNowPrice = itemInfo.lowNowPrice      // 现价
    this.lowPrice = itemInfo.lowPrice            // 原价
    this.discountDesc = itemInfo.discountDesc    // 折数

    this.columns = columns                       // 存放包邮 "销量 5013", "收藏49人", "默认快递"
    this.services = services                     // 存放 退货补运费  "全国包邮" "7天无理由退货"  ‘72小时发货’
  } 
}

export class ShopInfo{
  constructor(shopInfo){
    this.shopLogo = shopInfo.shopLogo   //logo
    this.name = shopInfo.name           //店铺名
    this.cSells = shopInfo.cSells > 9999 ? (shopInfo.cSells/10000).toFixed(1) + '万' : shopInfo.cSells      //卖出多少
    this.cGoods = shopInfo.cGoods       //全部宝贝
    this.score = shopInfo.score         //店铺打分
  }
}