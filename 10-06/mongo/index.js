const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/jiet_database", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        console.info("MongoDb connected successfully");
    })
    .catch(() => {
        console.error("MongoDB connection failed");
    })

app.post("/signup", (req, res) => {
    let {
        firstName,
        lastName,
        email,
        password
    } = req.body;
    let user = new User({
        firstName,
        lastName,
        email,
        password
    });
    user
        .save()
        .then(() => res.status(200).send(user))
        .catch((error) => {
            console.log(error);
            return res.status(500).send("ERROR");
        });
});

const PORT = 6000;

app.listen(PORT, () => {
    console.log(`My server is running on port: ${PORT}`);
});