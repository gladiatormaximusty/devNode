//DB模組化、router 模塊化
const express = require("express");
const app = express();

//掛載 router 模塊
require("./router/admin/index.js")(app);
//掛載 db
require("./plugin/db.js")(app)

app.listen(3000, () =>{
    console.log("App is listen on 3000");
})