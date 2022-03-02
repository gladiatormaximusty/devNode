module.exports = app =>{
    const express = require("express");
    //子路由
    const router = express.Router();
    //get
    router.get("/categories", async(req, res)=>{
        res.send([{
            user:"categories"
        }])
    })
    //中間件，當作子路由
    app.use("/",router);
}