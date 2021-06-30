const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/UserRoutes");
const cors = require("cors");

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/jiet_database", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.info("MongoDb connected successfully");
  })
  .catch(() => {
    console.error("MongoDB connection failed");
  });

app.use(userRoute);

const PORT = 6000;

app.listen(PORT, () => {
  console.log(`My server is running on port: ${PORT}`);
});
