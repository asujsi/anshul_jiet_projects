const express = require("express");
const router = express();
const userController = require("../controllers/userController");

router.post("/user/signup", userController.signup);
router.post("/user/login", userController.login);
router.get("/user/getUser", userController.getUser);
router.post("/user/postBlog", userController.postBlog);
router.get("/user/getPost", userController.getBlog);

module.exports = router;
