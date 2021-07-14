import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav_wrap">
      <Link to="/view-course" className="nav_link">
        <h3>View course</h3>
      </Link>
      <Link to="/add-course" className="nav_link">
        <h3>Add course</h3>
      </Link>
    </div>
  );
};

export default Navbar;
