const express = require("express");
const app = express();

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Hello World");
})

app.get("/about-us", (req, res) => {
    res.status(200).send("This is about us");
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (password === "123456789") {
        return res.status(200).send({
            email,
            password
        });
    } else {
        return res.status(401).send("Wrong Password");
    }

});

app.listen(8080, () => {
    console.log("My server has started on 8080");
});