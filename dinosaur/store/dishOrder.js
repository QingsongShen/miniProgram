import {observable, action} from "mobx-miniprogram"

export const store = observable ({
  // 定义菜单分类及菜品
  vtabs:[
    {
      id:1,
      cate:"家常小炒",
      items:[
        {
          title:"酸辣土豆丝",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E5%9C%9F%E8%B1%86%E4%B8%9D.jpg",
          description:"酸辣香甜，脆爽可口！！",
          price:999,
          select: 0
        },
        {
          title:"红烧茄子",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酥软香醇，色香俱佳！",
          price:999,
          select: 0
        },
        {
          title:"2红烧茄子",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        }

      ],
      active: false 
    },
    {
      id:2,
      cate:"主食担当",
      items:[
        {
          title:"火腿青豆炒饭",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E8%9B%8B%E7%82%92%E9%A5%AD.jpg",
          description:"粒粒分明，咸淡刚好",
          price:999,
          select: 0
        },
        {
          title:"五常大米",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        },
        {
          title:"番茄鸡蛋面",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
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
          price:999,
          select: 0
        },
        {
          title:"冰淇淋2",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        },
        {
          title:"冰淇淋3",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
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
          price:999,
          select: 0
        },
        {
          title:"凉茶",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        },
        {
          title:"加多宝",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        }

      ],
      active: false
    },
    {
      id:5,
      cate:"减脂轻食",
      items:[
        {
          title:"5酸辣土豆丝",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E5%9C%9F%E8%B1%86%E4%B8%9D.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        },
        {
          title:"5红烧茄子1",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        },
        {
          title:"5红烧茄子2",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        }

      ],
      active: false 
    },
    {
      id:6,
      cate:"佐食小菜",
      items:[
        {
          title:"",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E5%9C%9F%E8%B1%86%E4%B8%9D.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        },
        {
          title:"6红烧茄子1",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        },
        {
          title:"6红烧茄子2",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        }

      ],
      active: false 
    },
    {
      id:7,
      cate:"清香糕点",
      items:[
        {
          title:"7酸辣土豆丝",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E5%9C%9F%E8%B1%86%E4%B8%9D.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        },
        {
          title:"7红烧茄子1",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        },
        {
          title:"7红烧茄子2",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        }

      ],
      active: false 
    },
    {
      id:8,
      cate:"油炸快乐",
      items:[
        {
          title:"8酸辣土豆丝",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E5%9C%9F%E8%B1%86%E4%B8%9D.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        },
        {
          title:"8红烧茄子1",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        },
        {
          title:"8红烧茄子2",
          img:"http://rvo2ad1hx.hn-bkt.clouddn.com/dish/%E7%83%A7%E8%8C%84%E5%AD%90.jpg",
          description:"酸辣香甜，崔爽可口！！",
          price:999,
          select: 0
        }

      ],
      active: false 
    }
  ],

  // 定义用户选择的菜品
  dishSelect: [

  ],
  cart: {
    totalPrice: 0,
    totalQuantity: 0,
    items: [] // image, title, quantity, univalent
  },           // 定义购物车(id, image, title, price)

  updateTotalPrice : action(function(){

  }),
  updateCart: action(function(item, addition){
    let existingItem = this.cart.items.find((cartItem) => {
      return cartItem.title === item.title
    });

    if (addition) {
      if (existingItem) {
        existingItem.select = item.select;
      } else {
         this.cart.items.push({...item});
      }
      
  
      
    }else{
      if (existingItem.select >= 2){
        existingItem.select = item.select
      }else{
        this.cart.items = this.cart.items.filter((subject) => {
          return subject.title != item.title
        })
      }
    }

    // 处理总金额
    this.cart.totalPrice = this.cart.items.reduce((sum, item) => sum + (item.price * item.select), 0);
    // 处理总数量
    this.cart.totalQuantity = this.cart.items.reduce((sum, item) => sum + item.select, 0)
    
    this.cart = Object.assign({}, this.cart, {
      items: this.cart.items.map((item,index) => {
        return item
      })
    })
    

  }),

  addSelect: action(function(e){
    let tabIndex = e.currentTarget.dataset.tabindex
    let itemIndex = e.currentTarget.dataset.itemindex
    let newValue = this.vtabs[tabIndex].items[itemIndex].select + 1
    this.vtabs = this.vtabs.map((tab, i) => {
      if (i === tabIndex) {
        return {
          ...tab,
          items: tab.items.map((item, j) => {
            if (j === itemIndex) {
              return {
                ...item,
                select: newValue,
              };
            }
            return item;
          }),
        };
      }
      return tab;
    });
    // 处理购物车
    let selectItem = this.vtabs[tabIndex].items[itemIndex]
    this.updateCart(selectItem, true)
  }),

  substractSelect: action(function(e){
    let tabIndex = e.currentTarget.dataset.tabindex
    let itemIndex = e.currentTarget.dataset.itemindex
    let newValue = this.vtabs[tabIndex].items[itemIndex].select - 1
    if(newValue < 0) {
      newValue = 0
    }
    this.vtabs = this.vtabs.map((tab, i) => {
      if (i === tabIndex) {
        return {
          ...tab,
          items: tab.items.map((item, j) => {
            if (j === itemIndex) {
              return {
                ...item,
                select: newValue,
              };
            }
            return item;
          }),
        };
      }
      return tab;
    });
    // 处理购物车
    let selectItem = this.vtabs[tabIndex].items[itemIndex]
    this.updateCart(selectItem, false)
  })



})