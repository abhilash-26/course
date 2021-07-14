import React from "react";
import { Link } from "react-router-dom";

const CourseAll = ({ value }) => {
  return (
    <>
      <Link
        to={{ pathname: "/view-course-detail", state: { value } }}
        style={{
          textDecoration: "none",
          margin: "5px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            margin: "5px",
            borderBottom: "2px solid red",
            padding: "3px",
          }}
        >
          {value.title}
        </h1>
        <p
          style={{
            margin: "5px",
            padding: "3px",
          }}
        >
          -{value.instructorName}
        </p>
      </Link>
    </>
  );
};

export default CourseAll;
