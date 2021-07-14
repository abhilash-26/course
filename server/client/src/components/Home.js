import React, { useEffect } from "react";
import axios from "axios";
import Course from "./Course";
import Addcourse from "./Addcourse";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router";
import CourseDetail from "./CourseDetail";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/view-course" component={Course} />
        <Route path="/add-course" component={Addcourse} />
        <Route path="/view-course-detail" component={CourseDetail} />
      </Switch>
    </div>
  );
};

export default Home;
