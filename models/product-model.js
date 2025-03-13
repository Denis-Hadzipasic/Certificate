const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  internNumber: { type: Number, required: true, unique: true },
  manufacturerNumber: { type: Number, required: true, unique: true },
  manufacturer: { type: String, required: true},
  info: { type: String},
});
const Product = model("Product", productSchema);

module.exports = Product;
