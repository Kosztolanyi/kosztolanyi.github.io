"use strict";
const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`I am listening on ${PORT}`));
app.get("/", (req, res) => {
  res.sendFile("index.html", {root: __dirname});
});
app.use(express.static("assets"));