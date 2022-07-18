const fs = require("fs");
const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.static("public"));

app.get("/api", (request, response) => {
  console.log(process.env.PORT);
  fs.readFile("./models/models.json", "utf-8", (err, data) => {
    if (err) {
      console.log("error on reading");
    } else {
      response.send(JSON.parse(data));
    }
  });
});
app.listen(3000);
