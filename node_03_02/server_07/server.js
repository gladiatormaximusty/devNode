const express = require("express");
const app = express();
//express JSON
app.use(express.json());

//----> 連接 MongoDB
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/test"
mongoose.connect(url);


//----> 建立 DB Model
const schema = new mongoose.Schema({
    title:String
})

const Product = mongoose.model("Product", schema);

//post data (新增)
app.post("/product", async (req, res) => {
    const data  = req.body;
    const product = await Product.create(data)
    res.send(product);
})

//get data （列舉）
app.get("/products", async (req, res) => {
    res.send(await Product.find());
})

//delete data (刪除)
app.delete("/products/:id", async (req, res) => {
    const data = await Product.findById(req.params.id);
    await data.remove();
    res.send({
        sucess:true
    })
})

//put data (修改)
app.put("/products/:id", async (req, res) => {
    const data = await Product.findById(req.params.id);
    data.title = req.body.title;
    await data.save();
    res.send(data);
})


app.listen(3000, () => {
    console.log("App is listening on 3000");
})