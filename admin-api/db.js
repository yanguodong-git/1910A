
let db=require("mongoose")

db.connect("mongodb://localhost:27017/jdamdin",{ useUnifiedTopology: true ,useNewUrlParser: true },(err)=>{
  if(err){
    console.log("node 链接 mongodb 失败",err)
  }else{
    // console.log("node 链接 mongodb 成功")
  }
} )


module.exports=db;