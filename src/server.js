const express = require("express");
const app = express();
const path = require("node:path");
const router = require("./router");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ urlencoded: true }));
app.use(express.static("public"));

app.use(router);

const PORT = 3000;
app.listen(PORT, () => console.log(`Porta: http://localhost:${PORT}/`));
