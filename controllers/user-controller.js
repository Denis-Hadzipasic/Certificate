const User = require("../models/user-model.js");
const ErrorResponse = require("../utils/ErrorResponse.js");
const asyncWrapper = require("../utils/asyncWrapper.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = asyncWrapper(async (req, res, next) => {
  const { logInID, password } = req.body;

  const findOne = await User.findOne({ logInID });

  if (findOne) {
    throw new ErrorResponse("User allready exists!", 409);
  }

  const newUser = await User.create({
    logInID,
    password,
  });

  res.status(201).json({ logInID: newUser.logInID, id: newUser._id });
});

const login = asyncWrapper(async (req, res, next) => {
  const { logInID, password } = req.body;

  const user = await User.findOne({ logInID }).select("+password");

  if (!user) {
    throw new ErrorResponse("User not found!", 404);
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new ErrorResponse("Incorrect Password!", 401);
  }

  const payload = { id: user._id, logInID: user.logInID };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "480m",
  });

  res
    .cookie("access_token", token, { httpOnly: true, maxAge: 28800000 })
    .json(payload);
});

const getUserProfile = asyncWrapper(async (req, res, next) => {
  const { id } = req.user;

  const user = await User.findById(id);

  res.json(user);
});

const logout = asyncWrapper(async (req, res, next) => {
  res
    .cookie("access_token", "", { httpOnly: true, maxAge: 0 })
    .json({ success: true });
});

module.exports = {
  register,
  login,
  logout,
  getUserProfile,
};
