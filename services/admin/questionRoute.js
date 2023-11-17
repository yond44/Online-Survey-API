// const express = require('express')
const Questions = require("../../model/questions");
const asyncHandler = require('express-async-handler')
// const router = express.Router()

 const getQuestion = asyncHandler (async (req, res) => {
   try {
     const question = await Questions.find({});
     res.status(200).json(question);
   } catch (error) {
        res.status(500);
        throw new Error(error.message);
   }
 });

const getById = asyncHandler (async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Questions.findById(id);
    res.status(200).json(question);
  } catch (error) {
    res.status(500)
    throw new Error (`cannot find with this ${id}`)
  }
});

const inputQuestion = asyncHandler( async (req, res) => {
  const { judul, kategori, pertanyaan_1, pertanyaan_2, pertanyaan_3, pertanyaan_4, pertanyaan_5 } = req.body;
  if (judul === "" || kategori === "" )
    return res.status(400).json({ error: "Tolong isi kolom Judul dan Kategori" });
  try {
    const question = await Questions.create({
      judul: judul,
      kategori: kategori,
      pertanyaan_1: pertanyaan_1,
      pertanyaan_2: pertanyaan_2,
      pertanyaan_3: pertanyaan_3,
      pertanyaan_4: pertanyaan_4,
      pertanyaan_5: pertanyaan_5,
    });
    res.status(200).json(question);
  } catch (error) {
      res.status(500)
      throw new Error(error.message);
  }
});

const updateQuestion = asyncHandler (async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Questions.findByIdAndUpdate(id, req.body);

    if (!question) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const updated = await Questions.findById(id);
    res.status(200).json(updated);
  } catch (error) {
        res.status(500);
        throw new Error(`cannot find with this ${id}`);
  }
});

const deleteQuestion = asyncHandler( async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Questions.findByIdAndDelete(id);
    if (!question) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    res.status(200).json("deleted");
  } catch (error) {
        res.status(500);
        throw new Error(`cannot find with this ${id}`);
  }
});

module.exports = {
  getQuestion,
  getById,
  inputQuestion,
  updateQuestion,
  deleteQuestion,
};