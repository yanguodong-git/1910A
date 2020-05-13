let express = require('express')

let app = express()

//解决跨域问题   yarn add cors -S  下载插件
// let cors=require("cors");
// app.use(cors());


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const adminsModel=require("./model/admins.js")

//载入jwt
const jwt = require('jsonwebtoken');

//验证所有请求是否携带 token 除了 登录 验证token 的接口
//如果有 token 并且没有过期 -- 返回 调用接口的数据
//如果没有 token 或者 过期了，返回 {"error_code":400,"msg":"token已过期"}
app.use((req,res,next)=>{
  if(req.path == "/login" || req.path == "/checktoken"){
    next();
  }else{
    const token = req.headers.token; // headers测试token值是否正确
    console.log(token)

    let secretOrprivateKey = "gaogang";  //这是加密的key （密钥）

    jwt.verify(token,secretOrprivateKey,function(err){
      if(err){ // 时间失效的时候 / 伪造的token 会报错
        res.send({"error_code":400,"msg":"token已过期"});
      }else{
        next()
      }
    })
  }
})

//登录接口  --成功  生成token  返回
app.post("/login",(req,res)=>{
  let {name,password} = req.body
  // console.log("name:",name,"password:",password)
  adminsModel.findOne({"name":name,"password":password},(err,data)=>{
    if(err){
      res.send({"error_code":500,"msg":"服务器错误"})
    }else if(data){
      //console.log("正确")  //生成token

      //生成token
      let content={name:data._id};  //要生存token的主题信息
      let secretOrprivateKey="gaogang" //这是加密的key（密钥）
      let token = jwt.sign(content,secretOrprivateKey,{
        expiresIn: 30   //30秒过期
      })

      //如果成功之后 返回 用户id 用户名  token
      res.send({"error_code":200,"id":data._id,"name":data.name,"token":token})
    }else{
      console.log("账号或密码错误")
      res.send({"error_code":400,"msg":"账号密码错误"})
    }
  })
})

//验证token
app.get("/checktoken",(req,res)=>{
  const token = req.headers.token; // headers测试token值是否正确
  //console.log(token)

  let secretOrprivateKey = "gaogang";  //这是加密的key （密钥）

  jwt.verify(token,secretOrprivateKey,function(err){
    if(err){ // 时间失效的时候 / 伪造的token 会报错
      res.send({"error_code":400,"msg":"token已过期"});
    }else{
      res.send({"error_code":200})
    }
  })
})

//测试端口
app.get("/ceshi",(req,res)=>{
  res.send("aaaa")
})

//监听端口
app.listen(3000)












//测试  如需要可放到 app.listen(3000) 上方
// app.post('/ceshipost', function (req, res, next) {
//   console.log(req.body)
//   res.json(req.body)
// })

// app.get("/ceshi",(req,res)=>{
//     console.log(req.query.a);

//     res.send({"name":"gao"})
// })