//DB module 模塊化
const express = require("express");
const { Schema } = require("mongoose");
const { default: mongoose } = require("mongoose");
const app = express();


//連接 DB Module （db.js 必須放在第一層資料夾層級）
require("./plugin/db")(app);


//----> 建立 model
//Data Schema
const schema = new mongoose.Schema({
    title:String
})

//建立 Product Model
const Product = mongoose.model("Product", schema)

//----> 假資料
//插入資料 insertMany
Product.insertMany([
    {title:"admin_01"},
    {title:"admin_02"},
    {title:"admin_03"},
    {title:"admin_04"},
])

app.get("/", async (req, res) => {
    res.send(await Product.find());
})


app.listen(3000, () => {
    console.log("App is listening on 3000");
})