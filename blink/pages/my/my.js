// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorize:false,
    userInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.userAuthorized()
    // wx.getUserInfo() 可以获取到用户的信息，但是需要用户的授权才行
    // wx.getUserInfo({
    //   success:data=>{
    //     console.log(data)
    //   }
    // })
  },
  userAuthorized(){
    wx.getSetting({
      success:data=>{
        if (data.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success:data=>{
              this.setData({
                authorized:true,
                userInfo:data.userInfo
              })
              console.log(data)
            }
          })
        }
      }
    })
  },
  getUserInfo(event){
    // console.log(event)
  },
  onGetUserInfo(event){
    const userInfo = event.detail.userInfo
    this.setData({
      userInfo,
      authorized: true
    })
  }
  
   
})