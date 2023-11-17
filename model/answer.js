const mongoose = require("mongoose");

const answerSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    nama: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    kategori: {
      type: String,
      required: [true, "Please enter the Question"],
    },
    judul: {
      type: String,
      required: [true, "Please enter the Question"],
    },
    Q1: {
      type: String,
      required: [true, "Please enter the Question"],
    },
    Q2: {
      type: String,
      required: [true, "Please enter the Question"],
    },
    Q3: {
      type: String,
      required: [true, "Please enter the Question"],
    },
    Q4: {
      type: String,
      required: [true, "Please enter the Question"],
    },
    Q5: {
      type: String,
      required: [true, "Please enter the Question"],
    },
  },
  {
    timestamps: true,
  }
);

const Answers = mongoose.model("Answers", answerSchema);

module.exports = Answers;
