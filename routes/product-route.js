const express = require("express");

const { createProduct } = require("../controllers/product-controller.js");
const { authenticate } = require("../middlewares/authenticate.js");

const productRoute = express.Router();

productRoute.route("/createProduct").post(authenticate, createProduct);

module.exports = productRoute;
