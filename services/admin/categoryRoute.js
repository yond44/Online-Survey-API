const Kategori = require("../../model/category");
const asyncHandler = require("express-async-handler");

const getCategory = asyncHandler(async (req, res) => {
  try {
    const kategori = await Kategori.find({});
    res.status(200).json(kategori);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const inputCategory = asyncHandler(async (req, res) => {

  try {
    const kategori = await Kategori.create(req.body);
    res.status(200).json(kategori);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const getById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const kategori = await Kategori.findById(id);
    res.status(200).json(kategori);
  } catch (error) {
    res.status(500);
    throw new Error(`cannot find with this ${id}`);
  }
});

module.exports = {
  getCategory,
  inputCategory,
  getById,
};