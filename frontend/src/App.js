import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CreateUser from './components/CreateUsers/CreateUser';
import CreateBoxer from './components/CreateUsers/CreateBoxer';
import CreateCouch from './components/CreateUsers/CreateCouch';
import CreateCommOfficer from './components/CreateUsers/CreateCommOfficer';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LogIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/createuser' component={CreateUser} />
        <Route exact path='/createboxer' component={CreateBoxer} />
        <Route exact path='/createcouch' component={CreateCouch} />
        <Route exact path='/createcommofficer' component={CreateCommOfficer} />
      </Switch>
    </Router>
  );
}

export default App;
