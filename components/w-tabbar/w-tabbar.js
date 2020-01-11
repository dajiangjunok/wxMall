// components/w-tabbar/w-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbarList:{
      type:Array,
      value:[]
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
    tabbarClick(event){
      const index = event.currentTarget.dataset.index
      // console.log(index)
      this.setData({
        currentIndex: index
      })
      // 点击后发送点击的 index  和  title
      const title = this.data.tabbarList[index]
      this.triggerEvent('tabbar-info', {title:title,index:index})
    }
  },
  attached(){
    // 组件实例进入页面节点树时候执行
    // console.log(this.currentTarget)
  }
})
