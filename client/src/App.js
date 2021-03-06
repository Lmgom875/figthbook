import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NarBar/NarBar";
import Footer from './components/Footer/Footer'
import SignUp from "./components/SignUp/SignUp";
import CreateEvent from './components/CreateForms/CreateEvent/CreateEvent';
import LogIn from "./components/Login/LogIn";
import HomePage from "./components/HomePages/HomePage";
import UserHomePage from "./components/HomePages/UserHomePage";
import BoxerHomePage from "./components/HomePages/BoxerHomePage";
import CouchHomePage from "./components/HomePages/CouchHomePage";
import ComOfiHomePage from "./components/HomePages/ComOfiHomePage";

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
          <Route exact path="/newevent">
            <CreateEvent />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
