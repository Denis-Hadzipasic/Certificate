const Range = require("../models/range-model");
const asyncWrapper = require("../utils/asyncWrapper");
const ErrorResponse = require("../utils/ErrorResponse");

const createRange = asyncWrapper(async (req, res, next) => {
  let { rangeStart, rangeEnd, manufacturerRangeStart, manufacturerRangeEnd } =
    req.body;

  rangeStart = Number(rangeStart);
  rangeEnd = Number(rangeEnd);
  manufacturerRangeStart = Number(manufacturerRangeStart);
  manufacturerRangeEnd = Number(manufacturerRangeEnd);

  console.log(
    "Converted Values:",
    rangeStart,
    rangeEnd,
    manufacturerRangeStart,
    manufacturerRangeEnd
  );

  if (
    isNaN(rangeStart) ||
    isNaN(rangeEnd) ||
    isNaN(manufacturerRangeStart) ||
    isNaN(manufacturerRangeEnd)
  ) {
    throw new ErrorResponse("All range values must be valid numbers!", 400);
  }

  if (rangeEnd <= rangeStart) {
    throw new ErrorResponse("rangeEnd muss größer als rangeStart sein!", 400);
  }

  if (manufacturerRangeEnd <= manufacturerRangeStart) {
    throw new ErrorResponse(
      "manufacturerRangeEnd muss größer als manufacturerRangeStart sein!",
      400
    );
  }

  const findRange = await Range.findOne({ rangeStart });
  if (findRange) {
    throw new ErrorResponse("Range already exists!", 409);
  }

  const overlappingRange = await Range.findOne({
    $or: [
      {
        $or: [
          { rangeStart: { $lte: rangeStart }, rangeEnd: { $gte: rangeStart } },
          { rangeStart: { $lte: rangeEnd }, rangeEnd: { $gte: rangeEnd } },
          { rangeStart: { $gte: rangeStart }, rangeEnd: { $lte: rangeEnd } },
        ],
      },
      {
        $or: [
          {
            manufacturerRangeStart: { $lte: manufacturerRangeStart },
            manufacturerRangeEnd: { $gte: manufacturerRangeStart },
          },
          {
            manufacturerRangeStart: { $lte: manufacturerRangeEnd },
            manufacturerRangeEnd: { $gte: manufacturerRangeEnd },
          },
          {
            manufacturerRangeStart: { $gte: manufacturerRangeStart },
            manufacturerRangeEnd: { $lte: manufacturerRangeEnd },
          },
        ],
      },
    ],
  });

  if (overlappingRange) {
    throw new ErrorResponse("Range overlaps with an existing entry!", 409);
  }

  let certificateUrl = req.files?.internCertificate
    ? req.files.internCertificate[0].path
    : "";
  let manufacturerCertificateUrl = req.files?.manufacturerCertificate
    ? req.files.manufacturerCertificate[0].path
    : "";

  const newRange = await Range.create({
    rangeStart,
    rangeEnd,
    manufacturerRangeStart,
    manufacturerRangeEnd,
    internCertificate: certificateUrl,
    manufacturerCertificate: manufacturerCertificateUrl,
  });

  res.status(201).json(newRange);
});

const editRange = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  let {
    rangeStart,
    rangeEnd,
    manufacturerRangeStart,
    manufacturerRangeEnd,
    removeInternCertificate, // New flag for deleting the internCertificate
    removeManufacturerCertificate, // If you want to support deleting manufacturerCertificate too
  } = req.body;

  // Convert values to numbers
  rangeStart = Number(rangeStart);
  rangeEnd = Number(rangeEnd);
  manufacturerRangeStart = Number(manufacturerRangeStart);
  manufacturerRangeEnd = Number(manufacturerRangeEnd);

  console.log(
    "Converted Values:",
    rangeStart,
    rangeEnd,
    manufacturerRangeStart,
    manufacturerRangeEnd
  );

  // Validate numeric inputs
  if (
    isNaN(rangeStart) ||
    isNaN(rangeEnd) ||
    isNaN(manufacturerRangeStart) ||
    isNaN(manufacturerRangeEnd)
  ) {
    throw new ErrorResponse("All range values must be valid numbers!", 400);
  }

  if (rangeEnd <= rangeStart) {
    throw new ErrorResponse("rangeEnd must be greater than rangeStart!", 400);
  }

  if (manufacturerRangeEnd <= manufacturerRangeStart) {
    throw new ErrorResponse(
      "manufacturerRangeEnd must be greater than manufacturerRangeStart!",
      400
    );
  }

  // Check if the range exists
  const findRange = await Range.findById(id);
  if (!findRange) {
    throw new ErrorResponse("Range not found!", 404);
  }

  // Check for overlapping ranges (excluding the current one)
  const overlappingRange = await Range.findOne({
    _id: { $ne: id }, // Exclude current range
    $or: [
      {
        $or: [
          { rangeStart: { $lte: rangeStart }, rangeEnd: { $gte: rangeStart } },
          { rangeStart: { $lte: rangeEnd }, rangeEnd: { $gte: rangeEnd } },
          { rangeStart: { $gte: rangeStart }, rangeEnd: { $lte: rangeEnd } },
        ],
      },
      {
        $or: [
          {
            manufacturerRangeStart: { $lte: manufacturerRangeStart },
            manufacturerRangeEnd: { $gte: manufacturerRangeStart },
          },
          {
            manufacturerRangeStart: { $lte: manufacturerRangeEnd },
            manufacturerRangeEnd: { $gte: manufacturerRangeEnd },
          },
          {
            manufacturerRangeStart: { $gte: manufacturerRangeStart },
            manufacturerRangeEnd: { $lte: manufacturerRangeEnd },
          },
        ],
      },
    ],
  });

  if (overlappingRange) {
    throw new ErrorResponse("Range overlaps with an existing entry!", 409);
  }

  // Handle file uploads and removals
  let certificateUrl = findRange.internCertificate;
  let manufacturerCertificateUrl = findRange.manufacturerCertificate;

  if (req.files?.internCertificate) {
    certificateUrl = req.files.internCertificate[0].path;
  } else if (removeInternCertificate === "true") {
    certificateUrl = null; // Remove internCertificate if requested
  }

  if (req.files?.manufacturerCertificate) {
    manufacturerCertificateUrl = req.files.manufacturerCertificate[0].path;
  } else if (removeManufacturerCertificate === "true") {
    manufacturerCertificateUrl = null; // Remove manufacturerCertificate if requested
  }

  // Update the range
  const updatedRange = await Range.findByIdAndUpdate(
    id,
    {
      rangeStart,
      rangeEnd,
      manufacturerRangeStart,
      manufacturerRangeEnd,
      internCertificate: certificateUrl,
      manufacturerCertificate: manufacturerCertificateUrl,
    },
    { new: true }
  );

  res.status(200).json(updatedRange);
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
};
