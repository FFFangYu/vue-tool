//商品的数据库
const mongoose = require('mongoose');
//连接
mongoose.connect('mongodb://localhost:27017/vue-first', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema;

var goodSchema = new Schema({
    page:{
        type:Number,
        required:true,
        default:1
    },
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
        required:true
    }, 
    img_url:{
        type:String,
        required:true
    },
    sell_price:{
        type:Number,
        required:true
    },
    market_price:{
        type:Number,
        required:true
    },
    stock_quantity:{
        type:Number,
        required:true
    },
    good_no:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Good',goodSchema)