//缩略图的数据库
const mongoose = require('mongoose');
//连接
mongoose.connect('mongodb://localhost:27017/vue-first', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema;

var thumimagechema = new Schema({
    img_id:{
        type:String,
        required:true
    },
    src:{
        type:String,
        required:true
    },    
})

module.exports = mongoose.model('thumimage',thumimagechema)