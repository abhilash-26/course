const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  description: String,
  instructorName: String,
  courseCharge: Number,
  courseDuration: String,
});
module.exports = mongoose.model("courseSchema", schema, "courseSchema");
