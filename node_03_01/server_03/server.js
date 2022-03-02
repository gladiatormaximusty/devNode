const express = require("express");
const app = express();

//router
require("./router/admin")(app);

app.listen(3000,() => {
    console.log("App is listening on 3000");
})