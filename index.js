const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3030;
const app = express();

app.set("view engine", "ejs");
app.use(cors());
app.use("/static", express.static("static"));

app.get("/", (_, res) => res.render("main"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));