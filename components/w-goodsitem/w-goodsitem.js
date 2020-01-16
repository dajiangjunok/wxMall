// components/w-goodsitem/w-goodsitem.js
Component({
  externalClasses: [
    'minisize',
    'c-icon'
  ],
  /**
   * 组件的属性列表
   */
  properties: {
    goodsitemlist: {
      type: Object,
      value: {}
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
    click() {
      console.log(this.properties.goodsitemlist)
    }
  }
})