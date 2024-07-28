require("dotenv").config()

const express = require("express");
const cors = require("cors");
const expressWs = require("express-ws");
const fs = require("fs");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();
const PORT = process.env.PORT || 3030;
const app = express();

fs.watch("./views/", { recursive: true }, () => eventEmitter.emit("change"));
fs.watch("./static/", { recursive: true }, () => eventEmitter.emit("change"));

eventEmitter.setMaxListeners(0);

app.set("view engine", "ejs");
app.use(cors());
app.use("/static", express.static("static"));
expressWs(app);

app.get("/", (_, res) => res.render("main", { dev: true }));

app.ws("/", function (ws) {
	eventEmitter.on("change", function(){
        ws.send("reload");
	});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));