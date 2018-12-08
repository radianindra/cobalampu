
const express = require("express")
const app = express()

var statusLampu = 0 ; //variabelglobal
var statusLampu2 = 0

app.listen(3000,function(){
    console.log("server jalan")
})

app.get("/:lampu/:lampu2",function(req,res){
    statusLampu = req.params.lampu, //mengambil variabel dari url
    statuslampu2 = req.params.lampu2
    res.redirect("/") //untuk mengembalikan / pada url
})

app.get("/:mikro/:lampu2",function(req,res){
    statusLampu = req.params.lampu, //mengambil variabel dari url
    statuslampu2 = req.params.lampu2
    res.redirect("/") //untuk mengembalikan / pada url
})

app.get("/",function(req,res){
    res.send({
        lampu:statusLampu,
        lampu2:statusLampu2
    })
});