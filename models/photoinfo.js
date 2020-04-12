//图片的数据库
const mongoose = require('mongoose');
//连接
mongoose.connect('mongodb://localhost:27017/vue-first', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema;

var photoinfoSchema = new Schema({
    img_id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    add_time:{
        type:Number,
        required:true
    },  
    click:{
        type:Number,
        default:0,
        required:true
    },
    content:{
        type:String,
        required:true
    },  
})

module.exports = mongoose.model('Photoinfo',photoinfoSchema)