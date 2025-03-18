const Range = require("../models/range-model");
const asyncWrapper = require("../utils/asyncWrapper");
const ErrorResponse = require("../utils/ErrorResponse");

const createRange = asyncWrapper(async (req, res, next) => {
  const { rangeStart, rangeEnd, manufacturerRangeStart, manufacturerRangeEnd } = req.body;

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

  // Correctly retrieve file paths from req.files
  let certificateUrl = req.files?.internCertificate ? req.files.internCertificate[0].path : "";
  let manufacturerCertificateteUrl = req.files?.manufacturerCertificate
    ? req.files.manufacturerCertificate[0].path
    : "";

  const newRange = await Range.create({
    rangeStart,
    rangeEnd,
    manufacturerRangeStart,
    manufacturerRangeEnd,
    internCertificate: certificateUrl,
    manufacturerCertificate: manufacturerCertificateteUrl,
  });

  res.status(201).json(newRange);
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
};
