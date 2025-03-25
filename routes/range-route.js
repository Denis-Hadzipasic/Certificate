const express = require("express");

const { authenticate } = require("../middlewares/authenticate.js");
const {
  getAllRanges,
  createRange,
  editRange,
  deleteRange,
  getRangeInfo,
  getCertificateUrl,
} = require("../controllers/range-controller.js");
const { upload } = require("../utils/cloudinaryConfig.js");

const rangeRoute = express.Router();

rangeRoute.route("/getAllRanges").get(authenticate, getAllRanges);
rangeRoute.route("/createRange").post(
  authenticate,
  upload.fields([
    { name: "internCertificate", maxCount: 1 },
    { name: "manufacturerCertificate", maxCount: 1 },
  ]),
  createRange
);
rangeRoute.route("/editRange/:id").put(authenticate, editRange);
rangeRoute.route("/deleteRange/:id").delete(authenticate, deleteRange);
rangeRoute.route("/getRangeInfo/:id").get(authenticate, getRangeInfo);
rangeRoute.route("/getCertificateUrl/:id/:type").get(authenticate, getCertificateUrl);


module.exports = rangeRoute;
