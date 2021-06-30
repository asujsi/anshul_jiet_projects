const express = require("express");
const app = express();
const axios = require("axios");

app.get("/pokemon", (req, res) => {
  axios
    .get("https://pokeapi.co/api/v2/ability/7/")
    .then((response) => {
      console.log(response.data);
      return res.status(200).send(response.data);
    })
    .catch((error) => {
      return res.status(500).send("error");
    });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`My server is working on port ${PORT}`);
});
