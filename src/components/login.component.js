import React, { Component } from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../pic/logo.svg";
import {combineReducers, createStore} from "redux";
//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { connect } from 'react-redux'

//ToDO:
// брать token, как-то его сохранять


class Login extends Component {
    state = {
        email: "lox",
        password: "123"
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

    send_request = async (email, password) => {
        fetch('http://84.201.136.171:8000/auth/', {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: "lox",
                password: "123"
            })
        }).then(
            response => response.json()
        ).then(jsondata => {
                console.log(jsondata);
                console.log(jsondata.token);
                // localStorage.setItem('token', jsondata.token);
                console.log(this.props.token);
                this.props.setToken(jsondata.token);
            }
        );

        console.log(email);
        console.log(password);
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        this.send_request(this.state.email, this.state.password);

        console.log('Отправленная почта: ' + this.state.email);
        console.log('Отправленный пароль: ' + this.state.password);

        //ToDo с Никитой
        if (5 > 3) {
            //window.location.assign('http://localhost:3000/final-card-page/');
            this.props.history.push('/final-card-page');
        }
    }

    render() {
        return (
            <div>
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

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
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