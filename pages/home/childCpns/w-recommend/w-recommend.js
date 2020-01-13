// pages/home/childCpns/w-recommend/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommendList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 记录图片时候有一张加载完毕，此时高度就撑起来了
    isOk:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imageLoading(){
       if(!this.data.isOk){
         this.data.isOk = true
         this.triggerEvent('image-onload')
       }
    }
  }
})
