const {
  getAnswers,
  getById,
  inputAnswers,
  deleteAnswers,
} = require("../services/admin/answerRoute");

const express = require("express");

const answerRouter = express.Router();


answerRouter.get("/answer", getAnswers);
answerRouter.get("/answer/:id", getById);
answerRouter.post("/answer", inputAnswers);
answerRouter.delete("/answer/:id", deleteAnswers);


module.exports = answerRouter