// pages/category/childCpn/w-rightNav/w-rightNav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommendNav: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 记录当前活跃状态的 index 和 type
     
      currentIndex: 0,
      
     
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navClick(event) {
      const index = event.currentTarget.dataset.index
      let type = ''
      // 判断导航中哪个活跃  取得相应的type

      switch (index) {
        case 0:
          type = 'pop'
          break;
        case 1:
          type = 'new'
          break;
        case 2:
          type = 'sell'
          break;
      }
      this.setData({
        currentIndex: index
      })
      this.triggerEvent("navClick", { index: index, type: type})
    }
  }
})