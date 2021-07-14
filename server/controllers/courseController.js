const courseSchema = require("../models/courseModel");

const createCourse = async (req, res) => {
  try {
    const { title, description, instructorName, courseCharge, courseDuration } =
      req.body;
    const result = await courseSchema.create({
      title: title,
      description: description,
      instructorName: instructorName,
      courseCharge: courseCharge,
      courseDuration: courseDuration,
    });
    res.send({
      msg: "Created succesfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllCourse = async (req, res) => {
  try {
    const result = await courseSchema.find({});
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createCourse, getAllCourse };
