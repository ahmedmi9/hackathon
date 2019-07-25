import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import ManangeCourse from "./courses/ManangeCourse";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginPage } from "../LoginPage/LoginPage";
import { RegisterPage } from "../RegisterPage/RegisterPage";
import searchPage from "./search/searchPage";
import { PrivateRoute } from "../_components";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        {/* <Route exact path="/login" component={LoginPage} /> */}
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManangeCourse} />
        <Route path="/course" component={ManangeCourse} />
        <Route path="/search" component={searchPage} />
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
