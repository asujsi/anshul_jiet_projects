const express = require("express");
const app = express();
const userRoutes = require("./routers/userRoutes");
const adminRoutes = require("./routers/adminRoutes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/blog_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDb connected successfully");
  })
  .catch(() => {
    console.log("MongoDB connection failed");
  });

app.use(userRoutes);
app.use(adminRoutes);

app.listen(6000, () => console.log("Server Started at http://localhost:6000/"));
