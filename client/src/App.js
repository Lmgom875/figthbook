import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NarBar";
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import HomePage from "./components/HomePages/HomePage";
import UserHomePage from './components/HomePages/UserHomePage'
import BoxerHomePage from "./components/HomePages/BoxerHomePage";
import CouchHomePage from "./components/HomePages/CouchHomePage";
import ComOfiHomePage from './components/HomePages/ComOfiHomePage'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/user">
            <UserHomePage />
          </Route>
          <Route exact path="/boxer">
            <BoxerHomePage />
          </Route>
          <Route exact path="/couch">
            <CouchHomePage />
          </Route>
          <Route exact path="/comofi">
            <ComOfiHomePage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
