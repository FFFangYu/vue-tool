//图片分类的数据库
const mongoose = require('mongoose');
//连接
mongoose.connect('mongodb://localhost:27017/vue-first', {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect('mongodb://182.92.75.19:27017/vue-first', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema;

var cateSchema = new Schema({
    title:{
        type:String,
        required:true
    },    
})
module.exports = mongoose.model('Cate',cateSchema)
