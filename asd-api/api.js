let express = require('express')

let app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.post('/ceshipost', function (req, res, next) {
//   console.log(req.body)
//   res.json(req.body)
// })

// app.get("/ceshi",(req,res)=>{
//     console.log(req.query.a);

//     res.send({"name":"gao"})
// })

let mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/JDadmin",{ useUnifiedTopology: true ,useNewUrlParser: true },(err)=>{
  if(err){
    console.log("链接失败",err)
  }else{
    console.log("node 链接 mongodb 成功")
  }
})

app.listen(3000)