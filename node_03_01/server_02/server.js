const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send([
        {id:01, name: "admin_01", type: "on"},
        {id:02, name: "admin_02", type: "on"},
        {id:03, name: "admin_03", type: "off"},
        {id:04, name: "admin_04", type: "on"}
    ])
})

//靜態頁面託管
app.use(express.static("public"));


app.listen(3000, (req, res) => {
    console.log("App is listening on 3000");
})