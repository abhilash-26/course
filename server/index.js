const express = require("express");
const mongoose = require("mongoose");
const api = require("./routes/indexRoute");

const app = express();

require("dotenv").config();

app.use(express.json());

mongoose
  .connect(process.env.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected To the database");
  })
  .catch((error) => {
    console.log(error);
  });

const PORT = 8000;

app.listen(PORT, () => console.log("server is up and running..."));

app.use("/", api);
