// components/w-backtop/w-backtop.js
Component({
  /**
   * 组件的方法列表
   */
  externalClasses:[
    'backtopposition'
  ],
  methods: {
    backTop(){
      wx.pageScrollTo({
        scrollTop: 0,
      })
    }
  }
})
