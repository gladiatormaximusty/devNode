module.exports = app => {
    const express = require("express");
    const router = express.Router();

    //掛載  Product Model
    const Product = require("../../model/Product.js");
    //插入數據
    Product.insertMany([
        {title:"admin_01"},
        {title:"admin_02"},
        {title:"admin_03"},
        {title:"admin_04"},
    ])

    router.get("/products", async (req, res) => {
        res.send(await Product.find());
    })

    app.use("/",router);
}