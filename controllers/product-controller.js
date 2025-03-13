const Product = require("../models/product-model");
const asyncWrapper = require("../utils/asyncWrapper");
const ErrorResponse = require("../utils/ErrorResponse");

const createProduct = asyncWrapper(async (req, res, next) => {
  const { internNumber, manufacturerNumber, manufacturer } = req.body;

  const findProduct = await Product.findOne({ internNumber });

  if (findProduct) {
    throw new ErrorResponse("Product already exists!", 409);
  }

  const newProduct = await Product.create({
    internNumber,
    manufacturerNumber,
    manufacturer,
  });

  res.status(201).json(newProduct);
});

module.exports = {
  createProduct,
};
