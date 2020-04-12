//评论的数据库
const mongoose = require('mongoose');
//连接
mongoose.connect('mongodb://localhost:27017/vue-first', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema;

//设置每页的评论数为10条
var commentSchema = new Schema({
    news_id:{
        type:String,
        required:true
    },
    add_time:{
        type:Number,
        required:true
    },
    user_name:{
        type:String,
        required:true
    },
    pageindex:{
        type:Number,
        default:0,
        required:true
    },
    content:{
        type:String,
        required:true
    },    
})

module.exports = mongoose.model('Comment',commentSchema)