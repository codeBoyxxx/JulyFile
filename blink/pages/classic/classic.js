// 在这里使用import 引入的时候，是不能使用绝对路径的，必须使用相对路径，而引入组件的时候可以使用绝对路径
// import {HTTP} from '/utils/http.js'
import {ClassicModel} from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'
let classicModel = new ClassicModel()
let likeModel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    first:false,
    latest:true
  },
  // 监听自定义事件，接受传递过来的like组件的状态
  onLike:function(event){
    var behavior = event.detail.behavior;
    likeModel.like(behavior, this.data.classicData.id,this.data.classicData.type)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var latest = classicModel.getLatest((res)=>{
      console.log(res)
      this.setData({
        classicData:res
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})