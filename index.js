const express = require("express");
const cors = require("cors");
const ejs = require("ejs");

const PORT = process.env.PORT || 3030;
const app = express();

app.use(cors());
app.use("/static", express.static("static"));

ejs.renderFile("./views/main.ejs", function(err, str){
    if(err) process.exit();
    app.get("/", function(_, res){
        res.type("html").send(str);
    });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));