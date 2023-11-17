const express = require("express");
const {
  getCategory,
  inputCategory,
  getById,
} = require("../services/admin/categoryRoute");

const categoryRoute = express.Router();


categoryRoute.get ('/category', getCategory)
categoryRoute.get("/category/:id", getById);
categoryRoute.post("/category", inputCategory);

module.exports = categoryRoute