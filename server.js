require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const adminRoute = require("./router/admin");
const categoryRoute = require('./router/category.js')
const answerRoute = require('./router/answer')
app.use(express.json());
const errorMiddleware = require('./middleware/errorMiddleware.js')
const cors = require('cors')
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;
const FRONTEND = process.env.FRONTEND

app.use(cors({ credentials: true, origin: FRONTEND }));
app.use("/api", adminRoute);
app.use("/api",categoryRoute)
app.use("/api", answerRoute);


//routes



app.get('/blog', (req,res) => {
  throw new Error('fake error')
})
app.use(errorMiddleware);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to Mongo");
    app.listen(PORT, () => {
      console.log(`API is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
