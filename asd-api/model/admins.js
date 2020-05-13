//管理员信息表的 数据类型
//骨架  ---  集合数据规则
let db=require("../db.js")
let adminSchema=db.Schema({
    name:{type:String},
    password:{type:String}
})

//数据模型                   //集合名 ， 规则名
let adminsMondel = db.model("admins",adminSchema)

module.exports=adminsMondel;