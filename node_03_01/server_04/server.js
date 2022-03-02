//連接 DB 未模塊化
const express = require("express");
const app = express();

//掛載mongodb
const mongoose = require("mongoose");
//連接
mongoose.connect("mongodb://127.0.0.1:27017/testing", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//定義資料庫名稱
const Product = mongoose.model("Product", new mongoose.Schema({
    title:String
}))
//插入數據（一次插入多筆數據)
Product.insertMany([
    {id:"01", title: "admin_01"},
    {id:"02", title: "admin_02"},
    {id:"03", title: "admin_03"},
    {id:"04", title: "admin_04"}
])

//find 將所有資料查詢出來
app.get("/", async (req, res) => {
    res.send(await Product.find());
})

//limit 限制兩條數據
app.get("/limit", async (req, res) => {
    res.send(await Product.find().limit(2));
})

//skip 跳過幾條數據
app.get("/skip", async(req, res) => {
    res.send(await Product.find().skip(3).limit(3));
})

//where 條件搜尋: 參數為 object {}
app.get("/where", async (req, res) => {
    res.send(await Product.find().where({
        title:"admin_02"
    }))
})

//sort 排序 (-1 descend; 1 ascend) 參數為_id {}
app.get("/sort", async (req, res) =>{
    res.send(await Product.find().sort({_id:-1}));
})

//findById 透過商品 Id 找尋 參數為 req.params.id
app.get("/product/:id", async(req, res) => {
    res.send(await Product.findById(req.params.id));
})


app.listen(3000, ()=> {
    console.log("App is listening on 3000");
});