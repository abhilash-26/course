import React from "react";
import { useLocation } from "react-router-dom";

const CourseDetail = () => {
  const location = useLocation();
  const val = location.state.value;
  console.log(val);
  return (
    <div>
      <h1>Course Title:</h1>

      <h2 style={{ color: "red" }}>{val.title}</h2>
      <h1>Course Description:</h1>

      <h2 style={{ color: "red" }}>{val.description}</h2>
      <h1>Course Fee:</h1>
      <h2 style={{ color: "red" }}>${val.courseCharge}</h2>
      <h1>Instructor:</h1>
      <h2 style={{ color: "red" }}>{val.instructorName}</h2>
      <h1>Course Duration</h1>
      <h2 style={{ color: "red" }}>{val.courseDuration}</h2>
    </div>
  );
};

export default CourseDetail;
