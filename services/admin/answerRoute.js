const Answers = require("../../model/answer");
const asyncHandler = require("express-async-handler");

const getAnswers = asyncHandler(async (req, res) => {
  try {
    const answer = await Answers.find({});
    res.status(200).json(answer);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const inputAnswers = asyncHandler(async (req, res) => {
  const { id, judul, nama, kategori, Q1, Q2, Q3, Q4, Q5 } = req.body;

  if (nama === '' || Q1 === '' || Q2 === '' || Q3 === '' || Q4 === '' || Q5 === '')
    return res
      .status(400)
      .json({ error: "Tolong isi semua kolom " });
  try {
    const answer = await Answers.create({
      id: id,
      judul: judul,
      nama: nama,
      kategori: kategori,
      Q1: Q1,
      Q2: Q2,
      Q3: Q3,
      Q4: Q4,
      Q5: Q5,
    });
    res.status(200).json(answer);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const getById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const answer = await Answers.findById(id);
    res.status(200).json(answer);
  } catch (error) {
    res.status(500);
    throw new Error(`cannot find with this ${id}`);
  }
});

const deleteAnswers = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const answer = await Answers.findByIdAndDelete(id);
    if (!answer) {
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
  getAnswers,
  inputAnswers,
  getById,
  deleteAnswers,
};
