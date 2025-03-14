const Product = require("../models/product-model");
const asyncWrapper = require("../utils/asyncWrapper");
const ErrorResponse = require("../utils/ErrorResponse");

const createProduct = asyncWrapper(async (req, res, next) => {
  const { internNumber, manufacturerNumber, manufacturer, info } = req.body;

  const findProduct = await Product.findOne({ internNumber });

  if (findProduct) {
    throw new ErrorResponse("Product already exists!", 409);
  }

  const newProduct = await Product.create({
    internNumber,
    manufacturerNumber,
    manufacturer,
    info,
  });

  res.status(201).json(newProduct);
});

const editProduct = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { internNumber, manufacturerNumber, manufacturer, info } = req.body;

  const findProduct = await Product.findById(id);

  if (!findProduct) {
    throw new ErrorResponse("Product not found!", 404);
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    {
      internNumber,
      manufacturerNumber,
      manufacturer,
      info,
    },
    { new: true }
  );

  res.status(201).json(updatedProduct);
});

const deleteProduct = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const findProduct = await Product.findByIdAndDelete(id);

  if (!findProduct) {
    throw new ErrorResponse("Product not found!", 404);
  }

  res.status(201).json({ message: "Success" });
});

const getProductInfo = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    throw new ErrorResponse("Product not found!", 404);
  }

  res.json(product);
});

const getAllProducts = asyncWrapper(async (req, res, next) => {
  const allProducts = await Product.find({});

  res.json(allProducts);
});

const searchProduct = asyncWrapper(async (req, res, next) => {
  const { internNumber, manufacturerNumber } = req.query;

  const searchCriteria = {};
  if (internNumber) {
    searchCriteria.internNumber = internNumber;
  }
  if (manufacturerNumber) {
    searchCriteria.manufacturerNumber = manufacturerNumber;
  }

  const products = await Product.find(searchCriteria);

  if (products.length === 0) {
    return res
      .status(404)
      .json({ message: "No products found matching the criteria" });
  }

  return res.status(200).json(products);
});

module.exports = {
  createProduct,
  editProduct,
  deleteProduct,
  getProductInfo,
  getAllProducts,
  searchProduct,
};
