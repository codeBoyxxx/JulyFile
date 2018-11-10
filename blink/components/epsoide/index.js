// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  // 不要将properties里面的属性与data里面的属性设置为同一个，会覆盖掉
  properties: {
    index:{
      type:Number,
      observer:function(newVal,oldVal,changedPath){
        // observer 函数可以监听到属性数据的变化，获取到它的值，不要在observer的函数里面去修改他的属性的值，这样会引起无线递归的情况
        let val = newVal<10?'0'+newVal:newVal
        this.setData({
          _index:val
        })

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月',       '十一月','十二月'
    ],
    year:0,
    month:'',
    _index:''

  },
  ready:function(){
    var date = new Date();
    var year = date.getFullYear()
    var month = date.getMonth()
    this.setData({
      year:year,
      month:this.data.months[month]
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
