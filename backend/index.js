const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();

app.get("/api", (request, response) => {
  fs.readFile("./data/models.json", "utf-8", (err, data) => {
    if (err) {
      console.log("error on reading");
    } else {
      response.send(JSON.parse(data));
    }
  });
});
app.listen(3000);
