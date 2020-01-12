import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import logo from './pic/logo.svg'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import AfterRegPage from "./components/AfterRegPage"
import FinalPage from "./components/FinalPage"

class App extends React.Component {

  // рендер компоненты с Login и Sign up

  render() {
    return (
        <Router>
          <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/sign-in"}>KusokMIPT</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link log_method={this.handleSubmit} className="nav-link" to={"/sign-in"}>Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="auth-wrapper">

              <div className="auth-inner">
                <Switch>
                  <Route exact path='/' component={Login}/>
                  <Route path="/sign-in" component={Login}/>
                  <Route path="/sign-up" component={SignUp}/>
                  <Route path="/after-reg-register" component={AfterRegPage}/>
                  <Route path="/final-card-page" component={FinalPage}/>
                </Switch>
              </div>
            </div>
          </div>
        </Router>
    );
  }

  // render() {
  //     return (
  //         <div className="App">
  //             <h1> Добавляем новую компоненту</h1>
  //             <AfterRegPage afterRegPagefterReg />
  //         </div>
  //     )
  // }
}

//Через afterRegPagefterReg будем передавать аргументы

export default App;
