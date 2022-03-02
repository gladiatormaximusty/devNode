//掛載 mongoose
const mongoose = require("mongoose");
//建立 schema
const schema = new mongoose.Schema({
    title:String
})
//建立 model
const Product = mongoose.model("Product", schema);
//導出
module.exports = Product;