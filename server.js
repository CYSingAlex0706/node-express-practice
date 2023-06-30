const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();
const mongoose = require("mongoose")

const indexRoute = require("./routes/index.js")
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressEjsLayouts)
app.use(express.static("public"))

app.use("/", indexRoute)

app.listen(process.env.PORT || 3000)