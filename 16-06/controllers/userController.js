const userModel = require("../models/userModel");
const blogModel = require("../models/blogModel");
const mongoose = require("mongoose");

exports.signup = (req, res) => {
  let { firstName, lastName, email, password, dateOfBirth } = req.body;
  let user = new userModel({
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
  });
  user
    .save()
    .then(() => {
      return res.status(200).send(user);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send("ERROR!");
    });
};

exports.login = (req, res) => {
  let { email, password } = req.body;
  user
    .findOne({ email: email })
    .then((user) => {
      console.log(user);
      console.info(`user with email : ${email} was found successfully`);

      if (password === user.password) {
        console.info("login successful");
        return res.status(200).send(user);
      }
      console.warn("password incorrect");
      return res.status(401).send("password incorrect");
    })

    .catch((error) => {
      console.error(`user with ${email} does not exist`);
      return res.status(404).send(`user with ${email} does not exist`);
    });
};

exports.getUser = (req, res) => {
  let emailParam = req.params.email;
  user
    .findOne({ email: emailParam })
    .then((user) => {
      if (user) {
        console.info("User found");
        return res.status(200).send(user);
      }
      console.error("User was not found!");
      return res.status(404).send("NOT FOUND");
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send("ERROR");
    });
};

exports.postBlog = (req, res) => {
  let { heading, blog, userId } = req.body;
  let userBlog = new blogModel({
    heading,
    blog,
    userId,
  });
  userBlog
    .save()
    .then(() => {
      return res.status(200).send(blog);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send("Error");
    });
};

exports.getBlog = (req, res) => {
  let userIdParam = req.params.userId;
  userBlog
    .findOne({ userId: userIdParam })
    .then((blog) => {
      if (blog) {
        console.info("Blog found");
        return res.status(200).send(blog);
      }
      console.error("Blog was not found!");
      return res.status(404).send("NOT FOUND");
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send("ERROR");
    });
};
