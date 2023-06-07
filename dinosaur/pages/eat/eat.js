// pages/eat/eat.js
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 删除列表中指索引的元素
function delEleByIndex(arr, index) {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //"黄焖鸡米饭", "重庆鸡公煲", "张亮麻辣烫", "信部四食堂", "星湖园食堂", "外卖", "吃空气"
    dishName: ["黄焖鸡米饭", "重庆鸡公煲", "张亮麻辣烫", "信部四食堂", "星湖园食堂","KFC", "外卖", "空气"],
    result: "",
    isStart: false,
    welcome: "",
    finallDish: "",
    isOpen: [false,false],   // 控制菜单栏展开与否
    tempDishName: ""  // 获取输入框文字
  },
  getDish: function(){
    if(this.data.isStart){
      return
    }else {
      this.setData({
        isStart: true
      })
    }
    // 清空展示页
    this.setData({
      welcome: "",
      finallDish: ""
    })
    // 添加Loading状态
    wx.showLoading({
      title:"抽取中"
    })
    let newDish = shuffleArray(this.data.dishName)
    let index = 0
    let maxIndex = newDish.length-1
    let timer = setInterval(() =>{
      if(index == maxIndex){
        index = 0
      }else{
        index = index +1
      }
      this.setData({
        result: newDish[index]
      })
    }, 30)
    setTimeout(() =>{
      clearInterval(timer)
      this.setData({
        isStart: false
      })
      this.setData({
        welcome: "恭喜，这顿吃：",
        finallDish: this.data.result
      })
      // 隐藏Loading
      wx.hideLoading()
    }, 3000)
  },

  // 菜单栏开关
  menuToggler: function(e){
    let index = e.currentTarget.dataset.index
    let arr = this.data.isOpen
    if(arr[index]){
      arr[index] = !arr[index]
    }else{
      arr = arr.map((value, i) => (i === index ? value : false))
      arr[index] = !arr[index]
    }
    // console.log(arr)
    this.setData({
      isOpen: arr  // 切换展开状态
    })
    // console.log(arr)
  },

  // 菜品删除
  dishDelete: function(e){
    let index = e.currentTarget.dataset.index
    let newList = delEleByIndex(this.data.dishName,index)
    this.setData({
      dishName: newList
    })
    console.log(index, this.data.dishName)
  },
  // 添加菜品
  // 获取输入框值
  dishName: function(e){
    let value = e.detail.value
    this.setData({
      tempDishName: value
    })
  },
  // 添加菜品
  dishSubmit: function(){
    let name = this.data.tempDishName
    let list = this.data.dishName
    let value = list.concat(name)
    this.setData({
      dishName: value,
      tempDishName: ""
    })
    wx.showToast({
      title:"添加成功",
      icon:"success",
      duration: 2000
    })

  },

  // 重置输入框
  resetInput: function(){
      this.setData({
        tempDishName: ""
      })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    
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