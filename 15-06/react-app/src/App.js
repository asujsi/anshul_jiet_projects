//Each file is a component
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Test from "./components/Test";
import Signup from "./components/Signup";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/*<h1>This is Header</h1>*/}
          <Switch>
            <Route path={"/"} exact>
              <h1>This is Home Page</h1>
            </Route>
            <Route path={"/about-us"}>
              <h1>This is About-Us</h1>
            </Route>
            <Route path={"/contact-us"}>
              <h1>This is Contact-Us</h1>
            </Route>
            <Route path={"/login"}>
              <h1>This is Login</h1>
            </Route>
            <Route path={"/signup"}>
              <Signup />
            </Route>
            <Route path={"/test"}>
              <Test />
            </Route>
            <Route path={"/404"}>
              <h1>This is 404</h1>
            </Route>
            <Route path={"/**"}>
              <Redirect to={"/404"} />
            </Route>
          </Switch>
          {/*<h1>This is Footer</h1>*/}
        </div>
      </Router>
    );
  }
}

export default App;
