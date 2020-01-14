import React, { Component } from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../pic/logo.svg";
import {combineReducers, createStore} from "redux";
//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from '../reducers'
import request_to_back from '../util/requests';

import { connect } from 'react-redux'

//ToDO:
// брать token, как-то его сохранять


class Login extends Component {
    state = {
        email: null,
        password: null,
        error: ""
    }

    constructor(props) {
        super(props);

        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    emailChange(event){
        this.setState({email: event.target.value});
    }

    passwordChange(event){
        this.setState({password: event.target.value});
    }

    send_request = async () => {

        fetch('http://84.201.136.171:8000/auth/', {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.email,
                password: this.state.password
            })
        }).then(
            response => response.json()
        ).then(jsondata => {
                console.log('Got:', jsondata);
                if (jsondata.hasOwnProperty('token')) {
                    console.log('Token:',jsondata.token);
                    this.props.setToken(jsondata.token);
                    this.props.history.push('/final-card-page');
                } else {
                    this.setState({error: 'Wrong email or password. Please try again.'});
                }

                console.log('Отправленная почта: ' + this.state.email);
                console.log('Отправленный пароль: ' + this.state.password);
            },
            reason => {
                this.setState({error: 'Something went wrong. Please try again.'});
            }
        );
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        this.send_request(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="auth-wrapper">

                <div className="auth-inner">


                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/sign-in"}> <FontAwesomeIcon/> Beerder</Link>
                        <img src={logo} className="App-logo" alt="logo"/>


                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link log_method={this.handleSubmit} className="nav-link"
                                          to={"/sign-in"}>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <form onSubmit={this.handleSubmit}>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={this.emailChange}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={this.passwordChange} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    <p className="text-danger">{ this.state.error }</p>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToken: (new_token) => { dispatch({type: 'SET_TOKEN', token: new_token}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
