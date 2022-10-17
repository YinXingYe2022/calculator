// pages/exercise/exercise.js
// 存放分数
var GetScore = [0, 100, 95, 90, 85, 80, 78, 76, 74, 72, 70, 68, 66, 64, 62, 60, 50, 40, 30, 20, 10];

Page({

  data: {
    gender:"",
    Height:"",
    Weight:"",
    LungInput:"",
    SitandreachInput:"",
    Jump:"",
    meter50:"",
    meterlong:"",
    situpandpullup:"",
    result:""
  },
  handleChange(e) {
    let gender = e.detail.value;
    this.setData({
      gender
    })
  },
  // 获取表单数据
  // formsubmit: function(data) {
  //   console.log(data.detail.value)
  //   this.setData({
  //     Height : data.detail.value.HeightInput,
  //     Weight : data.detail.value.WeightInput,
  //     LungInput : parseInt(data.detail.value.LungInput),
  //     SitandreachInput : parseFloat(data.detail.value.SitandreachInput),
  //     Jump : parseInt(data.detail.value.JumpInput),
  //     meter50 : parseFloat(data.detail.value.meterInput50),
  //     meterlong : parseInt(data.detail.value.longmeterInput),
  //     situpandpullup : parseInt(data.detail.value.situppullupInput)
  //   })
  // },
  // 计算BMI得分
  BmiScore: function(height,weight,gender){
    var get = 0, h = height/100.0;
    var bmi = parseFloat((weight/(h**2)).toFixed(1));
    if (gender == "male"){
      if (bmi >= 28.0) get = 60;
      else if(bmi >= 17.9 && bmi <= 23.9) get = 100;
      else get = 80;
    }
    else {
      if(bmi >= 28.0) get = 60;
      else if(bmi >= 17.2 && bmi <= 23.9) get = 100;
      else get = 80;
    }
    return get; 
  },
  //分数梯度判断
  NowScore: function(boys,girls,gender,orinput){
    var get = 0;
    var input = orinput*1.0;
    if (gender == "male") {
      if(input < boys[20]) get = 0;
      else if(input < boys[19]) get = GetScore[20];
      else if(input < boys[18]) get = GetScore[19];
      else if(input < boys[17]) get = GetScore[18];
      else if(input < boys[16]) get = GetScore[17];
      else if(input < boys[15]) get = GetScore[16];
      else if(input < boys[14]) get = GetScore[15];
      else if(input < boys[13]) get = GetScore[14];
      else if(input < boys[12]) get = GetScore[13];
      else if(input < boys[11]) get = GetScore[12];
      else if(input < boys[10]) get = GetScore[11];
      else if(input < boys[9]) get = GetScore[10];
      else if(input < boys[8]) get = GetScore[9];
      else if(input < boys[7]) get = GetScore[8];
      else if(input < boys[6]) get = GetScore[7];
      else if(input < boys[5]) get = GetScore[6];
      else if(input < boys[4]) get = GetScore[5];
      else if(input < boys[3]) get = GetScore[4];
      else if(input < boys[2]) get = GetScore[3];
      else if(input < boys[1]) get = GetScore[2];
      else get = GetScore[1];
      return get;
    }
    else{
      if(input < girls[20]) get = 0;
      else if(input < girls[19]) get = GetScore[20];
      else if(input < girls[18]) get = GetScore[19];
      else if(input < girls[17]) get = GetScore[18];
      else if(input < girls[16]) get = GetScore[17];
      else if(input < girls[15]) get = GetScore[16];
      else if(input < girls[14]) get = GetScore[15];
      else if(input < girls[13]) get = GetScore[14];
      else if(input < girls[12]) get = GetScore[13];
      else if(input < girls[11]) get = GetScore[12];
      else if(input < girls[10]) get = GetScore[11];
      else if(input < girls[9]) get = GetScore[10];
      else if(input < girls[8]) get = GetScore[9];
      else if(input < girls[7]) get = GetScore[8];
      else if(input < girls[6]) get = GetScore[7];
      else if(input < girls[5]) get = GetScore[6];
      else if(input < girls[4]) get = GetScore[5];
      else if(input < girls[3]) get = GetScore[4];
      else if(input < girls[2]) get = GetScore[3];
      else if(input < girls[1]) get = GetScore[2];
      else get = GetScore[1];
      return get;
    }
  },

  //计算肺活量得分
  LungScore: function(input,gender){
    var sco = 0.0;
    var boys = [0,5140,5020,4900,4650,4400,4280,4160,4040,3920,3800,3680,3560,3440,3320,3200,3030,2860,2690,2520,2350];
    var girls = [0,3450,3400,3350,3200,3050,2950,2850,2750,2650,2550,2450,2350,2250,2150,2050,2010,1970,1930,1890,1850];
    sco = this.NowScore(boys, girls, gender, input);
    return sco;
  },
  // 计算坐位体前屈得分
  SitAndReach: function(input,gender){
    var sco = 0.0;
    var boys = [0,25.1,23.3,21.5,19.9,18.2,16.8,15.4,14.0,12.6,11.2,9.8,8.4,7.0,5.6,4.2,3.2,2.2,1.2,0.2,-0.8];
    var girls = [0,26.3,24.4,22.4,21.0,19.5,18.2,16.9,15.6,14.3,13.0,11.7,10.4,9.1,7.8,6.5,5.7,4.9,4.1,3.3,2.5];
    sco = this.NowScore(boys, girls, gender, input);
    return sco;
  },
  // 计算立定跳远得分
  JumpScore: function(input,gender){
    var sco = 0.0;
    var boys = [0,275,270,265,258,250,246,242,238,234,230,226,222,218,214,210,205,200,195,190,185];
    var girls = [0,208,202,196,189,182,179,176,173,170,167,164,161,158,155,152,147,142,137,132,127];
    sco = this.NowScore(boys, girls, gender, input);
    return sco;
  },
  // 计算仰卧起坐/引体向上得分
  SitupAndPullupScore: function(input,gender){
    var sco = 0.0;
    var boys = [0,20,19,18,17,16,16,15,15,14,14,13,13,12,12,11,10,9,8,7,6];
    var girls = [0,57,55,53,50,47,45,43,41,39,37,35,33,31,29,27,25,23,21,19,17];
    sco = this.NowScore(boys, girls, gender, input);
    return sco;
  },
  // 计算50米跑得分
  ShortRunScore: function(input,gender){
    var boys = [0,6.6,6.7,6.8,6.9,7.0,7.2,7.4,7.6,7.8,8.0,8.2,8.4,8.6,8.8,9.0,9.2,9.4,9.6,9.8,10.0];
    var girls = [0,7.4,7.5,7.6,7.9,8.2,8.4,8.6,8.8,9.0,9.2,9.4,9.6,9.8,10.0,10.2,10.4,10.6,10.8,11.0,11.2];
    var getq = 0;
    if (input == 0) {
      return getq;
    } else {
      if(gender == "male") {
        for(var i = 1; i <= 20; i++)
          if(input <= boys[i] && input >= boys[i-1]) {
            getq = i;
            break;
          }
      } else {
        for(var i = 1; i <= 20; i++)
          if(input <= girls[i] && input >= girls[i-1]) {
            getq = i;
            break;
          }
      }
      return GetScore[getq];
    }
  },
  // 计算800米/1000米跑得分
  LongRunScore: function(input,gender){
    var boys = [0, 195, 200, 205, 212, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 290, 310, 330, 350, 370];
    var girls = [0, 196, 202, 208, 215, 222, 227, 232, 237, 242, 247, 252, 257, 262, 267, 272, 282, 292, 302, 312, 322];
    var getq = 0;
    if (input == 0) {
      return getq;
    } else {
      if(gender == "male") {
        for(var i = 1; i <= 20; i++)
          if(input <= boys[i] && input >= boys[i-1]) {
            getq = i;
            break;
          }
      } else {
        for(var i = 1; i <= 20; i++)
          if(input <= girls[i] && input >= girls[i-1]) {
            getq = i;
            break;
          }
      }
      return GetScore[getq];
    }
  },

  // 获取表单数据，计算体测总分
  formsubmit: function(data) {
    console.log(data.detail.value)
    this.setData({
      Height : data.detail.value.HeightInput,
      Weight : data.detail.value.WeightInput,
      LungInput : parseInt(data.detail.value.LungInput),
      SitandreachInput : parseFloat(data.detail.value.SitandreachInput),
      Jump : parseInt(data.detail.value.JumpInput),
      meter50 : parseFloat(data.detail.value.meterInput50),
      meterlong : parseInt(data.detail.value.longmeterInput),
      situpandpullup : parseInt(data.detail.value.situppullupInput)
    })
    
    var score = 0.15*this.BmiScore(this.data.Height,this.data.Weight,this.data.gender) + 0.15*this.LungScore(this.data.LungInput,this.data.gender) + 0.2*this.ShortRunScore(this.data.meter50,this.data.gender) + 0.1*this.SitAndReach(this.data.SitandreachInput,this.data.gender) + 0.1*this.JumpScore(this.data.Jump,this.data.gender) + 0.1*this.SitupAndPullupScore(this.data.situpandpullup,this.data.gender) + 0.2*this.LongRunScore(this.data.meterlong,this.data.gender);
    score = score.toFixed(2);
    this.setData({
      result: score
    });
    var that = this

    if (this.data.gender == "" || this.data.Height == "" || this.data.Weight == "" || isNaN(this.data.LungInput) || isNaN(this.data.SitandreachInput) || isNaN(this.data.Jump) || isNaN(this.data.meter50) || isNaN(this.data.meterlong) || isNaN(this.data.situpandpullup) ) {
      wx.showModal({
        title: '提示',
        content: '输入不能为空！'
      })
    } else {
      wx.navigateTo({
        url: '/pages/result/result?scoreData='+that.data.result
      })
    }
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
