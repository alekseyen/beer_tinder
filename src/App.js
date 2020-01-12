import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
