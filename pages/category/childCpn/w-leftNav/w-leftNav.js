// pages/category/childCpn/w-leftNav/w-leftNav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    category:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navClick(event){
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('subCategoryIndex',{index:index})
    }
  } 
})
