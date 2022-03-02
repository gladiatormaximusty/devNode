module.exports = app => {
    const express = require("express");
    const router = express.Router();
    //中間件(加上路由！！授權訪問)
    app.use("/static",express.static("public"));
}