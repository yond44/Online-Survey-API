const mongoose = require("mongoose");

const kategoriSchema = mongoose.Schema(
  {
    kategori: {
      type: String,
      required: [true, "Please enter a product name"],
    }
  }
);

const Kategori = mongoose.model("Kategori", kategoriSchema);

module.exports = Kategori;
