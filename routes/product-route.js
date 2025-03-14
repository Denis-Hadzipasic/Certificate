const express = require("express");

const {
  createProduct,
  getAllProducts,
  editProduct,
  getProductInfo,
  deleteProduct,
  searchProduct,
} = require("../controllers/product-controller.js");
const { authenticate } = require("../middlewares/authenticate.js");

const productRoute = express.Router();

productRoute.route("/getAllProducts").get(authenticate, getAllProducts);
productRoute.route("/searchProduct").get(authenticate, searchProduct);
productRoute.route("/createProduct").post(authenticate, createProduct);
productRoute.route("/editProduct/:id").put(authenticate, editProduct);
productRoute.route("/deleteProduct/:id").delete(authenticate, deleteProduct);
productRoute.route("/getProductInfo/:id").get(authenticate, getProductInfo);

module.exports = productRoute;
