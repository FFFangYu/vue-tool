const express = require('express')
const News = require('../models/newslist')
const router = express.Router()

const message = [
    {
        id:1,
        title:"1季度多家房企业利润跌幅超50%，去库存促销战打响",
        add_time:"2015-04-16T03:50:28.000Z",
        zhaiyao:"房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
        click:1,
        img_url:"https://avatars0.githubusercontent.com/u/46952655?s=60&u=87092af9a77c397d8d3e6ed1ac0377d42436643e&v=4"
    },
    {
        id:2,
        title:"1季度多家房企业利润跌幅超50%，去库存促销战打响",
        add_time:"2015-04-16T03:50:28.000Z",
        zhaiyao:"房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
        click:2,
        img_url:"https://avatars0.githubusercontent.com/u/46952655?s=60&u=87092af9a77c397d8d3e6ed1ac0377d42436643e&v=4"
    },
    {
        id:3,
        title:"1季度多家房企业利润跌幅超50%，去库存促销战打响",
        add_time:"2015-04-16T03:50:28.000Z",
        zhaiyao:"房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
        click:5,
        img_url:"https://avatars0.githubusercontent.com/u/46952655?s=60&u=87092af9a77c397d8d3e6ed1ac0377d42436643e&v=4"
    },
    {
        id:4,
        title:"1季度多家房企业利润跌幅超50%，去库存促销战打响",
        add_time:"2015-04-16T03:50:28.000Z",
        zhaiyao:"房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
        click:9,
        img_url:"https://avatars0.githubusercontent.com/u/46952655?s=60&u=87092af9a77c397d8d3e6ed1ac0377d42436643e&v=4"
    },
    {
        id:5,
        title:"1季度多家房企业利润跌幅超50%，去库存促销战打响",
        add_time:"2015-04-16T03:50:28.000Z",
        zhaiyao:"房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
        click:9,
        img_url:"https://avatars0.githubusercontent.com/u/46952655?s=60&u=87092af9a77c397d8d3e6ed1ac0377d42436643e&v=4"
    },
    {
        id:6,
        title:"1季度多家房企业利润跌幅超50%，去库存促销战打响",
        add_time:"2015-04-16T03:50:28.000Z",
        zhaiyao:"房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
        click:9,
        img_url:"https://avatars0.githubusercontent.com/u/46952655?s=60&u=87092af9a77c397d8d3e6ed1ac0377d42436643e&v=4"
    },
    {
        id:7,
        title:"1季度多家房企业利润跌幅超50%，去库存促销战打响",
        add_time:"2015-04-16T03:50:28.000Z",
        zhaiyao:"房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
        click:9,
        img_url:"https://avatars0.githubusercontent.com/u/46952655?s=60&u=87092af9a77c397d8d3e6ed1ac0377d42436643e&v=4"
    },
    {
        id:8,
        title:"1季度多家房企业利润跌幅超50%，去库存促销战打响",
        add_time:"2015-04-16T03:50:28.000Z",
        zhaiyao:"房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
        click:9,
        img_url:"https://avatars0.githubusercontent.com/u/46952655?s=60&u=87092af9a77c397d8d3e6ed1ac0377d42436643e&v=4"
    },
    {
        id:9,
        title:"1季度多家房企业利润跌幅超50%，去库存促销战打响",
        add_time:"2015-04-16T03:50:28.000Z",
        zhaiyao:"房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
        click:2,
        img_url:"https://avatars0.githubusercontent.com/u/46952655?s=60&u=87092af9a77c397d8d3e6ed1ac0377d42436643e&v=4"
    },
    {
        id:10,
        title:"1季度多家房企业利润跌幅超50%，去库存促销战打响",
        add_time:"2015-04-16T03:50:28.000Z",
        zhaiyao:"房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
        click:21,
        img_url:"https://avatars0.githubusercontent.com/u/46952655?s=60&u=87092af9a77c397d8d3e6ed1ac0377d42436643e&v=4"
    },
]
// router.get('/',(req,res)=>{
//     News.find({
//         _id:"5e76371e248f425c887861d5"
//     }).then((ret)=>console.log(ret))
// })

//保存新闻信息
// router.get('/save',(req,res)=>{
//     var news = new News({
//         title:"沪媒记者:若武磊确诊感染 李铁也是密切接触者之一",
//         add_time: Date.now(),
//         zhaiyao:`网易体育3月21日报道：

//         北京时间3月21日凌晨，西媒记者爆料称武磊确诊感染新冠肺炎，但目前武磊仍然没有做出回应。`,
//         click:5,
//         img_url:"https://09imgmini.eastday.com/mobile/20200321/20200321104218_688940cd8185e50051cfdb8e316103e9_1.png"
//     })
//     news.save().then(()=>console.log('save success'))
// })
//获取新闻列表
router.get('/api/getnewslist',(req,res)=>{
    News.find().then((ret)=>{
        res.status(200).json({
            status:0,
            message:ret
        })
    })  
})

//获取新闻  id  并且实现 click+1
router.get('/api/newsinfo/:id',(req,res)=>{
    News.find({_id:req.params.id}).then((ret)=>{
        ret[0].click++
        News.findOneAndUpdate({_id:req.params.id},{click:ret[0].click}).then(console.log('点击+1'))        
        res.status(200).json({
            status:0,
            message:ret[0]
        })
    })
})

module.exports = router