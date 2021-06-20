const adminModel = require("../models/adminModel");

exports.signup = (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  let admin = new adminModel({
    firstName,
    lastName,
    email,
    password,
  });
  admin
    .save()
    .then(() => {
      return res.status(200).send(admin);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send("Error");
    });
};

exports.login = (req, res) => {
  let { email, password } = req.body;
  admin
    .findOne({ email: email })
    .then((admin) => {
      console.log(admin);
      console.info(`user with email : ${email} was found successfully`);

      if (password === admin.password) {
        console.info("login successful");
        return res.status(200).send(admin);
      }
      console.warn("password incorrect");
      return res.status(401).send("password incorrect");
    })

    .catch((error) => {
      console.error(`user with ${email} does not exist`);
      return res.status(404).send(`user with ${email} does not exist`);
    });
};
