//1、载入模块
let db=require("mongoose")

//2、实现模块
db.connect("mongodb://localhost:27017/JDadmin",{ useUnifiedTopology: true ,useNewUrlParser: true },(err)=>{
  if(err){
    console.log("链接失败",err)
  }else{
    console.log("node 链接 mongodb 成功")
  }
})

//3、导出模块
module.exports=db;

//4、使用模块在 init.js 里调用  （谁使用模块，谁调用模块，具体如下：）
//  let db=require("./db.js")