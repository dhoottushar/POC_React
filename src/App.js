import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/SignIn/login.component";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from './components/Home/home.component';
import Header from './components/Header/header.component';
import InputControl from './components/InputControl/inputControl';
function App() {
  return (<Router>
    <div className="App">
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Dummy header</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <div className="mt-70">
        <Header />
      </div>
      {/* <div className="auth-wrapper">
        <div className="auth-inner"> */}
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/home" component={Home} />
            <Route path="/input" component={InputControl} />
          </Switch>
        {/* </div>
      </div> */}
    </div></Router>
  );
}

export default App;
