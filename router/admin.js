const {
  getQuestion,
  getById,
  inputQuestion,
  updateQuestion,
  deleteQuestion
} = require("../services/admin/questionRoute");

const express = require("express");

const adminRouter = express.Router();

adminRouter.get("/questions", getQuestion);
adminRouter.get("/questions/:id", getById);
adminRouter.post("/questions", inputQuestion);
adminRouter.put("/questions/:id", updateQuestion);
adminRouter.delete("/questions/:id", deleteQuestion);

module.exports = adminRouter;   
