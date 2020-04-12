//轮播图的路由
/* 路由模块 */
var express = require('express')
var Lunbo = require('../models/lunbo')
//创建路由容器
var router = express.Router()

//保存轮播图
router.get('/lunbo',(req,res)=>{
    var imgPic = new Lunbo({
        good_id:'5e80e9ca48540a87781ab225',
        src:'https://img14.360buyimg.com/n5/s54x54_jfs/t1/91327/16/10516/123557/5e1c3092E1f8beb7f/28bb6c779bf712d4.jpg'
    })
    imgPic.save().then(()=>console.log('保存轮播图 success'))
    res.send(imgPic)
})

//获取首页的轮播图
router.get('/api/getLunbo',(req,res)=>{

    Lunbo.find({good_id:"home",}).then((ret)=>{
        console.log('获取轮播图成功')
        res.status(200).json({
            status:0,
            message:ret
        })
    })   
})

//根据id获取 轮播图
router.get('/api/getthumimages/:id',(req,res)=>{
    let id = req.params.id
    Lunbo.find({good_id:id,}).then((ret)=>{
        console.log(ret)
        console.log('根据id获取 轮播图成功')
        res.status(200).json({
            status:0,
            message:ret
        })
    })
})

//导出路由容器
module.exports = router