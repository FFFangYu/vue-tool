const express = require('express')
const Cate = require('../models/cate')
const Photo = require('../models/photo')
const PhotoInfo = require('../models/photoinfo')
const Thum = require('../models/thumimage')
const router = express.Router()

//保存 图片分类的数据
router.get('/category',(req,res)=>{
    var cate = new Cate({
        title:'动漫科技'
    })
    cate.save().then(()=>console.log('save success'))
})


//获取图片列表页面上面的分类信息
router.get('/api/getimgcategory',(req,res)=>{
    Cate.find().then((ret)=>{
        res.status(200).json({
            status:0,
            message:ret
        })
    })
})


//保存 图片的数据
router.get('/photo',(req,res)=>{
    var photo = new Photo({
        title:'千纸鹤啊',
        img_url:'../../images/share/p5.jpg',
        cate_id:'5e7f3b3e4da41322fc89f580',
        zhaiyao:'有气质且带可爱的美女组图'
    })
    photo.save().then(()=>console.log('save success'))
})

router.get('/api/getimages/:cateid',(req,res)=>{
    let cateid = req.params.cateid
    if(cateid == 0){
        Photo.find().then((ret)=>{
            res.status(200).json({
                status:0,
                message:ret
            })
        })
    }else{
        Photo.find({
            cate_id:cateid
        }).then((ret)=>{
            res.status(200).json({
                status:0,
                message:ret
            })
        })
    }
    
})

//保存 图片详情 的数据
router.get('/photoinfo',(req,res)=>{
    let photoinfo = new PhotoInfo({
        img_id:'5e7f7ceb97363f793cd3a5bd',
        title:'测试55555',
        add_time:Date.now(),
        click:0,
        content:'有气质且带可爱的美女组图,有气质且带可爱的美女组图,有气质且带可爱的美女组图,有气质且带可爱的美女组图,有气质且带可爱的美女组图,有气质且带可爱的美女组图'
    })
    photoinfo.save().then(()=>console.log('save success'))
})

//根据 id 获取图片详情 数据并更新点击数
router.get('/api/getimageInfo/:id',(req,res)=>{
    let id = req.params.id
    PhotoInfo.find({
        img_id:id
    }).then((ret)=>{
        ret[0].click++
        //console.log('---'+click)
        PhotoInfo.findOneAndUpdate({img_id:id},{click:ret[0].click}).then(ret=>{
            console.log('update success')
        })
        res.status(200).json({
            status:0,
            message:ret[0]
        })
    })
})

//保存 缩略图的数据
router.get('/thumimages',(req,res)=>{
    let thum = new Thum({
        img_id:'5e7f7ceb97363f793cd3a5bd',
        src:'../../images/share/p5.jpg'
    })
    thum.save().then(console.log('save success'))
})

//根据 图片id 获取缩略图
router.get('/api/getthum/:id',(req,res)=>{
    //res.send(req.params.id)
    let id = req.params.id   
    Thum.find({img_id:id}).then((ret)=>{
        //res.send(ret)
        // console.log(ret)
        res.status(200).json({
            status:0,
            message:ret
        })
    })
})

//导出路由容器
module.exports = router