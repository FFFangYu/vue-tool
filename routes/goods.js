/* 路由模块 */
var express = require('express')
var Good = require('../models/good')
//创建路由容器
var router = express.Router()

//保存 商品信息
router.get('/good',(req,res)=>{
    let good = new Good({
        page:2,
        title:'小米 Redmi AirDots 真无线蓝牙耳机|分体式耳机 |收纳充电盒 |蓝牙5.0 |按键防触控操作 ',
        add_time:Date.now(),
        zhaiyao:'小米 Redmi AirDots 真无线蓝牙耳机|分体式耳机 |收纳充电盒 |蓝牙5.0 |按键防触控操作 ',
        click:1,
        img_url:'https://img14.360buyimg.com/n0/jfs/t1/64368/7/7408/47909/5d568d21E6b723373/8e95a672b3701f93.jpg',
        sell_price:192.9,
        market_price:199.9,
        stock_quantity:3000,
        good_no:'SD000001'
    })
    good.save().then(console.log('商品保存成功'))
})

//获取商品 列表   带参数 页码
router.get('/api/getgoods',(req,res)=>{
  let pageindex = req.query.pageindex
  Good.find({page:pageindex}).then(ret=>{
    res.status(200).json({
        status:0,
        message:ret
    })
  })
})

//带有商品id 获取商品信息
router.get('/api/goods/getinfo/:id',(req,res)=>{
  let id = req.params.id
  Good.findOne({_id:id}).then(ret=>{
    res.status(200).json({
      status:0,
      message:ret
    })
  })
})

//获取图文介绍
router.get('/api/goods/getdesc/:id',(req,res)=>{
  let id = req.params.id
  Good.findOne({_id:id}).then(ret=>{
    res.status(200).json({
      status:0,
      message:{
        title:ret.title,
        content:ret.zhaiyao
      }
    })
  })
})

//根据 ids 获取在购物车中的商品
router.get('/api/goods/getshopcarlist/:ids',(req,res)=>{
  let idArr = req.params.ids.split(',')
  let message = []

  Good.find({_id:idArr}).then(ret=>{
    ret.forEach(item=>{
      message.push({
        id:item._id,
        title:item.title,
        sell_price:item.sell_price,
        thumb_path:item.img_url
      })
    })

    res.status(200).json({
      status:0,
      message:message
    })
  })
})


//导出路由容器
module.exports = router