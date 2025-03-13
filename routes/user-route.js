const express = require("express");

const {
  register,
  login,
  getUserProfile,
  logout,
} = require("../controllers/user-controller.js");
const { authenticate } = require("../middlewares/authenticate.js");

const userRouter = express.Router();

userRouter.route("/register").post(register);
userRouter.route("/login").post(login);
userRouter.route("/logout").put(logout);
userRouter.route("/getUserProfile").get(authenticate, getUserProfile);

module.exports = userRouter;
