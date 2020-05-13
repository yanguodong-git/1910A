let express = require('express')

let app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/ceshipost', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})

// app.get("/ceshi",(req,res)=>{
//     console.log(req.query.a);

//     res.send({"name":"gao"})
// })

let mongoose=require("mongoose")

mongoose.connect("http://localhost:27017/1910A",{ useNewUrlParser: true })

app.listen(3000)