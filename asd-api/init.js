//node 操作 mongodb --
//创建一个集合，创建 默认的管理员 账号密码

//链接mongodb （导入 db.js 模块）
let db=require("./db.js")

//链接admins.js
let adminsMondel=require("./model/admins.js")

//通过 数据模型 对集合 进行 增删改查
adminsMondel.find({},(err,data)=>{
    if(err){
        console.log(err)
    }else if(data.length == 0){
        adminsMondel.create({"name":"闫国栋","password":"123456"},(err)=>{
            if(!err){
                console.log("默认账号密码设置成功");
            }else{
                console.log("默认账号密码设置失败");
            }
        })
    }else{
        console.log("默认账号已存在",data)
    }
})