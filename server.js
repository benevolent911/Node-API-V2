const express = require("express");
const mongoose = require("mongoose");
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog");
});

mongoose
  .connect(
    "mongodb+srv://admin:1qaz2wsx@cluster0api.szjncpp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0API"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Node API app is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
