import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseAll from "./CourseAll";

const Course = () => {
  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getCourses = async () => {
      const result = await axios({
        method: "post",
        url: "http://localhost:8000/api/view-course",
      });
      setIsLoading(false);
      console.log(result.data);
      setCourse(result.data);
    };

    getCourses();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && <h1>All Available courses are...</h1>}
      {course.map((item, i) => (
        <CourseAll value={item} />
      ))}
    </div>
  );
};

export default Course;
