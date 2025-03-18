const { Schema, model } = require("mongoose");

const rangeSchema = new Schema({
  rangeStart: { type: Number, required: true, unique: true },
  rangeEnd: { type: Number, required: true, unique: true },
  manufacturerRangeStart: { type: Number, required: true, unique: true },
  manufacturerRangeEnd: { type: Number, required: true, unique: true },
  internCertificate: { type: String },
  manufacturerCertificate: { type: String }
});
const Range = model("Range", rangeSchema);

module.exports = Range;
