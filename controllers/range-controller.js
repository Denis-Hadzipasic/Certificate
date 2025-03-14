const Range = require("../models/range-model");
const asyncWrapper = require("../utils/asyncWrapper");
const ErrorResponse = require("../utils/ErrorResponse");

const createRange = asyncWrapper(async (req, res, next) => {
  const { rangeStart, rangeEnd, manufacturerRangeStart, manufacturerRangeEnd } = req.body;

  const findRange = await Range.findOne({ rangeStart });

  if (findRange) {
    throw new ErrorResponse("Range already exists!", 409);
  }

  const newRange = await Range.create({
    rangeStart,
    rangeEnd,
    manufacturerRangeStart,
    manufacturerRangeEnd
  });

  res.status(201).json(newRange);
});

const editRange = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { rangeStart, rangeEnd, manufacturerRangeStart, manufacturerRangeEnd } = req.body;

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
      manufacturerRangeEnd
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
