// pages/diancan/diancan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopTitle: "小恐龙家常菜",
    notices: {
      events: {
        logoPath:[
          "./img/jian.svg"
        ],
        contents:[
          "25减2",
          "38减3"
        ]
      }, 
      notice: [
        "欢迎光临小恐龙美食铺，很高兴为您服务！",
        "测试通知1",
        "测试通知2"
      ]
    },
    isOpen: false,   // 定义通知栏是否打开

    // 菜品分类及内容
    vtabs: [
      {
        id:1,
        cate:"家常小炒",
        items:[
          {
            title:"酸辣土豆丝",
            img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E5%9C%9F%E8%B1%86%E4%B8%9D.jpg",
            description:"酸辣香甜，崔爽可口！！",
            price:999
          },
          {
            title:"红烧茄子",
            img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
            description:"酸辣香甜，崔爽可口！！",
            price:999
          },
          {
            title:"红烧茄子",
            img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
            description:"酸辣香甜，崔爽可口！！",
            price:999
          }

        ],
        active: false 
      },
      {
        id:2,
        cate:"主食担当",
        items:[
          {
            title:"蛋炒饭",
            img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E8%9B%8B%E7%82%92%E9%A5%AD.jpg",
            description:"粒粒分明，咸淡刚好",
            price:999
          },
          {
            title:"五常大米",
            img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
            description:"酸辣香甜，崔爽可口！！",
            price:999
          },
          {
            title:"番茄鸡蛋面",
            img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
            description:"酸辣香甜，崔爽可口！！",
            price:999
          }

        ],
        active: false
      },
      {
        id:3,
        cate:"零食甜点",
        items:[
          {
            title:"冰淇淋1",
            img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E8%9B%8B%E7%82%92%E9%A5%AD.jpg",
            description:"粒粒分明，咸淡刚好",
            price:999
          },
          {
            title:"冰淇淋2",
            img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
            description:"酸辣香甜，崔爽可口！！",
            price:999
          },
          {
            title:"冰淇淋3",
            img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
            description:"酸辣香甜，崔爽可口！！",
            price:999
          }

        ],
        active: false
      },
      {
        id:4,
        cate:"可口饮料",
        items:[
          {
            title:"雪碧",
            img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E8%9B%8B%E7%82%92%E9%A5%AD.jpg",
            description:"粒粒分明，咸淡刚好",
            price:999
          },
          {
            title:"凉茶",
            img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
            description:"酸辣香甜，崔爽可口！！",
            price:999
          },
          {
            title:"加多宝",
            img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
            description:"酸辣香甜，崔爽可口！！",
            price:999
          }

        ],
        active: false
      }
    ],


  },

  // 处理通知栏下拉
  toggleNotice(){
    this.setData({
      isOpen: !this.data.isOpen
    })

    if(!this.data.isOpen) {
      
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