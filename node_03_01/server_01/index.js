const express = require("express");
const app = express();

//掛載模塊
require("./router/admin/index")(app);

//get
app.get('/', (req, res) => {
    res.send([{
        user:"admin"
    }])
})

//listening
app.listen(3000,()=>{
    console.log("App listening on port 3000");
})