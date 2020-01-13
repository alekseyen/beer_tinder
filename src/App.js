import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import logo from './pic/logo.svg'

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import AfterRegPage from "./components/AfterRegPage"
import FinalPage from "./components/FinalPage"

//for Redux
import {Provider} from 'react-redux';
import {Redux} from 'react-redux'
//import store from './store';
import { createStore } from "redux";


//const { createStore } = Redux;
//const store = createStore();

const initState = {
  token: "default_value"
}


function myReducer(state = initState, action) {
  console.log(action, state);
  console.log('setting...');
  return {
    token: action.token
  }
}

const store = createStore(myReducer);

store.subscribe(() => {
  console.log('token updated');
  console.log(store.getState());
})
const setTokenAction = { type: 'SET_TOKEN', token: 'default_value'};

store.dispatch(setTokenAction);

class App extends React.Component {
  // рендер компоненты с Login и Sign up

  render() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
  }
}

//Через afterRegPagefterReg будем передавать аргументы

export default App;
