//新闻的数据库
const mongoose = require('mongoose');
//连接
mongoose.connect('mongodb://localhost:27017/vue-first', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema;

var newsSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    add_time:{
        type:Number,
        required:true
    },
    zhaiyao:{
        type:String,
        required:true
    },
    click:{
        type:Number,
        default:0,
        required:true
    },
    img_url:{
        type:String,
        required:true
    },    
})

module.exports = mongoose.model('Newslist',newsSchema)