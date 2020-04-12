//图片的数据库
const mongoose = require('mongoose');
//连接
mongoose.connect('mongodb://localhost:27017/vue-first', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema;

var photoSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    img_url:{
        type:String,
        required:true
    },  
    zhaiyao:{
        type:String,
        required:true
    },
    cate_id:{
        type:String,
        required:true
    },  
})

module.exports = mongoose.model('Photo',photoSchema)