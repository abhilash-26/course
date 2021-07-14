import axios from "axios";
import React, { useState } from "react";

const Addcourse = () => {
  const [allData, setAllData] = useState({
    title: "",
    description: "",
    instructorName: "",
    courseCharge: "",
    courseDuration: "",
  });
  const handleChange = (e) => {
    setAllData({ ...allData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const result = await axios({
      method: "post",
      url: "http://localhost:8000/api/add-course",
      data: allData,
    });
    alert("created succesfully");
    setAllData({
      title: "",
      description: "",
      instructorName: "",
      courseCharge: "",
      courseDuration: "",
    });
    console.log(result);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "15px",
      }}
    >
      <label>Course Title:</label>{" "}
      <input
        style={{ borderRadius: "5px" }}
        name="title"
        value={allData.title}
        onChange={handleChange}
      />
      <label>Course description:</label>{" "}
      <input
        style={{ borderRadius: "5px" }}
        name="description"
        value={allData.description}
        onChange={handleChange}
      />
      <label>Course Instructor:</label>
      <input
        style={{ borderRadius: "5px" }}
        name="instructorName"
        value={allData.instructorName}
        onChange={handleChange}
      />
      <label>Course Fee:</label>{" "}
      <input
        style={{ borderRadius: "5px" }}
        name="courseCharge"
        value={allData.courseCharge}
        onChange={handleChange}
      />
      <label>Course Duration:</label>{" "}
      <input
        style={{ borderRadius: "5px" }}
        name="courseDuration"
        value={allData.courseDuration}
        onChange={handleChange}
      />
      <button
        style={{
          width: "50px",
          margin: "7px",
          padding: "2px",
          borderRadius: "10px",
          backgroundColor: "rosybrown",
        }}
        onClick={handleSubmit}
      >
        +
      </button>
      <h1>{allData.title}</h1>
      <h2>{allData.description}</h2>
    </div>
  );
};

export default Addcourse;
