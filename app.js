const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const lunbo = require('./routes/lunbo')
const news = require('./routes/news')
const comment = require('./routes/comments')
const photolist = require('./routes/photolist')
const goods = require('./routes/goods')

//创建服务器
const app = express()
const port = 5000

//开放静态服务
app.use('/public/',express.static(path.join(__dirname,'./public/')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))

//设置跨域请求
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", 'Express')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 配置，只要加入这个配置，在req请求对象上回多出一个属性：body
//可以直接通过req.body来获取表单POST请求体数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(lunbo)
app.use(news)
app.use(comment)
app.use(photolist)
app.use(goods)
app.get('/',(req,res)=>{
  res.send('ok')
})

//ip
//'192.168.124.7',
app.listen(port, () => console.log(`Example app listening on port ${port}!`))