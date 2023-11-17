const mongoose = require('mongoose')

const questionsSchema = mongoose.Schema({
  judul: {
    type: String,
    required: [true, "Please enter a product name"],
  },
  kategori: {
    type: String,
    required: [true, "Please enter the Question"],
  },
  pertanyaan_1: {
    type: String,
  },
  pertanyaan_2: {
    type: String,
    
  },
  pertanyaan_3: {
    type: String,
   
  },
  pertanyaan_4: {
    type: String,
   
  },
  pertanyaan_5: {
    type: String,
    
  },
}, {
    timestamps: true
});

const Questions = mongoose.model("Questions", questionsSchema);

module.exports = Questions;