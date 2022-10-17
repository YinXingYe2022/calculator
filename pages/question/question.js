// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  res:0,
  runResult: 0,
  ropeResult: 0,
  swimResult:0,
  gymResult:0,
  pragradeNum: 0, // 体育成绩
  testgradeNum: 0, // 体测成绩
  hideview: true,
  hideview1:true
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  }, 
  detail0: function (e) {
    wx.showModal({
      content: '体育成绩=0.7*体测分数+刷锻分数',
    })
  },
  detail: function (e) {
    wx.showModal({
      content: '刷锻总分：30分； \n'+'跑步公里数：20公里基本数+1公里0.5分； \n '+'跳绳个数：（5分钟内400个记为一次）20次基本数+1次0.5分； \n'+'游泳次数：10次基本数+1次1分； \n'+'健身房次数：10次基本数+1次1分',
    })
  },
  pragrade(e){
    this.setData({
      pragradeNum:e.detail.value
      })
    },
  testgrade(e){
    this.setData({
      testgradeNum:e.detail.value
      })
    },
  // 计算主体
  calculate: function (e) {
    var temp= this.data.pragradeNum-this.data.testgradeNum*0.7;
    if(Math.floor(temp)==temp){
      temp=Math.floor(temp)
    }
    else{
      temp=Math.floor(temp)+1
    }
    var run=temp*2+20;
    var rope=temp*2+20;
    var swim=temp+10;
    var gym=temp+10;
    var that=this;    
    if(temp>30 || temp<0){
      that.setData({
        hideview:true,
        hideview1:false,
        res:temp,
        runResult: 0,
        ropeResult:0,
        swimResult:0,
        gymResult:0
      })
    }
    else{
    that.setData({
      hideview:false,
      hideview1:true,
      res:temp,
      runResult: run,
      ropeResult:rope,
      swimResult:swim,
      gymResult:gym
    })
    }
  },
  showResult: function (e) {
    this.setData({
      hideview: false,
      hideview1:false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})