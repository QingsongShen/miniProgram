import {observable, action} from "mobx-miniprogram"

export const store = observable {
  // 数据字段
  dishName: [
    {
      id: 1,
      
    }
  ]
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
  ]
}