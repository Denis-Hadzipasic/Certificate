const Range = require("../models/range-model");
const asyncWrapper = require("../utils/asyncWrapper");
const { cloudinary } = require("../utils/cloudinaryConfig");
const ErrorResponse = require("../utils/ErrorResponse");

const createRange = asyncWrapper(async (req, res, next) => {
  let { rangeStart, rangeEnd, manufacturerRangeStart, manufacturerRangeEnd } = req.body;

  rangeStart = Number(rangeStart);
  rangeEnd = Number(rangeEnd);
  manufacturerRangeStart = Number(manufacturerRangeStart);
  manufacturerRangeEnd = Number(manufacturerRangeEnd);

  if (isNaN(rangeStart) || isNaN(rangeEnd) || isNaN(manufacturerRangeStart) || isNaN(manufacturerRangeEnd)) {
    throw new ErrorResponse("All range values must be valid numbers!", 400);
  }

  if (rangeEnd <= rangeStart) {
    throw new ErrorResponse("rangeEnd must be greater than rangeStart!", 400);
  }

  if (manufacturerRangeEnd <= manufacturerRangeStart) {
    throw new ErrorResponse("manufacturerRangeEnd must be greater than manufacturerRangeStart!", 400);
  }

  const findRange = await Range.findOne({ rangeStart });
  if (findRange) {
    throw new ErrorResponse("Range already exists!", 409);
  }

  const overlappingRange = await Range.findOne({
    $or: [
      { rangeStart: { $lte: rangeStart }, rangeEnd: { $gte: rangeStart } },
      { rangeStart: { $lte: rangeEnd }, rangeEnd: { $gte: rangeEnd } },
      { rangeStart: { $gte: rangeStart }, rangeEnd: { $lte: rangeEnd } },
    ],
  });

  if (overlappingRange) {
    throw new ErrorResponse("Range overlaps with an existing entry!", 409);
  }

  let certificateId = req.files?.internCertificate ? req.files.internCertificate[0].filename : "";
  let manufacturerCertificateId = req.files?.manufacturerCertificate ? req.files.manufacturerCertificate[0].filename : "";

  const newRange = await Range.create({
    rangeStart,
    rangeEnd,
    manufacturerRangeStart,
    manufacturerRangeEnd,
    internCertificate: certificateId,  // Store only the ID, not the URL
    manufacturerCertificate: manufacturerCertificateId,
  });

  res.status(201).json(newRange);
});

const getCertificateUrl = asyncWrapper(async (req, res, next) => {
  const { id, type } = req.params;

  // Ensure user is authenticated
  if (!req.user) {
    throw new ErrorResponse("Unauthorized access!", 403);
  }

  const range = await Range.findById(id);
  if (!range) {
    throw new ErrorResponse("Range not found!", 404);
  }

  let publicId = type === "intern" ? range.internCertificate : range.manufacturerCertificate;

  if (!publicId) {
    throw new ErrorResponse("Certificate not found!", 404);
  }

  // Generate signed URL without expiration
  const signedUrl = cloudinary.url(publicId, {
    resource_type: "raw",
    type: "authenticated",
    sign_url: true,
  });

  res.json({ url: signedUrl });
});



const editRange = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { rangeStart, rangeEnd, manufacturerRangeStart, manufacturerRangeEnd } =
    req.body;

  const findRange = await Range.findById(id);

  if (!findRange) {
    throw new ErrorResponse("Range not found!", 404);
  }

  const updatedRange = await Range.findByIdAndUpdate(
    id,
    {
      rangeStart,
      rangeEnd,
      manufacturerRangeStart,
      manufacturerRangeEnd,
    },
    { new: true }
  );

  res.status(201).json(updatedRange);
});

const deleteRange = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const findRange = await Range.findByIdAndDelete(id);

  if (!findRange) {
    throw new ErrorResponse("Range not found!", 404);
  }

  res.status(201).json({ message: "Success" });
});

const getRangeInfo = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const range = await Range.findById(id);

  if (!range) {
    throw new ErrorResponse("Range not found!", 404);
  }

  res.json(range);
});

const getAllRanges = asyncWrapper(async (req, res, next) => {
  const allRanges = await Range.find({});

  res.json(allRanges);
});

module.exports = {
  createRange,
  editRange,
  deleteRange,
  getRangeInfo,
  getAllRanges,
  getCertificateUrl
};
