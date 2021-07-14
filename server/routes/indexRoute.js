const express = require("express");
const router = express.Router();

const {
  createCourse,
  getAllCourse,
} = require("../controllers/courseController");

router.post("/view-course", getAllCourse);

router.post("/add-course", createCourse);

module.exports = router;
