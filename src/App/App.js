import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../components/common/Header";
import AboutPage from "../components/about/AboutPage";
import PageNotFound from "../components/PageNotFound";
import CoursesPage from "../components/courses/CoursesPage";
import ManangeCourse from "../components/courses/ManangeCourse";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import searchPage from "../components/search/searchPage";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      // <div className="jumbotron">
      //   <div className="container">
      //     <div className="col-sm-8 col-sm-offset-2">
      //       {alert.message && (
      //         <div className={`alert ${alert.type}`}>{alert.message}</div>
      //       )}

      //       <Router history={history}>
      //         {/* <div>
      //             <PrivateRoute exact path="/" component={HomePage} />
      //             <Route path="/login" component={LoginPage} />
      //             <Route path="/register" component={RegisterPage} />
      //           </div> */}
      //         <div className="container-fluid">
      //           <Header />
      //           <Switch>
      //             {/* <Route exact path="/" component={HomePage} /> */}
      //             <Route path="/" component={LoginPage} />
      //             {/* <Route path="/login" component={LoginPage} /> */}
      //             <Route path="/home" component={HomePage} />
      //             <Route path="/register" component={RegisterPage} />
      //             <Route path="/about" component={AboutPage} />
      //             <Route path="/courses" component={CoursesPage} />
      //             <Route path="/course/:slug" component={ManangeCourse} />
      //             <Route path="/course" component={ManangeCourse} />
      //             <Route path="/search" component={searchPage} />
      //             {/* <Route component={PageNotFound} /> */}
      //           </Switch>
      //           <ToastContainer autoClose={3000} hideProgressBar />
      //         </div>
      //       </Router>
      //     </div>
      //   </div>
      // </div>

      <Router history={history}>
        <div className="container-fluid">
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/course/:slug" component={ManangeCourse} />
            <Route path="/course" component={ManangeCourse} />
            <Route path="/search" component={searchPage} />
            <Route component={PageNotFound} />
          </Switch>
          <ToastContainer autoClose={3000} hideProgressBar />
        </div>
      </Router>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(
  mapState,
  actionCreators
)(App);
export { connectedApp as App };
