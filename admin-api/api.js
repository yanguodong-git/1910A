let express = require('express')

let  app = express()
//解决跨域
// let cors=require("cors");
// app.use(cors());
//

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const adminsModel=require("./model/admins.js")
// 载入 jwt 
const jwt = require('jsonwebtoken');

// 验证所有请求是否携带 token 除了 登陆 验证token 的接口 。
// 如果 有 token 并没有过期 --返回 调用接口的数据
// 如果 没有 或过期了，--- 返回 { 'error_code': 400 ,"msg":"token过期"}
app.use((req,res,next)=>{
  // console.log(req.path)
  if(req.path == "/login" || req.path == "/checktoken"){
    next()
  }else{
    const token=req.headers.token; //在 headers中获取token
 
    let secretOrPrivateKey = "gaogang"; // 这是加密的key（密钥） 
  
    jwt.verify(token, secretOrPrivateKey, function (err) {
        if (err) {  //  时间失效的时候/ 伪造的token          
            res.send({ 'error_code': 400 ,"msg":"token过期999"});
        } else {
            next()
        }
    })
  }
})
// 登陆接口 -- 成功 生成token 返回
app.post("/login",(req,res)=>{
  let {name,password} = req.body
  console.log("name",name,"password",password)
  adminsModel.findOne({"name":name,"password":password},(err,data)=>{
      if(err){
        res.send({"error_code":500,"msg":"服务器错误"})
      }else if(data){
        // console.log("正确"); // 生成 token

         //生成token
         let content = { name: data._id }; // 要生成token的主题信息
         let secretOrPrivateKey = "gaogang" // 这是加密的key（密钥） 
         let token = jwt.sign(content, secretOrPrivateKey, {
             expiresIn: 3000   // 3000秒
         });
         // 成之后 返回 用户id 用户名，token
        res.send({"error_code":200,"id":data._id,"name":data.name,"token":token})
      }else{
        console.log("账号或密码错误")
        res.send({"error_code":400,"msg":"账号密码错误"})
      }
  })

})

// 验证token 
app.get("/checktoken",(req,res)=>{
  const token=req.headers.token; //在 headers中获取token
 
  let secretOrPrivateKey = "gaogang"; // 这是加密的key（密钥） 

  jwt.verify(token, secretOrPrivateKey, function (err) {
      if (err) {  //  时间失效的时候/ 伪造的token          
          res.send({ 'error_code': 400 ,"msg":"token过期"});
      } else {
          res.send({ 'error_code': 200 });
      }
  })
})

// 获取所有管理员信息
app.get("/adminslist",(req,res)=>{
  // 查找数据库 ，返回 所有管理员信息
  adminsModel.find({},(err,data)=>{
    if(!err){
      res.send({"error_code":200,"list":data})
    }else{
      res.send({"error_code":500,"msg":"服务器错误"})
    }
  })
})

// 测试代码
app.get("/ceshi",(req,res)=>{
  res.send("aaaa")
})



app.listen(3000);