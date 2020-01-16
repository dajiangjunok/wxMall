// pages/cart/childCpn/w-settleBar/w-settleBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    carts:{
      type:Array,
      value:[]
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
    allCheckedClick(){
      // 此时判断购物车中的商品是否全部不选中，如果全部不选中，则传个的false给 cart组件，其他情况传个true
      const checked = this.properties.carts.some(item=>{
        return item.isChecked
      })
      this.triggerEvent('allChecked', {check: checked})
    }
  }
})
