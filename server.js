const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const app = express();

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog");
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
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
