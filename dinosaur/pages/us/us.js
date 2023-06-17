// pages/us/us.js
var util = require("../../utils/utils.js")
var calendar = require("../../utils/calendar.js")

// 引入存储模块
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/commonValue'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    fontFamily: "selfFont",
    // 轮播图
    img: [
      {
        id:1,
        src: "https://th.bing.com/th/id/R.bd7031a50c40a37655b97646a0a0c038?rik=WlZ8wO7Fl7Ox2g&riu=http%3a%2f%2fpic.616pic.com%2fbg_w1180%2f00%2f00%2f32%2fiOZIMb32gr.jpg!%2ffw%2f1120&ehk=6t1Diz0luQ8BFFaMJxJzYRr4V8zfX4zPFq42ZEV6exw%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        id: 2,
        src: "https://th.bing.com/th/id/R.dc1996c93e7757b47ab541836be46160?rik=WM7ZBgx6GxYFxQ&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f40028%2f1173.jpg_wh860.jpg&ehk=jObmJuGpNTZ3mehzSo63MuLsFgIf2w91089neo6IskE%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        id: 3,
        src: "https://img95.699pic.com/photo/40079/0549.jpg_wh860.jpg"
      },
      {
        id: 4,
        src: "https://th.bing.com/th/id/R.5100155fc89a581ce3271ea6939beddc?rik=QndETUJkreBHpQ&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f40009%2f0321.jpg_wh1200.jpg&ehk=xtysEPH5Bh40p1sHNWng5GFErXWvUxLArVL6WC550Nw%3d&risl=&pid=ImgRaw&r=0"
      }
    ],
    nowTime: "",
    timeToZxcBirthday: "",
    timeToSqsBirthday: "",
    tiemToGraduate: "",
    timeSinceMeet: "",
    timeSinceLove: ""

  },

  // 获取当前时间
  _getTime: function(){
    // 获取当前时间
    let str = util.formatTime(new Date())[0]

    // 获取距离zxc生日的时间
    let time1 = this._timeCountDowm("2023/06/16 20:58:00")
    // 获取距离zxc毕业的时间
    let time2 = this._timeCountDowm(this.data.timeOfGraduate)
    
    
    // 获取距离第一次见面时间
    let time3 = this._timeCountUp(this.data.firstMeet)
    // 获取恋爱纪念日
    let time4 = this._timeCountUp(this.data.firstLove)

    //距离sqs生日
    let time5 = this._timeCountDowm(this._lunarToSolar(2023,7,25))

    this.setData({
      nowTime: str,
      timeToZxcBirthday: time1.month + "月" + time1.day + "日" + time1.hour + "时" + time1.minute + "分" + time1.second + "秒",
      tiemToGraduate: time2.year + "年" +  time2.month + "月" + time2.day + "日" + time2.hour + "时" + time2.minute + "分" + time2.second + "秒",
      timeSinceMeet: time3.year + "年" +  time3.month + "月" + time3.day + "日" + time3.hour + "时" + time3.minute + "分" + time3.second + "秒",
      timeSinceLove: time4.year + "年" +  time4.month + "月" + time4.day + "日" + time4.hour + "时" + time4.minute + "分" + time4.second + "秒",
      timeToSqsBirthday: time5.month + "月" + time5.day + "日" + time5.hour + "时" + time5.minute + "分" + time5.second + "秒"
    })
  },

  // 倒计时函数
  _timeCountDowm(timer,endTime,str){
    // 获取当前时间
    let nowTime = new Date(util.formatTime(new Date())[1])
    endTime = new Date(endTime)
    let leftTime = endTime.getTime() - nowTime.getTime()
    if (leftTime <= 0) {
    //   timer = timer
    //   clearInterval(timer)
    //   endTime.setFullYear(endTime.getFullYear() + 1)
    //   setTimeout(() => {
    //     _this._timeCountDowm(timer,endTime, str)
    //     console.log(timer,nowTime, endTime,leftTime, str)
    //   }, 2000)
      return str
    }
    let year, month, day, hour, minute, second
    // year = Math.floor(leftTime/(1000 * 60 * 60 * 24 * 365))
    // leftTime -= year * (1000 * 60 * 60 * 24 * 365)
    // month = Math.floor(leftTime/(1000 * 60 * 60 * 24 * 30))
    // leftTime -= month * (1000 * 60 * 60 * 24 * 30)
    day = Math.floor(leftTime / (1000 * 60 * 60 * 24))
    hour = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minute = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60))
    second = Math.floor((leftTime % (1000 * 60)) / 1000)
    return {
      leftTime: leftTime,
      day: day,
      hour: hour,
      minute: minute,
      second: second
    }


  },

  // 正计时函数
  _timeCountUp(startTime){
    // 获取当前时间
    let nowTime = +new Date(util.formatTime(new Date())[1])
    startTime = +new Date(startTime)
    let times = nowTime - startTime
    let year, month, day, hour, minute, second
    day = Math.floor(times % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24))
    hour = Math.floor(times % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    minute = Math.floor((times % (1000 * 60 * 60)) / (1000 * 60))
    second = Math.floor((times % (1000 * 60)) / 1000)
    year = Math.floor(times / (1000 * 60 * 60 * 24 * 365))
    return {
      year: year,
      day: day,
      hour: hour,
      minute: minute,
      second: second
    }

  },

  // 将农历生日转为公历生日
  _lunarToSolar(lunarYear, lunarMonth, lunarDay) {
    let solarTime =  calendar.calendarFormatter.lunar2solar(lunarYear, lunarMonth, lunarDay)
    let year =  util.formatNumber(solarTime.cYear) 
    let month = util.formatNumber(solarTime.cMonth)
    let day = util.formatNumber(solarTime.cDay)
    let strTime = year + "/" + month  + "/" + day + " " + "00:00:00"
    return strTime
  },

  // 加载字体函数
  _loadFontFace() {
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url(http://rw71c0zw2.hn-bkt.clouddn.com/AXi-NiHaoXingQiSi-2.ttf)',
      success(res) {
        console.log(res)
      },
      fail: function(res) {
        console.log(res)
      },
      complete: function(res) {
        console.log(res)
      }
    })
  },

  /**
   * 生日处理函数
   */
  // zxc生日
  _zxcBirthday(endTime){
    this.zxcTimer = null
    let _this = this 
    this.zxcTimer = setInterval(() => {
      // 获取距离zxc生日的时间
      let time1 = _this._timeCountDowm(_this.zxcTimer, endTime, "宝宝生日快乐，爱你呦~~~~~~")
      if (typeof time1 === "string" ){
        _this.setData({
          timeToZxcBirthday: time1
        })
        clearInterval(_this.zxcTimer)
        setTimeout(() => {
          endTime = new Date(endTime)
          endTime.setFullYear(endTime.getFullYear() + 1)
          _this._zxcBirthday(endTime)
        },24*60*60*1000)
      }else {
        _this.setData({
          timeToZxcBirthday: time1.day + "日" + time1.hour + "时" + time1.minute + "分" + time1.second + "秒"
        })
      }
    },1000)
  },
  // sqs生日
  _sqsBirthday(endTime){
    this.sqsTimer = null
    let _this = this 
    this.sqsTimer = setInterval(() => {
      //距离sqs生日
      let time5 = this._timeCountDowm(_this.sqsTimer,endTime,"ya~ ya~ ya~, 小恐龙又老了一岁")
      if (typeof time5 === "string" ){
        _this.setData({
          timeToSqsBirthday: time5
        })
        clearInterval(_this.sqsTimer)
        setTimeout(() => {
          endTime = new Date(endTime)
          endTime.setFullYear(endTime.getFullYear() + 1)
          _this._sqsBirthday(endTime)
        },24*60*60*1000)
      }else {
        _this.setData({
          timeToSqsBirthday: time5.day + "日" + time5.hour + "时" + time5.minute + "分" + time5.second + "秒"
        })
      }
    },1000)
  },



 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 加载store
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['firstMeet','firstLove','zxcBirthday','sqsBirthday','timeOfGraduate']
    })

    
    // 加载字体
    this._loadFontFace()
    


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  
  onReady() {
    // 生日计时器
    this._zxcBirthday("2023/06/24 00:00:00")
    this._sqsBirthday(this._lunarToSolar(2023,7,25))


    // 处理正定时项目
    this.graduateTimer = null
    let _this = this
    this.timer = setInterval(() => {
      // 获取当前时间
      let str = util.formatTime(new Date())[0]
      // 获取距离zxc毕业的时间     ********** 此处有bug（倒计时结束会负计时），暂不修复
      let time2 = this._timeCountDowm(_this.graduateTimer,this.data.timeOfGraduate)
      // 获取距离第一次见面时间
      let time3 = this._timeCountUp(this.data.firstMeet)
      // 获取恋爱纪念日
      let time4 = this._timeCountUp(this.data.firstLove)
      this.setData({
        nowTime: str,
        
        tiemToGraduate: time2.day + "日" + time2.hour + "时" + time2.minute + "分" + time2.second + "秒",
        timeSinceMeet: time3.year + "年" + time3.day + "日" + time3.hour + "时" + time3.minute + "分" + time3.second + "秒",
        timeSinceLove: time4.year + "年" +  time4.day + "日" + time4.hour + "时" + time4.minute + "分" + time4.second + "秒",
      })
    },1000)
    
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
    // 卸载store
    this.storeBindings.destroyStoreBindings()

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