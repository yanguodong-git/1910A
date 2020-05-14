// 管理员信息表的 数据模型
// 骨架 --- 集合数据规则 {"name":"","password":""} 
let db=require("../db.js")
let adminsSchema=db.Schema({
    name:{type:String},
    password:{type:String}
})

// 数据模型
let adminsModel= db.model("admins",adminsSchema)

module.exports=adminsModel
