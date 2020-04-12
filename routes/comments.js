const express = require('express')
const Comment = require('../models/comments')
const router = express.Router()

//发表评论信息
router.post('/api/postcomment/:id',(req,res)=>{
    //默认将信息插入在第一页  
    let comment = new Comment({
        news_id:req.params.id,
        add_time:Date.now(),
        user_name:'匿名用户',
        content:req.body.content,
        pageindex:1
    }) 
    comment.save().then((ret)=>console.log("save success"))
    res.status(200).json({
        status:0,
        message:"save success"
    })
})

//获取评论信息   api/getcomments/2?pageindex=1
//req.query.pageindex
//req.params.id
router.get('/api/getcomments/:id',(req,res)=>{
    let index = req.query.pageindex
    let id = req.params.id
    let message = []
    Comment.find().then((ret)=>{
        ret.forEach(element => {
            if(element.news_id == id&&element.pageindex == parseInt(index)){
                let obj = {
                    id:element._id,
                    user_name:element.user_name,
                    add_time:element.add_time,
                    content:element.content
                }
                message.push(obj)
            }
        });
        res.status(200).json({
            status:0,
            message:message
        })
    })   
})

module.exports = router