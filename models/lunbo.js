//轮播图的数据库
const mongoose = require('mongoose');
//连接
mongoose.connect('mongodb://localhost:27017/vue-first', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema;

var lunboSchema = new Schema({
    good_id:{
        type:String,
        required:true
    },
    src:{
        type:String,
        required:true
    },    
})

module.exports = mongoose.model('Lunbo',lunboSchema)