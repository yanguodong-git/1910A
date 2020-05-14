// node 操作 mongodb --  mongoose(模块)
// 创建一个集合，创建 默认的管理员 账号密码

// 1、链接mongodb
let db=require("./db.js")

let adminsModel=require("./model/admins.js")
// 通过 数据模型 对 集合 进行 增删 改 查
adminsModel.find({},(err,data)=>{
    if(err){
        console.log(err)
    }else if(data.length == 0){
        adminsModel.create({"name":"gao","password":"123456"},(err)=>{
            if(!err){
                console.log("默认账号密码设置成功");
            }else{
                console.log("默认账号密码设置失败") ;
            }
        })
    }else{
        console.log("默认账号已存在")
    }
})